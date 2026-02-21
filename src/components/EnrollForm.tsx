"use client";

import { useState } from "react";

export default function EnrollForm({ courseType }: { courseType: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const endpoint =
      courseType === "offline"
        ? "/api/enroll-offline"
        : "/api/enroll-online";

    const res = await fetch(endpoint, {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setSuccess(true);
    }

    setLoading(false);
  }

  if (success) {
    return (
      <div className="bg-green-600 text-white p-6 rounded-lg">
        ✅ Enquiry submitted successfully.  
        Admin will contact you soon.
      </div>
    );
  }

  return (
<form
  onSubmit={handleSubmit}
  className="max-w-2xl mx-auto space-y-6"
>
  <input
    name="name"
    placeholder="Full Name"
    required
    className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:border-accent outline-none transition"
  />

  <input
    name="email"
    type="email"
    placeholder="Email Address"
    required
    className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:border-accent outline-none transition"
  />

  <input
    name="phone"
    placeholder="Phone Number"
    required
    className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:border-accent outline-none transition"
  />

  <button
    type="submit"
    className="w-full bg-accent text-black py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition"
  >
    {loading ? "Submitting..." : "Submit Enquiry"}
  </button>
</form>
  );
}