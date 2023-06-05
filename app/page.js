import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import User from "./components/user";
import AuthButtons from "./components/AuthButtons";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <section className="text-center">
      <AuthButtons />
      <hr />
      <h1>Home</h1>
      <h1>Server Side Rendered</h1>
      <pre>{JSON.stringify(session)}</pre>
      <h1>Client Side Rendered</h1>
      <User />
    </section>
  );
}
