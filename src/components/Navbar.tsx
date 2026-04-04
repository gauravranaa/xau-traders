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
        bg-white/80 backdrop-blur-md
        border-b border-gray-200
        shadow-sm
      "
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-5 max-w-7xl mx-auto">
        
        {/* LOGO */}
        <Link
          href="/"
          className="
            text-2xl font-heading font-bold tracking-wide text-black
            hover:text-green-600 transition
          "
        >
          XAU <span className="text-green-600">TRADERS</span>
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          
          {[
            { name: "Proof of Work", link: "/certificates" },
            { name: "Courses", link: "/courses" },
            { name: "Why Choose Us", link: "/why-us" },
            { name: "Mission & Vision", link: "/mission" },
            { name: "Blogs", link: "/blogs" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="
                text-gray-600 hover:text-green-600 transition relative
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-green-600 after:transition-all
                hover:after:w-full
              "
            >
              {item.name}
            </Link>
          ))}

          {session ? (
            <>
              <Link
                href="/dashboard"
                className="
                  px-5 py-2 rounded
                  border border-green-600
                  text-green-600
                  hover:bg-green-50
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
                    border border-red-400
                    text-red-500
                    hover:bg-red-50
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
                  border border-gray-300
                  text-gray-700
                  hover:bg-gray-100
                  transition
                "
              >
                Login
              </Link>

              <Link
                href="/auth/register"
                className="
                  px-5 py-2 rounded
                  bg-green-600
                  text-white
                  hover:bg-green-700
                  transition
                  font-semibold
                "
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>

        {/* MOBILE MENU */}
        <div className="md:hidden text-black text-xl cursor-pointer">
          ☰
        </div>

      </div>
    </header>
  );
}