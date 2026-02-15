"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/auth/forget-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setSent(true);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-[#121826] p-6 rounded-xl w-96 space-y-4"
      >
        <h1 className="text-2xl font-bold text-white">
          Forgot Password
        </h1>

        {sent ? (
          <p className="text-green-400">
            If your email exists, reset link sent.
          </p>
        ) : (
          <>
            <input
              className="w-full p-2 rounded bg-black border border-gray-700 text-white"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="w-full bg-green-500 py-2 rounded text-black font-semibold">
              Send Reset Link
            </button>
          </>
        )}
      </form>
    </div>
  );
}
