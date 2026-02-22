"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const result = await signIn("credentials", {
  email: (form.email as HTMLInputElement).value,
  password: (form.password as HTMLInputElement).value,
  redirect: false,
});

if (result?.ok) {
  router.replace("/dashboard");
} else {
  alert("Invalid email or password");
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0F14] px-4">
      <div className="w-full max-w-md bg-[#121826] border border-gray-800 rounded-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-heading text-3xl font-bold text-white">
            Welcome Back
          </h1>
          <p className="font-body text-gray-400 mt-2 text-sm">
            Login to continue your trading journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="font-body text-sm text-gray-300">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="mt-2 w-full rounded-xl bg-[#0B0F14] border border-gray-700 px-4 py-3 text-sm text-white outline-none focus:border-green-400 transition"
            />
          </div>

          <div>
            <label className="font-body text-sm text-gray-300">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="mt-2 w-full rounded-xl bg-[#0B0F14] border border-gray-700 px-4 py-3 text-sm text-white outline-none focus:border-green-400 transition"
            />
          </div>
          <Link
  href="/auth/forget-password"
  className="text-sm text-blue-400 hover:underline text-right"
>
  Forgot password?
</Link>

          <button
            type="submit"
            className="w-full font-heading bg-green-500 hover:bg-green-400 text-black py-3 rounded-xl text-sm uppercase tracking-wide transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-400 font-body">
          Don’t have an account?{" "}
          <Link
            href="/auth/register"
            className="text-green-400 hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
