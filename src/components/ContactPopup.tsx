"use client";

import { useState, useEffect } from "react";

export default function ContactPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const alreadyShown = localStorage.getItem("popupShown");
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setOpen(true);
      localStorage.setItem("popupShown", "true");
    }, 5000);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setOpen(true);
        localStorage.setItem("popupShown", "true");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 🚀 SUBMIT HANDLER (IMPORTANT)
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          type: "general",
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Application submitted successfully 🚀");
        setOpen(false);

        // reset fields
        setName("");
        setEmail("");
        setPhone("");
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }

    setLoading(false);
  }

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed bottom-6 right-6 
          bg-green-600 text-white 
          px-5 py-3 rounded-full 
          font-semibold shadow-md 
          hover:bg-green-700 hover:scale-105 
          transition z-50
        "
      >
        🚀 Get Mentorship
      </button>

      {/* POPUP */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">

          <div className="
            bg-white 
            border border-gray-200 
            rounded-2xl 
            p-8 
            w-full max-w-md 
            relative 
            shadow-xl
          ">

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-2 text-black">
              Start Your Trading Journey
            </h2>

            <p className="text-gray-600 mb-4 text-sm">
              Get direct guidance from professional traders.
            </p>

            <p className="text-red-500 text-xs mb-4 font-medium">
              ⚠ Limited seats available this month
            </p>

            {/* ✅ FORM CONNECTED */}
            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:border-green-600 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:border-green-600 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:border-green-600 outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                {loading ? "Submitting..." : "Apply Now"}
              </button>

            </form>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              className="block text-center mt-4 text-green-600 text-sm hover:underline"
            >
              Or Chat on WhatsApp
            </a>

            <p className="text-xs text-gray-500 mt-4 text-center">
              We respect your privacy. No spam.
            </p>

          </div>
        </div>
      )}
    </>
  );
}