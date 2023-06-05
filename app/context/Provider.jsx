"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default function Provider({ children }) {
  return (
    <SessionProvider>
      <Toaster />
      {children}
    </SessionProvider>
  );
}
