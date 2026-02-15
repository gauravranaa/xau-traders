"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    });

    const data = await res.json();
    alert(data.message);
  }

  if (!token) {
    return <p className="text-center mt-20">Invalid reset link</p>;
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

        <button className="w-full bg-blue-600 py-3 rounded">
          Reset Password
        </button>
      </form>
    </div>
  );
}
