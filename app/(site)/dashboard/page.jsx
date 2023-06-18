import Link from "next/link";

const dashboard = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl">Public Dashboard Route</h1>
      <p className="text-lg my-12">
        Public information which won't require session data.
      </p>
      <Link href="/">
        <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mr-5">
          Home
        </button>
      </Link>
    </div>
  );
};

export default dashboard;
