export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0B0F14] overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10" />

      <div className="relative z-10 max-w-4xl text-center px-6">
        
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight">
          Trade With <span className="text-green-400">Discipline</span>,  
          <br />Not Emotion
        </h1>

        <p className="font-body mt-6 text-lg text-gray-400 leading-relaxed">
          Professional trading education focused on risk management,
          psychology, and long-term consistency.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="font-heading bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-2xl text-sm uppercase tracking-wide transition">
            View Courses
          </button>

          <button className="font-heading border border-gray-700 hover:border-gray-500 text-white px-8 py-4 rounded-2xl text-sm uppercase tracking-wide transition">
            Free Resources
          </button>
        </div>
      </div>
    </section>
  );
}
