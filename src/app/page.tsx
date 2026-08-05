import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Navbar */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

          <h1 className="text-2xl font-bold text-blue-900 tracking-wide">
            DEMIR TORNA
          </h1>

          <Link
            href="/login"
            className="bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Admin Login
          </Link>

        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <p className="uppercase tracking-widest text-blue-700 font-semibold mb-3">
              Industrial Solutions
            </p>

            <h2 className="text-6xl font-bold text-slate-900 leading-tight">
              Precision CNC Manufacturing
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              DEMIR TORNA provides high-quality industrial machining,
              precision turning, and manufacturing solutions using
              modern CNC technology.
            </p>

            <div className="flex gap-4 mt-10">

              <button className="bg-blue-900 text-white px-7 py-3 rounded-lg hover:bg-blue-800 transition">
                View Products
              </button>

              <button className="border border-blue-900 text-blue-900 px-7 py-3 rounded-lg hover:bg-blue-50 transition">
                Contact Us
              </button>

            </div>

          </div>

          {/* Right */}
          <div className="bg-blue-100 rounded-3xl h-[420px] flex items-center justify-center text-gray-500 text-xl">
            Company Image
          </div>

        </div>

      </section>

    </main>
  );
}