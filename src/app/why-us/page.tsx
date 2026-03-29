export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-4xl font-bold mb-10">
        Why Choose XAU Traders?
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-[#121826] p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-3">
            Structured 3-Month Curriculum
          </h2>
          <p className="text-gray-400">
            Step-by-step professional training focused on gold (XAUUSD), Crypto and forex.
          </p>
        </div>

        <div className="bg-[#121826] p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-3">
            1 Year Mentorship Support
          </h2>
          <p className="text-gray-400">
            Continuous guidance until you develop consistency.
          </p>
        </div>

        <div className="bg-[#121826] p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-3">
            Risk-First Philosophy
          </h2>
          <p className="text-gray-400">
            Capital protection and disciplined execution are our priority.
          </p>
        </div>

        <div className="bg-[#121826] p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-3">
            No Signal Selling
          </h2>
          <p className="text-gray-400">
            We focus on building independent traders — not dependency.
          </p>
        </div>

      </div>
    </div>
  );
}
