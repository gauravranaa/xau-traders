"use client";

import { useState } from "react";

export default function AdminCourseForm() {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("online");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const payload = {
      title: (form.elements.namedItem("title") as HTMLInputElement).value,
      description: (form.elements.namedItem("description") as HTMLTextAreaElement).value,
      price: (form.elements.namedItem("price") as HTMLInputElement).value,
      thumbnail: (form.elements.namedItem("thumbnail") as HTMLInputElement).value,
      type: (form.elements.namedItem("type") as HTMLSelectElement).value,
      whatsapp: (form.elements.namedItem("whatsapp") as HTMLInputElement)?.value,
    };

    const res = await fetch("/api/admin/course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      alert("✅ Course created successfully");
      form.reset();
      setType("online");
    } else {
      alert("❌ Failed to create course");
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Create Course</h1>

      <form
        onSubmit={onSubmit}
        className="max-w-xl space-y-4 bg-[#121826] p-6 rounded-xl border border-gray-800"
      >
        {/* Title */}
        <input
          name="title"
          placeholder="Course Title"
          required
          className="w-full p-3 bg-black border border-gray-700 rounded"
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          required
          className="w-full p-3 bg-black border border-gray-700 rounded"
        />

        {/* Course Type */}
        <select
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-3 bg-black border border-gray-700 rounded"
        >
          <option value="online">Online Course</option>
          <option value="offline">Offline Course</option>
        </select>

        {/* Price (Only for Online) */}
        {type === "online" && (
          <input
            name="price"
            placeholder="Price"
            required
            className="w-full p-3 bg-black border border-gray-700 rounded"
          />
        )}

        {/* WhatsApp (Only for Offline) */}
        {type === "offline" && (
          <input
            name="whatsapp"
            placeholder="WhatsApp Number (e.g. 919876543210)"
            required
            className="w-full p-3 bg-black border border-gray-700 rounded"
          />
        )}

        {/* Thumbnail */}
        <input
          name="thumbnail"
          placeholder="Thumbnail URL"
          className="w-full p-3 bg-black border border-gray-700 rounded"
        />

        {/* Submit */}
        <button
          disabled={loading}
          className="w-full bg-blue-600 py-3 rounded hover:bg-blue-700"
        >
          {loading ? "Creating..." : "Create Course"}
        </button>
      </form>
    </div>
  );
}
