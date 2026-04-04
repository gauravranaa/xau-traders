export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";
export const runtime = "nodejs";

import prisma from "@/lib/prisma";

type CertificateType = {
  id: string;
  title: string;
  imageUrl: string;
  issuedBy: string;
  createdAt: Date;
};

export default async function CertificatesPage() {
  let certificates: CertificateType[] = [];

  try {
    certificates = await prisma.certificate.findMany({
      orderBy: { createdAt: "desc" },
      take: 3,
    });
  } catch (error) {
    console.error("Failed to fetch certificates:", error);
  }

  return (
    <div className="min-h-screen bg-white text-black px-6 md:px-10 py-20">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-16 text-center">
        Proof of Work & Certifications
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {certificates.length === 0 ? (
          <p className="text-gray-500 text-center col-span-3">
            No certificates available yet.
          </p>
        ) : (
          certificates.map((cert) => (
            <div
              key={cert.id}
              className="
                bg-white 
                border border-gray-200 
                rounded-2xl 
                overflow-hidden 
                shadow-sm
                hover:shadow-md 
                hover:border-green-500 
                transition duration-300
              "
            >
              {/* IMAGE */}
              <div className="h-64 overflow-hidden">
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="
                    w-full h-full object-cover 
                    hover:scale-105 transition duration-500
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h2 className="text-lg font-semibold text-black">
                  {cert.title}
                </h2>

                <p className="text-sm text-gray-600 mt-2">
                  Issued by {cert.issuedBy}
                </p>
              </div>
            </div>
          ))
        )}

      </div>

      {/* CTA SECTION */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Want Results Like This?
        </h3>

        <p className="text-gray-600 mb-6">
          Learn structured trading with real mentorship and systems.
        </p>

        <a
          href="/courses"
          className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Start Your Journey 🚀
        </a>
      </div>

    </div>
  );
}