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
    <div className="min-h-screen bg-black text-white px-10 py-20">
      <h1 className="text-4xl font-bold mb-16 text-center">
        Proof of Work & Certifications
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {certificates.length === 0 ? (
          <p className="text-gray-400 text-center col-span-3">
            No certificates available yet.
          </p>
        ) : (
          certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#121826] border border-gray-800 rounded-2xl overflow-hidden 
                         hover:border-blue-600 transition duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h2 className="text-lg font-semibold text-white">
                  {cert.title}
                </h2>

                <p className="text-sm text-gray-400 mt-2">
                  Issued by {cert.issuedBy}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}