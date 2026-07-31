import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100">

      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

          <h1 className="text-3xl font-bold text-blue-900">
            DEMIR TORNA
          </h1>

          <nav className="flex items-center gap-8">

            <Link
              href="/dashboard"
              className="text-blue-900 font-semibold hover:text-blue-700"
            >
              Dashboard
            </Link>

            <Link
              href="/dashboard/upload"
              className="text-blue-900 font-semibold hover:text-blue-700"
            >
              Upload
            </Link>

            <Link
              href="/dashboard/gallery"
              className="text-blue-900 font-semibold hover:text-blue-700"
            >
              Gallery
            </Link>

            <button className="bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-800">
              Logout
            </button>

          </nav>

        </div>
      </header>

      <main className="max-w-7xl mx-auto p-8">
        {children}
      </main>

    </div>
  );
}