import { createAuthClient } from "better-auth/react";
export const { signIn, signOut, signUp, getSession, useSession } =
  createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: process.env.NEXT_PUBLIC_AUTH_URL || "http://localhost:3000",
  });
