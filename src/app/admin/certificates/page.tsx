"use client";

import { useState } from "react";

export default function AdminCertificatePage() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [issuedBy, setIssuedBy] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/admin/certificates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, imageUrl, issuedBy }),
    });

    setLoading(false);

    if (res.ok) {
      alert("Certificate uploaded successfully");
      setTitle("");
      setImageUrl("");
      setIssuedBy("");
    } else {
      alert("Failed to upload certificate");
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-8">
        Upload Certificate
      </h1>

      <form
        onSubmit={onSubmit}
        className="max-w-xl space-y-4 bg-[#121826] p-6 rounded-xl border border-gray-800"
      >
        <input
          className="w-full p-3 rounded bg-black border border-gray-700"
          placeholder="Certificate Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          className="w-full p-3 rounded bg-black border border-gray-700"
          placeholder="Certificate Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />

        <input
          className="w-full p-3 rounded bg-black border border-gray-700"
          placeholder="Issued By (Funded Firm)"
          value={issuedBy}
          onChange={(e) => setIssuedBy(e.target.value)}
          required
        />

        <button
          disabled={loading}
          className="w-full bg-green-600 py-3 rounded font-semibold hover:bg-green-700"
        >
          {loading ? "Uploading..." : "Upload Certificate"}
        </button>
      </form>
    </div>
  );
}
