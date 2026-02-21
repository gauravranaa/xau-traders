import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Free Trading Resources
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          Learn trading the right way — structure, psychology & risk management.
          No fake signals. No noise.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.youtube.com/@XAUTRADERS-OFFICIAL"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-lg"
          >
            🎥 Watch Free Videos
          </a>

          <Link
            href="/courses"
            className="border border-gray-700 hover:bg-gray-900 px-6 py-3 rounded text-lg"
          >
            📚 View Paid Courses
          </Link>
        </div>
      </section>

      {/* FREE CONTENT */}
      <section className="max-w-6xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-8">
          Free Learning Material
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

  <Link
    href="/resources/risk-management"
    className="border border-blue-600 rounded-xl p-6 bg-[#0F1F30] hover:border-blue-400 transition block"
  >
    <h4 className="text-xl font-semibold mb-3">
      Risk Management Blueprint
    </h4>
    <p className="text-gray-400">
      Learn how professional traders protect capital and scale safely.
    </p>
  </Link>

  <Link
    href="/resources/trading-plan"
    className="border border-gray-700 rounded-xl p-6 bg-[#0F1F30] hover:border-blue-400 transition block"
  >
    <h4 className="text-xl font-semibold mb-3">
      Build a Professional Trading Plan
    </h4>
    <p className="text-gray-400">
      Create a structured system before risking real money.
    </p>
  </Link>

  <Link
    href="/resources/psychology-discipline"
    className="border border-gray-700 rounded-xl p-6 bg-[#0F1F30] hover:border-blue-400 transition block"
  >
    <h4 className="text-xl font-semibold mb-3">
      Psychology & Discipline Mastery
    </h4>
    <p className="text-gray-400">
      Master emotional control and avoid self-sabotage.
    </p>
  </Link>

</div>
      </section>

      {/* SOCIAL LINKS */}
      <section className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-semibold">
          Join the Community
        </h2>

        <p className="text-gray-400 mt-3">
          Daily insights, trade breakdowns & mindset tips.
        </p>

        <div className="mt-6 flex justify-center gap-6 flex-wrap">
          <a
            href="https://instagram.com/YOUR_HANDLE"
            target="_blank"
            className="text-gray-300 hover:text-white"
          >
            Instagram
          </a>

          <a
            href="https://x.com/YOUR_HANDLE"
            target="_blank"
            className="text-gray-300 hover:text-white"
          >
            X (Twitter)
          </a>

          <a
            href="https://t.me/YOUR_CHANNEL"
            target="_blank"
            className="text-gray-300 hover:text-white"
          >
            Telegram
          </a>

          <a
            href="https://discord.gg/YOUR_INVITE"
            target="_blank"
            className="text-gray-300 hover:text-white"
          >
            Discord
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-5xl mx-auto mt-24 text-center">
        <h2 className="text-3xl font-bold">
          Ready to Trade Professionally?
        </h2>

        <p className="mt-3 text-gray-400">
          Structured courses designed for consistency.
        </p>

        <Link
          href="/courses"
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded text-lg"
        >
          Explore Courses
        </Link>
      </section>
    </div>
  );
}
