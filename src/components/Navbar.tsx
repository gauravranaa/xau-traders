"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import LogoutButton from "./LogoutButton";
import { ADMIN_EMAILS } from "@/lib/admin";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [mounted, setMounted] = useState(false);

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
        bg-primary
        border-b border-accent/30
        shadow-sm
      "
    >
      <div className="flex items-center justify-between px-10 py-5 max-w-7xl mx-auto">
        
        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-heading font-bold tracking-wide text-white"
        >
          XAU<span className="text-accent"> TRADERS</span>
        </Link>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          
          <Link
            href="/certificates"
            className="text-gray-300 hover:text-white transition"
          >
            Proof of Work
          </Link>

          <Link
            href="/courses"
            className="text-gray-300 hover:text-white transition"
          >
            Courses
          </Link>

          <Link
            href="/why-us"
            className="text-gray-300 hover:text-white transition"
          >
            Why Choose Us
          </Link>

          <Link
            href="/mission"
            className="text-gray-300 hover:text-white transition"
          >
            Mission & Vision
          </Link>

          <Link
            href="/blogs"
            className="text-gray-300 hover:text-white transition"
          >
            Blogs
          </Link>

          {session ? (
            <>
              <Link
                href="/dashboard"
                className="
                  px-5 py-2 rounded
                  border border-accent/40
                  text-white
                  hover:bg-accent/10
                  transition
                "
              >
                Dashboard
              </Link>

              {isAdmin && (
                <Link
                  href="/admin"
                  className="
                    px-5 py-2 rounded
                    border border-red-500/40
                    text-red-400
                    hover:bg-red-500/10
                    transition
                  "
                >
                  Admin
                </Link>
              )}

              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                href="/auth/signin"
                className="
                  px-5 py-2 rounded
                  border border-white/20
                  text-white
                  hover:bg-white/5
                  transition
                "
              >
                Login
              </Link>

              <Link
                href="/auth/register"
                className="
                  px-5 py-2 rounded
                  bg-accent
                  text-black
                  hover:opacity-90
                  transition
                  font-semibold
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
