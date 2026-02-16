"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)?.value;
    const confirmPassword = (form.elements.namedItem("confirmPassword") as HTMLInputElement)?.value;

    if (!name || !email || !password || !confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    if (res.ok) {
      router.push("/auth/signin");
    } else {
      alert("Registration failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0F14] px-4">
      <div className="w-full max-w-md bg-[#121826] border border-gray-800 rounded-2xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Create Account
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Start your disciplined trading journey today
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm text-gray-300">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              required
              className="mt-2 w-full rounded-xl bg-[#0B0F14] border border-gray-700 px-4 py-3 text-sm text-white focus:border-green-400 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-xl bg-[#0B0F14] border border-gray-700 px-4 py-3 text-sm text-white focus:border-green-400 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              className="mt-2 w-full rounded-xl bg-[#0B0F14] border border-gray-700 px-4 py-3 text-sm text-white focus:border-green-400 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              required
              className="mt-2 w-full rounded-xl bg-[#0B0F14] border border-gray-700 px-4 py-3 text-sm text-white focus:border-green-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400 text-black py-3 rounded-xl text-sm uppercase tracking-wide transition"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            href="/auth/signin"
            className="text-green-400 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
