"use client";

import { useState } from "react";

type Course = {
  id: string;
  title: string;
};

type Props = {
  courses: Course[];
};

export default function AdminVideoForm({ courses }: Props) {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const payload = {
      title: (form.elements.namedItem("title") as HTMLInputElement).value,
      videoUrl: (form.elements.namedItem("videoUrl") as HTMLInputElement).value,
      courseId: (form.elements.namedItem("courseId") as HTMLSelectElement).value,
    };

    try {
      const res = await fetch("/api/admin/video", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("✅ Video uploaded successfully");
        form.reset();
      } else {
        alert("❌ Failed to upload video");
      }
    } catch (error) {
      alert("❌ Something went wrong");
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-xl space-y-4 bg-[#121826] p-6 rounded-xl border border-gray-800 text-white"
    >
      {/* Video Title */}
      <input
        name="title"
        placeholder="Video Title"
        required
        className="w-full p-3 bg-black border border-gray-700 rounded"
      />

      {/* Video URL */}
      <input
        name="videoUrl"
        placeholder="Video URL"
        required
        className="w-full p-3 bg-black border border-gray-700 rounded"
      />

      {/* Select Course */}
      <select
        name="courseId"
        required
        className="w-full p-3 bg-black border border-gray-700 rounded"
      >
        <option value="">Select Course</option>
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.title}
          </option>
        ))}
      </select>

      {/* Submit */}
      <button
        disabled={loading}
        className="w-full bg-blue-600 py-3 rounded hover:bg-blue-700"
      >
        {loading ? "Uploading..." : "Upload Video"}
      </button>
    </form>
  );
}
