import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const useAuthentication = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!session?.user) {
      router.push(`/login?redirect=${pathname}`);
    }
  }, [session, router]);

  return session;
};

export default useAuthentication;
