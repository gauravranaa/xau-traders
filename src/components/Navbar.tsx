"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import LogoutButton from "./LogoutButton";
import { ADMIN_EMAILS } from "@/lib/admin"; // ✅ admin whitelist

export default function Navbar() {
  const { data: session, status } = useSession();
  const [mounted, setMounted] = useState(false);

  // ✅ Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || status === "loading") return null;

  const isAdmin =
    session?.user?.email &&
    ADMIN_EMAILS.includes(session.user.email);

  return (
    <header
      className="
        sticky top-0 z-50
        bg-[#0B0F14]/90
        backdrop-blur-md
        border-b border-white/10
        shadow-xl
      "
    >
      <div className="flex items-center justify-between px-10 py-4">
        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-white"
        >
          XAU<span className="text-blue-500"> TRADERS</span>
        </Link>

        {/* NAV LINKS */}
        

        <nav className="flex items-center gap-6 text-white">
          <Link
           href="/certificates"
           className="text-gray-200 hover:text-white transition"
          >
  Proof of Work
</Link>

          <Link
            href="/#courses"
            className="text-gray-200 hover:text-white transition"
          >
            Courses
          </Link>
          <Link href="/why-us"className="text-gray-200 hover:text-white transition">Why Choose Us    </Link>
          <Link href="/mission"className="text-gray-200 hover:text-white transition">Mission & Vision</Link>

          <Link
            href="/#vlogs"
            className="text-gray-200 hover:text-white transition"
          >
            Blogs
          </Link>

          {session ? (
            <>
              {/* Dashboard */}
              <Link
                href="/dashboard"
                className="
                  px-4 py-2 rounded
                  border border-white/20
                  text-white
                  hover:bg-white/10
                  transition
                "
              >
                Dashboard
              </Link>

              {/* ✅ ADMIN (ONLY FOR WHITELISTED EMAILS) */}
              {isAdmin && (
                <Link
                  href="/admin"
                  className="
                    px-4 py-2 rounded
                    border border-red-500/40
                    text-red-400
                    hover:bg-red-500/10
                    transition
                  "
                >
                  Admin
                </Link>
              )}

              {/* Logout */}
              <LogoutButton />
            </>
          ) : (
            <>
              {/* Login */}
              <Link
                href="/auth/signin"
                className="
                  px-4 py-2 rounded
                  border border-white/20
                  text-white
                  hover:bg-white/10
                  transition
                "
              >
                Login
              </Link>

              {/* Sign Up */}
              <Link
                href="/auth/register"
                className="
                  px-4 py-2 rounded
                  bg-blue-600
                  text-white
                  hover:bg-blue-700
                  transition
                "
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
