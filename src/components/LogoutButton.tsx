"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() =>
        signOut({
          callbackUrl: "/auth/signin", // 🔥 FORCE redirect
        })
      }
      className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 text-white"
    >
      Logout
    </button>
  );
}
