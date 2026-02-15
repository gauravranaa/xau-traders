import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-12">
        Admin Dashboard
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Create Course */}
        <Link
          href="/admin/course"
          className="bg-[#121826] border border-gray-800 p-8 rounded-2xl 
                     hover:border-blue-600 transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            📘 Create Course
          </h2>
          <p className="text-gray-400 text-sm">
            Add new courses to the platform
          </p>
        </Link>

        {/* Upload Videos */}
        <Link
          href="/admin/videos"
          className="bg-[#121826] border border-gray-800 p-8 rounded-2xl 
                     hover:border-purple-600 transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            🎬 Upload Videos
          </h2>
          <p className="text-gray-400 text-sm">
            Upload videos and attach them to courses
          </p>
        </Link>

        {/* Upload Certificates */}
        <Link
          href="/admin/certificates"
          className="bg-[#121826] border border-gray-800 p-8 rounded-2xl 
                     hover:border-green-600 transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            🏆 Upload Certificates
          </h2>
          <p className="text-gray-400 text-sm">
            Add funded proof & certifications
          </p>
        </Link>

        {/* ✅ NEW: View Leads */}
        <Link
          href="/admin/leads"
          className="bg-[#121826] border border-gray-800 p-8 rounded-2xl 
                     hover:border-yellow-500 transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            📥 View Leads
          </h2>
          <p className="text-gray-400 text-sm">
            See submitted offline & online batch enquiries
          </p>
        </Link>
        <Link
  href="/admin/users"
  className="bg-[#121826] border border-gray-800 p-6 rounded-xl hover:border-blue-500 transition block"
>
  <h3 className="text-xl font-semibold text-white">
    👥 Manage Students
  </h3>
  <p className="text-gray-400 mt-2">
    Approve enrollments & control access
  </p>
</Link>


      </div>
    </div>
  );
}