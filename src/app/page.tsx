import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-6 shadow-sm">

        <h1 className="text-3xl font-bold text-blue-900">
          DEMIR TORNA
        </h1>

        <Link
          href="/login"
          className="bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition"
        >
          Admin Login
        </Link>

      </nav>

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-12 py-24 grid md:grid-cols-2 items-center gap-16">

        <div>

          <p className="text-blue-700 font-semibold uppercase tracking-widest">
            Industrial Solutions
          </p>

          <h2 className="text-6xl font-bold text-slate-900 leading-tight mt-4">
            Precision CNC <br />
            Manufacturing
          </h2>

          <p className="text-gray-600 mt-8 text-lg leading-8">
            DEMIR TORNA provides high-quality industrial machining,
            precision turning and manufacturing solutions using
            modern CNC technology.
          </p>

          <div className="flex gap-5 mt-10">

            <Link
              href="/dashboard/gallery"
              className="bg-blue-900 text-white px-8 py-4 rounded-xl hover:bg-blue-800 transition"
            >
              View Products
            </Link>

            <Link
              href="/login"
              className="border border-blue-900 text-blue-900 px-8 py-4 rounded-xl hover:bg-blue-900 hover:text-white transition"
            >
              Admin Login
            </Link>

          </div>

        </div>

        {/* صورة مؤقتة */}

        <div className="h-[500px] rounded-3xl bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center">

          <span className="text-2xl text-slate-500">
            Company Image
          </span>

        </div>

      </section>

    </main>
  );
}