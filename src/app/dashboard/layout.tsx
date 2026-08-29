import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ================= BACKGROUND IMAGE ================= */}
      <img
        src="/kilitbahir.jpg"
        alt="Kilitbahir"
        className="fixed inset-0 w-full h-full object-cover opacity-90"
        style={{ objectPosition: "center center" }}
      />

      {/* ================= LIGHT OVERLAY ================= */}
      <div className="fixed inset-0 bg-white/35" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 min-h-screen">

        {/* ================= HEADER ================= */}
        <header className="bg-white/85 backdrop-blur-md shadow-md border-b border-white/60">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

            {/* LOGO */}
            <h1 className="text-3xl font-bold text-blue-900">
              DEMIR TORNA
            </h1>

            {/* NAVIGATION */}
            <nav className="flex items-center gap-8">

              <Link
                href="/dashboard"
                className="text-blue-900 font-semibold hover:text-blue-700 transition"
              >
                Dashboard
              </Link>

              <Link
                href="/dashboard/upload"
                className="text-blue-900 font-semibold hover:text-blue-700 transition"
              >
                Upload
              </Link>

              <Link
                href="/dashboard/gallery"
                className="text-blue-900 font-semibold hover:text-blue-700 transition"
              >
                Gallery
              </Link>

              <button className="bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition">
                Logout
              </button>

            </nav>

          </div>
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main className="max-w-7xl mx-auto p-8">
          {children}
        </main>

      </div>
    </div>
  );
}