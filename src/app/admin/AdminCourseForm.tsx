"use client";

import { useState } from "react";

export default function AdminCourseForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      title: form.title.value,
      description: form.description.value,
      price: form.price.value,
      thumbnail: form.thumbnail.value,
    };

    const res = await fetch("/api/admin/course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      alert("✅ Course created");
      form.reset();
    } else {
      alert("❌ Failed to create course");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-xl space-y-4 bg-[#121826] p-6 rounded-xl border border-gray-800"
    >
      <input
        name="title"
        placeholder="Course Title"
        required
        className="w-full p-3 rounded bg-black border border-gray-700"
      />

      <textarea
        name="description"
        placeholder="Course Description"
        required
        className="w-full p-3 rounded bg-black border border-gray-700"
      />

      <input
        name="price"
        placeholder="Price (e.g. Free / ₹999)"
        required
        className="w-full p-3 rounded bg-black border border-gray-700"
      />

      <input
        name="thumbnail"
        placeholder="Thumbnail URL"
        className="w-full p-3 rounded bg-black border border-gray-700"
      />

      <button
        disabled={loading}
        className="w-full bg-blue-600 py-3 rounded hover:bg-blue-700 transition"
      >
        {loading ? "Creating..." : "Create Course"}
      </button>
    </form>
  );
}
