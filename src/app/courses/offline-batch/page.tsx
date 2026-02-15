export default function OfflineBatchPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      {/* HEADER */}
      <h1 className="text-4xl font-bold mb-6">
        XAU TRADERS – Offline Professional Trading Program
      </h1>

      <p className="text-gray-400 max-w-3xl mb-16">
        3 Months Intensive Classroom Training + 1 Year Mentorship Support.
        Designed for serious XAU-traders who want structure,
        discipline, and consistent performance.
      </p>

      <div className="grid md:grid-cols-2 gap-14">

        {/* LEFT - DETAILS */}
        <div className="space-y-10">

          {/* MONTH 1 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Month 1 – Market Foundation
            </h2>
            <ul className="text-gray-400 space-y-2">
              <li>• Financial Market Structure</li>
              <li>• Market Behavior & Volatility</li>
              <li>• Liquidity Concepts</li>
              <li>• Advanced Support & Resistance</li>
              <li>• Risk Management Framework</li>
              <li>• Trading Journal Setup</li>
              <li>• News fundamentals (CPI,GDP,NFP,FOMC)</li>
            </ul>
          </div>

          {/* MONTH 2 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Month 2 – Institutional Strategy Development
            </h2>
            <ul className="text-gray-400 space-y-2">
              <li>• Smart Money Concepts (SMC)</li>
              <li>• Fractal Nature</li>
              <li>• BOS & CHOCH</li>
              <li>• Order Blocks & Fair Value Gaps</li>
              <li>• Liquidity Sweeps</li>
              <li>• London & New York Session Strategy</li>
              <li>• Prop Firm Preparation</li>
            </ul>
          </div>

          {/* MONTH 3 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Month 3 – Live Execution Training
            </h2>
            <ul className="text-gray-400 space-y-2">
              <li>• Real-Time Live Market Sessions</li>
              <li>• Daily Trade Planning</li>
              <li>• Risk-to-Reward Optimization</li>
              <li>• Psychological Discipline Training</li>
              <li>• Performance Evaluation</li>
            </ul>
          </div>

          {/* 1 YEAR MENTORSHIP */}
          <div className="bg-[#121826] p-6 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">
              1 Year Mentorship Support
            </h2>
            <ul className="text-gray-400 space-y-2">
              <li>• Weekly Live Market Sessions</li>
              <li>• Trade Review & Feedback</li>
              <li>• Psychology Monitoring</li>
              <li>• Risk Supervision</li>
              <li>• Private Community Access</li>
              <li>• Strategy Refinement</li>
            </ul>
          </div>

          {/* ADDITIONAL BENEFITS */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Additional Benefits
            </h2>
            <ul className="text-gray-400 space-y-2">
              <li>• Professional Study Material</li>
              <li>• Strategy PDF Notes</li>
              <li>• Recorded Backup Sessions</li>
              <li>• Trading Plan Templates</li>
              <li>• Certificate of Completion</li>
              <li>• Offline Classroom Environment</li>
            </ul>
          </div>

          {/* TERMS */}
          <div className="text-sm text-gray-500 space-y-2 border-t border-gray-800 pt-6">
            <h3 className="text-white font-semibold mb-2">Terms & Conditions</h3>
            <p>• Course fees are non-refundable.</p>
            <p>• Educational purpose only. No investment advice.</p>
            <p>• Trading involves financial risk.</p>
            <p>• Mentorship valid for 1 year after course completion.</p>
            <p>• The institute is not responsible for individual trading losses.</p>
          </div>

        </div>

        {/* RIGHT - FORM */}
        <form
          action="/api/lead"
          method="POST"
          className="space-y-4 bg-[#121826] p-6 rounded-xl border border-gray-800 h-fit"
        >
          <input type="hidden" name="course" value="Offline Batch" />

          <h2 className="text-xl font-semibold mb-2">
            Enroll for Offline Batch
          </h2>

          <input
            name="name"
            placeholder="Full Name"
            required
            className="w-full p-3 bg-black border border-gray-700 rounded"
          />

          <input
            name="email"
            placeholder="Email Address"
            required
            className="w-full p-3 bg-black border border-gray-700 rounded"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full p-3 bg-black border border-gray-700 rounded"
          />
          <input
            name="type"
            placeholder="Offline"
            required
            className="w-full p-3 bg-black border border-gray-700 rounded"
          />

          <button className="w-full bg-blue-600 py-3 rounded font-semibold hover:bg-blue-700 transition">
            Enquire Now
          </button>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            className="block text-center bg-green-600 py-3 rounded font-semibold hover:bg-green-700 transition"
          >
            Chat on WhatsApp
          </a>

          <p className="text-xs text-gray-500 mt-2">
            By submitting, you agree to our terms & risk disclaimer.
          </p>
        </form>

      </div>
    </div>
  );
}