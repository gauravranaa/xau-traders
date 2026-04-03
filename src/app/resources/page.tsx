import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Free Trading Resources
        </h1>

        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
          Learn trading the right way — structure, psychology & risk management.
          No fake signals. No noise.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.youtube.com/@XAUTRADERS-OFFICIAL"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg transition transform hover:scale-105"
          >
            🎥 Watch Free Videos
          </a>

          <Link
            href="/courses"
            className="border border-gray-700 hover:bg-gray-900 px-6 py-3 rounded-lg text-lg transition transform hover:scale-105"
          >
            📚 View Paid Courses
          </Link>
        </div>
      </section>

      {/* FREE CONTENT */}
      <section className="max-w-6xl mx-auto mt-24">
        <h2 className="text-2xl font-semibold mb-10">
          Free Learning Material
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Risk Management */}
          <Link
            href="/resources/risk-management"
            className="group border border-blue-600 rounded-xl p-6 bg-[#0F1F30] hover:border-blue-400 transition block hover:scale-[1.03]"
          >
            <h4 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
              Risk Management Blueprint
            </h4>
            <p className="text-gray-400">
              Learn how professional traders protect capital and scale safely.
            </p>
          </Link>

          {/* Trading Plan */}
          <Link
            href="/resources/trading-plan"
            className="group border border-gray-700 rounded-xl p-6 bg-[#0F1F30] hover:border-blue-400 transition block hover:scale-[1.03]"
          >
            <h4 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
              Build a Professional Trading Plan
            </h4>
            <p className="text-gray-400">
              Create a structured system before risking real money.
            </p>
          </Link>

          {/* Psychology */}
          <Link
            href="/resources/psychology-discipline"
            className="group border border-gray-700 rounded-xl p-6 bg-[#0F1F30] hover:border-blue-400 transition block hover:scale-[1.03]"
          >
            <h4 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
              Psychology & Discipline Mastery
            </h4>
            <p className="text-gray-400">
              Master emotional control and eliminate trading mistakes.
            </p>
          </Link>

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
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg transition transform hover:scale-105"
        >
          Explore Courses
        </Link>
      </section>

    </div>
  );
}