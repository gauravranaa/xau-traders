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
    <div className="min-h-screen flex items-center justify-center bg-white px-4">

      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-md 
          bg-white 
          border border-gray-200 
          rounded-2xl 
          p-8 
          shadow-sm
        "
      >
        {/* TITLE */}
        <h1 className="text-2xl font-bold text-black text-center mb-4">
          Forgot Password
        </h1>

        <p className="text-gray-600 text-sm text-center mb-6">
          Enter your email to receive a reset link
        </p>

        {sent ? (
          <p className="text-green-600 text-center font-medium">
            If your email exists, reset link has been sent.
          </p>
        ) : (
          <>
            {/* INPUT */}
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full 
                px-4 py-3 
                rounded-xl 
                bg-white 
                border border-gray-300 
                text-black 
                outline-none 
                focus:border-green-600 focus:ring-1 focus:ring-green-600
                transition
              "
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="
                w-full mt-4 
                bg-green-600 hover:bg-green-700 
                text-white 
                py-3 rounded-xl 
                font-semibold 
                transition
              "
            >
              Send Reset Link
            </button>
          </>
        )}
      </form>
    </div>
  );
}