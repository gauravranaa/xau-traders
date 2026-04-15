import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F14] border-t border-gray-800 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">XAU TRADERS</h3>
          <p className="text-gray-400 text-sm">
            Learn trading the right way — structure, psychology & risk
            management. No fake signals. No noise.
          </p>
        </div>

        {/* Learning */}
        <div>
          <h4 className="text-white font-semibold mb-4">Learning</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link href="/resources" className="hover:text-white">Free Resources</Link></li>
            <li><Link href="/blogs" className="hover:text-white">Blogs</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/why-us" className="hover:text-white">Why Choose Us</Link></li>
            <li><Link href="/mission" className="hover:text-white">Mission</Link></li>
            <li><Link href="/certificates" className="hover:text-white">Proof of Work</Link></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="text-white font-semibold mb-4">Community</h4>
          <div className="flex gap-4 text-gray-400 text-sm">
            <a href="https://www.instagram.com/xautraders_?igsh=MWpvMTI2czBuejE5ZA==" target="_blank" className="hover:text-white">
              Instagram
            </a>
            <a href="https://www.youtube.com/@XAUTRADERS-OFFICIAL" target="_blank" className="hover:text-white">
              YouTube
            </a>
            <a href="https://t.me/+1s6V6UoD3cgwYmVl" target="_blank" className="hover:text-white">
              Telegram
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} XAU TRADERS. All rights reserved.
      </div>
    </footer>
  );
}