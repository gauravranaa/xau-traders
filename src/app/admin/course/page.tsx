"use client";

import { useState } from "react";

export default function AdminCoursePage() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const payload = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      price: formData.get("price") as string,
      thumbnail: formData.get("thumbnail") as string,
    };

    try {
      const res = await fetch("/api/admin/course", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("✅ Course created");
        e.currentTarget.reset();
      } else {
        alert("❌ Failed to create course");
      }
    } catch (error) {
      alert("❌ Something went wrong");
    }

    setLoading(false);
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
