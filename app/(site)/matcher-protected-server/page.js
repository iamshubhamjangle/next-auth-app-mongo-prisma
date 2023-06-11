import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Protected = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    const headersList = headers();
    const currentPathName = headersList.get("x-invoke-path") || "";
    currentPathName
      ? redirect("/login?callbackUrl=" + currentPathName)
      : redirect("/login");
  }

  return (
    <div className="text-center">
      <h1 className="text-4xl">Server Protected Route</h1>
    </div>
  );
};

export default Protected;
