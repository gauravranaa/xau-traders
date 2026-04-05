export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-24">

      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose XAU Traders?
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We focus on building real traders with structure, discipline, and long-term consistency — not shortcuts.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Structured 3-Month Curriculum",
              desc: "Step-by-step professional training focused on XAUUSD, crypto, and forex.",
            },
            {
              title: "1 Year Mentorship Support",
              desc: "Continuous guidance until you achieve consistency.",
            },
            {
              title: "Risk-First Philosophy",
              desc: "Capital protection and disciplined execution come first.",
            },
            {
              title: "Live Market Learning",
              desc: "Practical sessions in real market conditions.",
            },
            {
              title: "Funding Opportunity",
              desc: "Get access to $5,000–$10,000 funded accounts after completion.",
            },
            {
              title: "No Signal Dependency",
              desc: "We build independent traders — not signal followers.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white 
                border border-gray-200 
                rounded-xl 
                p-6 
                shadow-sm 
                hover:shadow-md 
                hover:border-green-500 
                transition
              "
            >
              <h2 className="text-lg font-semibold mb-3">
                {item.title}
              </h2>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* TRUST STRIP (NEW - VERY IMPORTANT) */}
        <div className="mt-20 bg-green-50 border border-green-200 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-3">
            Built for Serious Traders Only
          </h3>

          <p className="text-gray-600">
            If you're looking for quick profits or signals, this is not for you.  
            We train traders who want long-term consistency.
          </p>
        </div>

        {/* CTA SECTION (CRITICAL) */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to Trade Like a Professional?
          </h3>

          <p className="text-gray-600 mb-6">
            Start with free learning or enroll in structured mentorship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="/resources"
              className="
                px-8 py-4 
                border border-green-600 
                text-green-600 
                rounded-lg font-semibold 
                hover:bg-green-50 transition
              "
            >
              Start Learning Free
            </a>

            <a
              href="/courses"
              className="
                px-8 py-4 
                bg-green-600 text-white 
                rounded-lg font-semibold 
                hover:bg-green-700 transition
              "
            >
              Explore Courses
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}