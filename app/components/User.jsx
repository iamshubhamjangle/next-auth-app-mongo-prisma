"use client";

/**
 * Use `useSession` hook if you need to access session data safely,
 * and don't want to redirect user to /login
 * If you want to directly redirect use if session not present use `useAuthentication` hook.
 */

import { useSession } from "next-auth/react";

export default function User() {
  const { data: session } = useSession();
  return <div>{JSON.stringify(session)}</div>;
}
