"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordClient() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();

    if (!token) {
      setMessage("Invalid or expired reset link.");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Something went wrong.");
      } else {
        setMessage("Password reset successful! You can now login.");
        setPassword("");
      }
    } catch (error) {
      setMessage("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!token) {
    return (
      <p className="text-center mt-20 text-red-500">
        Invalid reset link
      </p>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleReset}
        className="w-96 bg-[#121826] p-6 rounded-xl space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">
          Reset Password
        </h1>

        <input
          type="password"
          required
          placeholder="New password"
          className="w-full p-3 rounded bg-black border border-gray-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          disabled={loading}
          className="w-full bg-blue-600 py-3 rounded disabled:opacity-50"
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>

        {message && (
          <p className="text-sm text-center mt-2 text-yellow-400">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
