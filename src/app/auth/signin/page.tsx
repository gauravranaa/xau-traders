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
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black">
            Welcome Back
          </h1>

          <p className="text-gray-600 mt-2 text-sm">
            Login to continue your trading journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="text-sm text-gray-700">
              Email
            </label>

            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="
                mt-2 w-full rounded-xl 
                bg-white border border-gray-300 
                px-4 py-3 text-sm text-black 
                outline-none 
                focus:border-green-600 focus:ring-1 focus:ring-green-600
                transition
              "
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">
              Password
            </label>

            <input
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="
                mt-2 w-full rounded-xl 
                bg-white border border-gray-300 
                px-4 py-3 text-sm text-black 
                outline-none 
                focus:border-green-600 focus:ring-1 focus:ring-green-600
                transition
              "
            />
          </div>

          {/* Forgot Password */}
          <Link
            href="/auth/forget-password"
            className="text-sm text-green-600 hover:underline text-right block"
          >
            Forgot password?
          </Link>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full 
              bg-green-600 hover:bg-green-700 
              text-white py-3 rounded-xl 
              text-sm uppercase tracking-wide 
              font-semibold transition
            "
          >
            Login
          </button>

        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            href="/auth/register"
            className="text-green-600 hover:underline font-medium"
          >
            Sign up
          </Link>
        </div>

      </div>
    </div>
  );
}