"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session?.user) {
      router.push("/login");
    }
  }, [session]);

  return (
    <div className="text-center">
      <h1 className="text-4xl">Protected Route</h1>
      <p className="text-lg my-12">Hi {session?.user?.email}</p>
      <button
        className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mr-5"
        onClick={() => router.replace("/")}
      >
        Home
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </div>
  );
};

export default dashboard;
