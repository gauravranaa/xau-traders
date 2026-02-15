export default function MissionPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Our Mission & Vision
        </h1>

        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            Our Mission
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg">
            To build disciplined, risk-aware, and independent traders 
            who focus on long-term consistency instead of short-term hype. 
            We believe trading is a skill that requires structure, patience, 
            and emotional control.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-16"></div>

        {/* Vision Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Our Vision
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg">
            To create a community of structured traders who understand 
            market behavior, risk management, and capital growth principles. 
            Our goal is to shape traders who operate with clarity, discipline, 
            and long-term sustainability.
          </p>
        </div>

      </div>

    </div>
  );
}
