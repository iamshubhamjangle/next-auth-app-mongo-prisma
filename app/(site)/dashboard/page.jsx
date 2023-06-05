"use client";

import { useRouter } from "next/navigation";

const dashboard = () => {
  const router = useRouter();

  return (
    <div className="text-center">
      <h1 className="text-4xl">Public Dashboard Route</h1>
      <p className="text-lg my-12">
        Public information which won't require session data.
      </p>
      <button
        className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mr-5"
        onClick={() => router.replace("/")}
      >
        Home
      </button>
    </div>
  );
};

export default dashboard;
