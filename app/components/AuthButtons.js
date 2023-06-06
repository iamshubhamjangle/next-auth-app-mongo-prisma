"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const AuthButtons = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-row flex-wrap gap-4 m-4 justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push("/login")}
        >
          Signin
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push("/register")}
        >
          Register
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>

      <div className="flex flex-row flex-wrap gap-4 m-4 justify-center">
        <button
          className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push("/dashboard")}
        >
          Dashboard
        </button>
        <button
          className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push("/protected-client")}
        >
          Client Protected Route
        </button>
        <button
          className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push("/protected-server")}
        >
          Server Protected Route
        </button>
        <button
          className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push("/unknown")}
        >
          404
        </button>
      </div>
    </>
  );
};

export default AuthButtons;
