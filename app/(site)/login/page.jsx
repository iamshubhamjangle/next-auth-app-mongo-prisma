"use client";

import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Login({ searchParams }) {
  const router = useRouter();
  const { data: session } = useSession();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    // Handle Next Auth Errors. Should be executed on once.
    // Replacing the URL to avoid toast notification when we submit and page re-renders
    // Also there's a bug when we login with an exiting account, using oAuth provider ->
    // The provider return "OAuthAccountNotLinked". At this moment If we don't replace the URL
    // and login with valid credential. signIn method will return an "OAuthAccountNotLinked" error in callback.
    if (searchParams?.error === "OAuthAccountNotLinked") {
      const redirectTo = searchParams?.callbackUrl || "/login";
      router.replace(redirectTo, undefined, {
        shallow: true,
      });
      toast.error("Your account already exist with same email!");
    }
  }, []);

  useEffect(() => {
    if (session?.user) {
      toast.success("You are currently Logged In!");
      router.push("/");
    }
  }, []);

  // NextAuth Credential Login
  // Check api/auth/[...nextauth]/route.jsx for more details.
  const handleLoginWithCredentials = async (e) => {
    e.preventDefault();
    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      // console.log("handleLoginWithCredentials::Callback::", callback);

      if (callback?.error !== null) {
        return toast.error(callback?.error);
      }

      if (callback?.ok) {
        toast.success("Logged in successfully!");
        const redirectTo = searchParams?.callbackUrl || "/";
        router.replace(redirectTo);
      }
    });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto cursor-pointer"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Company Logo"
            onClick={() => router.replace("/")}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLoginWithCredentials}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="flex flex-col gap-3 mt-8">
            <button
              type="submit"
              onClick={() => signIn("google")}
              className="flex w-full justify-center rounded-md bg-slate-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
            >
              Sign in with Google
            </button>

            <button
              type="submit"
              onClick={() => signIn("github")}
              className="flex w-full justify-center rounded-md bg-slate-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
            >
              Sign in with Github
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              onClick={() => {
                // This makes sure we redirect user back to where he was heading before authentication,
                // by adding a redirect query param
                router.replace(
                  searchParams?.callbackUrl
                    ? `/register?callbackUrl=${searchParams?.callbackUrl}`
                    : "/register"
                );
              }}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              Register Now!
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
