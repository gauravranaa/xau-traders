"use client";

import { useState } from "react";

export default function AdminCoursePage() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const payload = {
      title: form.title.value,
      description: form.description.value,
      price: form.price.value,
      thumbnail: form.thumbnail.value,
    };

    const res = await fetch("/api/admin/course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
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
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Create Course</h1>

      <form
        onSubmit={onSubmit}
        className="max-w-xl space-y-4 bg-[#121826] p-6 rounded-xl border border-gray-800"
      >
        <input
          name="title"
          placeholder="Course Title"
          required
          className="w-full p-3 bg-black border border-gray-700 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          required
          className="w-full p-3 bg-black border border-gray-700 rounded"
        />

        <input
          name="price"
          placeholder="Price"
          required
          className="w-full p-3 bg-black border border-gray-700 rounded"
        />

        <input
          name="thumbnail"
          placeholder="Thumbnail URL"
          className="w-full p-3 bg-black border border-gray-700 rounded"
        />

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
