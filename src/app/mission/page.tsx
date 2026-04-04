export default function MissionPage() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-24">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Our Mission & Vision
        </h1>

        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-green-600">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            To build disciplined, risk-aware, and independent traders 
            who focus on long-term consistency instead of short-term hype. 
            We believe trading is a skill that requires structure, patience, 
            and emotional control.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-16"></div>

        {/* Vision Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-green-600">
            Our Vision
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            To create a community of structured traders who understand 
            market behavior, risk management, and capital growth principles. 
            Our goal is to shape traders who operate with clarity, discipline, 
            and long-term sustainability.
          </p>
        </div>

        {/* ===== VALUE BLOCK (NEW - PREMIUM TOUCH) ===== */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-2">📊 Structure First</h3>
            <p className="text-gray-600 text-sm">
              Every decision is based on rules, not emotions.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-2">🛡 Risk Control</h3>
            <p className="text-gray-600 text-sm">
              Capital protection is always the priority.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-2">🧠 Discipline</h3>
            <p className="text-gray-600 text-sm">
              Consistency comes from controlled execution.
            </p>
          </div>

        </div>

        {/* ===== CTA (VERY IMPORTANT) ===== */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Start Your Trading Journey
          </h3>

          <p className="text-gray-600 mb-6">
            Learn structured trading with real mentorship and systems.
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