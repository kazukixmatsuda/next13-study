"use client";

import { SessionProvider } from "next-auth/react";

export default function AuthContext({ children }: React.PropsWithChildren) {
  return <SessionProvider>{children}</SessionProvider>;
}
