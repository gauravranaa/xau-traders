import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-20">

      {/* HERO */}
      <section className="max-w-2xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold">
          Free Resources
        </h1>

        <p className="mt-4 text-gray-600">
          Learn structure, risk, and psychology — without noise.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">

          <a
            href="https://www.youtube.com/@XAUTRADERS-OFFICIAL"
            target="_blank"
            className="text-green-600 font-medium hover:underline"
          >
            Watch Videos →
          </a>

          <Link
            href="/courses"
            className="text-gray-700 hover:underline"
          >
            View Courses →
          </Link>

        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-3xl mx-auto space-y-6">

        <Link
          href="/resources/risk-management"
          className="
            block p-6 
            border border-gray-200 
            rounded-xl 
            hover:border-green-500 
            transition
          "
        >
          <h3 className="font-semibold">
            Risk Management Blueprint
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Protect capital and trade with consistency.
          </p>
        </Link>

        <Link
          href="/resources/trading-plan"
          className="
            block p-6 
            border border-gray-200 
            rounded-xl 
            hover:border-green-500 
            transition
          "
        >
          <h3 className="font-semibold">
            Professional Trading Plan
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Build a system before risking money.
          </p>
        </Link>

        <Link
          href="/resources/psychology-discipline"
          className="
            block p-6 
            border border-gray-200 
            rounded-xl 
            hover:border-green-500 
            transition
          "
        >
          <h3 className="font-semibold">
            Psychology & Discipline
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Control emotions and trade like a system.
          </p>
        </Link>

      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto text-center mt-20">
        <p className="text-gray-600 mb-4">
          Ready to go deeper?
        </p>

        <Link
          href="/courses"
          className="text-green-600 font-semibold hover:underline"
        >
          Explore Courses →
        </Link>
      </section>

    </div>
  );
}