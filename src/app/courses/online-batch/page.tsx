export default function OnlineBatchPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      {/* HERO SECTION */}
      <div className="max-w-5xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          XAU TRADERS – Online Professional Trading Program
        </h1>

        <p className="text-gray-400 text-lg max-w-3xl">
          A structured 3-Month intensive online training program
          focused on institutional concepts, and risk control —
          followed by 1 Year of mentorship to ensure consistency and discipline.
        </p>

        <p className="mt-4 text-green-400 font-semibold">
          Learn from anywhere. Trade with structure. Build long-term consistency.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE CONTENT */}
        <div className="space-y-12">

          {/* WHY ONLINE */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Why Choose Online Program?
            </h2>
            <ul className="text-gray-400 space-y-2">
              <li>• Access from anywhere</li>
              <li>• Daily Live + Recorded Sessions</li>
              <li>• Flexible learning schedule</li>
              <li>• Same depth as offline classroom</li>
              <li>• Lifetime access to recordings</li>
            </ul>
          </div>

          {/* 3 MONTH STRUCTURE */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              3 Month Structured Curriculum
            </h2>

            <div className="space-y-8">

              {/* Month 1 */}
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Month 1 – Market Foundation
                </h3>
                <ul className="text-gray-400 space-y-2">
                  <li>• Market Structure & Trend Logic</li>
                  <li>• Market Behavior & Volatility</li>
                  <li>• Liquidity Concepts</li>
                  <li>• Risk Management System (1–2%)</li>
                  <li>• News Fundamentals (CPI, NFP, FOMC)</li>
                  <li>• Trading Psychology Basics</li>
                </ul>
              </div>

              {/* Month 2 */}
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Month 2 – Institutional Strategy
                </h3>
                <ul className="text-gray-400 space-y-2">
                  <li>• Smart Money Concepts (SMC)</li>
                  <li>• BOS & CHOCH</li>
                  <li>• Order Blocks & Fair Value Gaps</li>
                  <li>• Liquidity Sweeps</li>
                  <li>• London & New York Session Strategy</li>
                </ul>
              </div>

              {/* Month 3 */}
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Month 3 – Live Execution
                </h3>
                <ul className="text-gray-400 space-y-2">
                  <li>• Real-Time Live Trading Sessions</li>
                  <li>• Daily Trade Planning</li>
                  <li>• Risk-to-Reward Optimization</li>
                  <li>• Performance Evaluation</li>
                </ul>
              </div>

            </div>
          </div>

          {/* 1 YEAR MENTORSHIP */}
          <div className="bg-[#121826] p-6 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">
              1 Year Mentorship Support
            </h2>
            <ul className="text-gray-400 space-y-2">
              <li>• Weekly Strategy Sessions</li>
              <li>• Trade Review & Feedback</li>
              <li>• Risk Supervision</li>
              <li>• Psychology Monitoring</li>
              <li>• Private Community Access</li>
              <li>• Continuous Strategy Refinement</li>
            </ul>
          </div>

          {/* WHO IS THIS FOR */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Who Is This Program For?
            </h2>
            <ul className="text-gray-400 space-y-2">
              <li>• Beginners wanting structured learning</li>
              <li>• Traders stuck in inconsistent results</li>
              <li>• Gold (XAUUSD) focused traders</li>
              <li>• Prop firm challenge aspirants</li>
              <li>• Traders seeking discipline & system</li>
            </ul>
          </div>

          {/* TERMS */}
          <div className="text-sm text-gray-500 border-t border-gray-800 pt-6 space-y-2">
            <h3 className="text-white font-semibold mb-2">
              Terms & Risk Disclaimer
            </h3>
            <p>• Course fees are non-refundable.</p>
            <p>• This program is strictly educational.</p>
            <p>• Trading involves financial risk.</p>
            <p>• Profits are not guaranteed.</p>
            <p>• Mentorship is valid for 1 year from completion.</p>
            <p>• We are not responsible for individual trading losses.</p>
          </div>

        </div>

        {/* RIGHT SIDE – FORM */}
        <form
          action="/api/lead"
          method="POST"
          className="space-y-4 bg-[#121826] p-6 rounded-xl border border-gray-800 h-fit"
        >
          <input type="hidden" name="course" value="Online Batch" />

          <h2 className="text-xl font-semibold mb-2">
            Apply for Online Batch
          </h2>

          <input
            name="name"
            placeholder="Full Name"
            required
            className="w-full p-3 bg-black border border-gray-700 rounded"
          />
            
          <input
            name="phone"
            placeholder="Phone / WhatsApp Number"
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
            name="type"
            placeholder="Online"
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
            Limited seats available. Admissions reviewed manually.
          </p>
        </form>

      </div>
    </div>
  );
}