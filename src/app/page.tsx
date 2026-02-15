import Link from "next/link";

async function getCourses() {
  const res = await fetch("http://localhost:3000/api/courses", {
    cache: "no-store",
  });

  if (!res.ok) return [];
  return res.json();
}

export default async function HomePage() {
  const courses = await getCourses();

  return (
    <main className="min-h-screen bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="px-6 py-32 text-center">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Master Trading With
          <span className="text-blue-500"> Structure & Discipline</span>
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          Learn real trading concepts, psychology, and risk management
          with structured courses — no fake signals, no noise.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/resources"
            className="px-8 py-4 bg-blue-600 text-white rounded text-lg hover:bg-blue-700 transition font-semibold"
          >
            Start Learning Free
          </Link>

          <Link
            href="/dashboard"
            className="px-8 py-4 border border-gray-700 rounded text-lg hover:bg-gray-900 transition"
          >
            Go to Dashboard
          </Link>
        </div>

        {/* STATS */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <p className="text-3xl font-bold">5+</p>
            <p className="text-gray-400">Professional Courses</p>
          </div>
          <div>
            <p className="text-3xl font-bold">50+</p>
            <p className="text-gray-400">Students Trained</p>
          </div>
          <div>
            <p className="text-3xl font-bold">90%</p>
            <p className="text-gray-400">Consistency Rate</p>
          </div>
        </div>
      </section>

      {/* ================= COURSES ================= */}
    {/* ================= COURSES ================= */}
<section id="courses" className="px-10 py-24">
  <h3 className="text-3xl font-bold mb-10">Featured Programs</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* ================= OFFLINE BATCH ================= */}
    <Link
      href="/courses/offline-batch"
      className="group border border-gray-800 rounded-xl overflow-hidden hover:border-yellow-500 transition"
    >
      <img
        src="/images/offline.PNG"
        alt="Offline Batch"
        className="h-64 w-full object-cover group-hover:scale-105 transition duration-300"
      />

      <div className="p-6 bg-black">
        <h4 className="text-2xl font-bold text-white">
          Offline Batch
        </h4>

        <p className="text-gray-400 mt-3">
          In-person advanced trading mentorship in
          Pithoragarh, Uttarakhand.
          Learn price action, risk management &
          live market execution.
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-yellow-500 font-bold text-lg">
            Limited Seats
          </span>

          <span className="bg-yellow-500 text-black px-4 py-2 rounded font-semibold">
            Enquire Now
          </span>
        </div>
      </div>
    </Link>


    {/* ================= ONLINE BATCH ================= */}
    <Link
      href="/courses/online-batch"
      className="group border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 transition"
    >
      <img
        src="/images/online.PNG"
        alt="Online Batch"
        className="h-64 w-full object-cover group-hover:scale-105 transition duration-300"
      />

      <div className="p-6 bg-black">
        <h4 className="text-2xl font-bold text-white">
          Online Program
        </h4>

        <p className="text-gray-400 mt-3">
          Complete structured trading course with
          recorded lessons, live sessions,
          psychology training & lifetime access.
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-blue-500 font-bold text-lg">
            Limited seats
          </span>

          <span className="bg-blue-600 px-4 py-2 rounded font-semibold">
            View Details
          </span>
        </div>
      </div>
    </Link>

  </div>
</section>

      <section className="px-10 py-24">
  <h2 className="text-3xl font-bold mb-10 text-white">
    Why Choose XAU Traders?
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-[#121826] p-6 rounded-xl border border-gray-800">
      <h3 className="font-semibold mb-2">Structured Learning</h3>
      <p className="text-gray-400 text-sm">
        Step-by-step professional trading education.
      </p>
    </div>

    <div className="bg-[#121826] p-6 rounded-xl border border-gray-800">
      <h3 className="font-semibold mb-2">1 Year Mentorship</h3>
      <p className="text-gray-400 text-sm">
        Continuous guidance beyond course completion.
      </p>
    </div>

    <div className="bg-[#121826] p-6 rounded-xl border border-gray-800">
      <h3 className="font-semibold mb-2">Risk-First Approach</h3>
      <p className="text-gray-400 text-sm">
        Capital protection before profit chasing.
      </p>
    </div>

  </div>
</section>


      {/* ================= VLOGS ================= */}
    <section id="vlogs" className="px-10 py-24">
  <h3 className="text-3xl font-bold mb-10">
    Market blogs & Insights
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <Link
      href="/insights/market-psychology"
      className="border border-gray-800 rounded p-6 hover:border-blue-600 transition"
    >
      <h4 className="font-semibold text-lg">
        Market Psychology
      </h4>
      <p className="text-gray-400 text-sm mt-2">
        Master trading mindset & emotional discipline.
      </p>
    </Link>

    <Link
      href="/insights/risk-management"
      className="border border-gray-800 rounded p-6 hover:border-blue-600 transition"
    >
      <h4 className="font-semibold text-lg">
        Risk Management
      </h4>
      <p className="text-gray-400 text-sm mt-2">
        Learn position sizing & capital protection.
      </p>
    </Link>

    

  </div>
</section>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        <p>© {new Date().getFullYear()} TradingEdu</p>

        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">YouTube</a>
          <a href="#" className="hover:text-white">Telegram</a>
        </div>
      </footer>
    </main>
  );
}
