"use client";

import { useState, useEffect } from "react";

export default function ContactPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const alreadyShown = localStorage.getItem("popupShown");
    if (alreadyShown) return;

    // ⏳ 5 sec delay
    const timer = setTimeout(() => {
      setOpen(true);
      localStorage.setItem("popupShown", "true");
    }, 5000);

    // 📜 scroll trigger
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

            {/* HEADING */}
            <h2 className="text-2xl font-bold mb-2 text-black">
              Start Your Trading Journey
            </h2>

            <p className="text-gray-600 mb-4 text-sm">
              Get direct guidance from professional traders.
            </p>

            {/* SCARCITY */}
            <p className="text-red-500 text-xs mb-4 font-medium">
              ⚠ Limited seats available this month
            </p>

            {/* FORM */}
            <form className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                required
                className="
                  w-full px-4 py-3 rounded-lg 
                  bg-white border border-gray-300 
                  text-black outline-none 
                  focus:border-green-600 focus:ring-1 focus:ring-green-600
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="
                  w-full px-4 py-3 rounded-lg 
                  bg-white border border-gray-300 
                  text-black outline-none 
                  focus:border-green-600 focus:ring-1 focus:ring-green-600
                "
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="
                  w-full px-4 py-3 rounded-lg 
                  bg-white border border-gray-300 
                  text-black outline-none 
                  focus:border-green-600 focus:ring-1 focus:ring-green-600
                "
              />

              <button
                type="submit"
                className="
                  w-full 
                  bg-green-600 text-white 
                  py-3 rounded-lg 
                  font-semibold 
                  hover:bg-green-700 
                  transition
                "
              >
                Apply Now
              </button>

            </form>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              className="block text-center mt-4 text-green-600 text-sm hover:underline"
            >
              Or Chat on WhatsApp
            </a>

            {/* TRUST */}
            <p className="text-xs text-gray-500 mt-4 text-center">
              We respect your privacy. No spam.
            </p>

          </div>
        </div>
      )}
    </>
  );
}