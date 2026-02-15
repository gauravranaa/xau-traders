export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">
        Trading Insights
      </h1>

      <div className="space-y-6">

        <a
          href="/insights/market-psychology"
          className="block p-6 bg-[#121826] rounded-xl border border-gray-800 hover:border-blue-500 transition"
        >
          <h2 className="text-2xl font-semibold">
            Market Psychology
          </h2>
          <p className="text-gray-400 mt-2">
            Why traders fail before the market even moves.
          </p>
        </a>

        <a
          href="/insights/risk-management"
          className="block p-6 bg-[#121826] rounded-xl border border-gray-800 hover:border-blue-500 transition"
        >
          <h2 className="text-2xl font-semibold">
            Risk Management
          </h2>
          <p className="text-gray-400 mt-2">
            The real secret behind long-term trading success.
          </p>
        </a>

      </div>
    </main>
  );
}
