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
    <div className="min-h-screen flex items-center justify-center bg-white px-4">

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black">
            Create Account
          </h1>

          <p className="text-gray-600 mt-2 text-sm">
            Start your disciplined trading journey today
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="text-sm text-gray-700">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="John Doe"
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

          <div>
            <label className="text-sm text-gray-700">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
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

          {/* BUTTON */}
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
            Sign Up
          </button>
        </form>

        {/* FOOTER */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/auth/signin"
            className="text-green-600 hover:underline font-medium"
          >
            Login
          </Link>
        </div>

      </div>
    </div>
  );
}