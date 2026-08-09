import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <header className="w-full bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-lg">
              D
            </div>

            <div>
              <h1 className="text-2xl font-bold text-blue-900">
                DEMIR TORNA
              </h1>

              <p className="text-xs text-gray-500 tracking-widest">
                CNC MACHINING
              </p>
            </div>

          </div>

          <Link
            href="/login"
            className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-2xl transition font-semibold"
          >
            Admin Login
          </Link>

        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid md:grid-cols-2 gap-20 items-center">

          <div>

            <p className="text-blue-700 font-bold tracking-widest uppercase">
              Industrial Solutions
            </p>

            <h2 className="text-6xl font-extrabold text-slate-900 leading-tight mt-4">
              Precision CNC Manufacturing
            </h2>

            <p className="text-gray-600 mt-8 text-lg leading-8">
              DEMIR TORNA provides high-quality industrial machining,
              precision turning and manufacturing solutions using modern
              CNC technology.
            </p>

            <div className="flex gap-5 mt-10">

              <Link
                href="/dashboard/gallery"
                className="bg-blue-900 text-white px-7 py-4 rounded-xl hover:bg-blue-800 transition"
              >
                View Products
              </Link>

              <Link
                href="/login"
                className="border border-blue-900 text-blue-900 px-7 py-4 rounded-xl hover:bg-blue-900 hover:text-white transition"
              >
                Admin Login
              </Link>

            </div>

          </div>

          {/* Company Image */}
          <div className="flex justify-center">

            <div className="w-full h-[500px] rounded-3xl bg-blue-100 flex items-center justify-center text-5xl text-blue-900 font-bold shadow-lg">
              Company Image
            </div>

          </div>

        </div>

      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="text-center mb-14">

          <p className="text-blue-700 font-bold tracking-widest uppercase">
            Our Services
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            What We Manufacture
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <div className="text-5xl mb-5">⚙️</div>

            <h3 className="text-xl font-bold text-blue-900">
              CNC Turning
            </h3>

            <p className="text-gray-600 mt-3">
              High precision turning services for industrial parts.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <div className="text-5xl mb-5">🏭</div>

            <h3 className="text-xl font-bold text-blue-900">
              Industrial Manufacturing
            </h3>

            <p className="text-gray-600 mt-3">
              Modern production using advanced CNC machines.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <div className="text-5xl mb-5">🔩</div>

            <h3 className="text-xl font-bold text-blue-900">
              Metal Components
            </h3>

            <p className="text-gray-600 mt-3">
              Custom metal parts with exceptional quality.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <div className="text-5xl mb-5">🛠️</div>

            <h3 className="text-xl font-bold text-blue-900">
              Custom Solutions
            </h3>

            <p className="text-gray-600 mt-3">
              Manufacturing according to customer requirements.
            </p>
          </div>

        </div>

      </section>

      {/* Featured Products */}
      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-8">

          {/* Section Header */}
          <div className="flex items-end justify-between mb-14">

            <div>

              <p className="text-blue-700 font-bold tracking-widest uppercase">
                Our Products
              </p>

              <h2 className="text-4xl font-bold text-slate-900 mt-3">
                Featured Products
              </h2>

              <p className="text-gray-500 mt-3 max-w-xl">
                Discover some of our precision-manufactured industrial
                components and CNC solutions.
              </p>

            </div>

            <Link
              href="/dashboard/gallery"
              className="hidden md:block text-blue-900 font-semibold hover:underline"
            >
              View All Products →
            </Link>

          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Product 1 */}
            <div className="group bg-slate-50 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">

              <div className="h-72 bg-slate-200 flex items-center justify-center group-hover:bg-blue-50 transition">

                <div className="text-center">
                  <div className="text-5xl mb-3">
                    ⚙️
                  </div>

                  <span className="text-slate-400">
                    Product Image
                  </span>
                </div>

              </div>

              <div className="p-7">

                <p className="text-blue-700 text-sm font-semibold uppercase tracking-wide">
                  CNC Component
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-2">
                  Precision Part
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  High precision industrial component manufactured
                  according to customer specifications.
                </p>

                <button className="mt-5 text-blue-900 font-semibold hover:underline">
                  View Details →
                </button>

              </div>

            </div>

            {/* Product 2 */}
            <div className="group bg-slate-50 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">

              <div className="h-72 bg-slate-200 flex items-center justify-center group-hover:bg-blue-50 transition">

                <div className="text-center">
                  <div className="text-5xl mb-3">
                    🔩
                  </div>

                  <span className="text-slate-400">
                    Product Image
                  </span>
                </div>

              </div>

              <div className="p-7">

                <p className="text-blue-700 text-sm font-semibold uppercase tracking-wide">
                  Metal Component
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-2">
                  Industrial Part
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  Durable and precisely manufactured metal components
                  for industrial applications.
                </p>

                <button className="mt-5 text-blue-900 font-semibold hover:underline">
                  View Details →
                </button>

              </div>

            </div>

            {/* Product 3 */}
            <div className="group bg-slate-50 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">

              <div className="h-72 bg-slate-200 flex items-center justify-center group-hover:bg-blue-50 transition">

                <div className="text-center">
                  <div className="text-5xl mb-3">
                    🛠️
                  </div>

                  <span className="text-slate-400">
                    Product Image
                  </span>
                </div>

              </div>

              <div className="p-7">

                <p className="text-blue-700 text-sm font-semibold uppercase tracking-wide">
                  Custom Manufacturing
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-2">
                  Custom Component
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  Custom-made industrial parts produced according
                  to specific requirements.
                </p>

                <button className="mt-5 text-blue-900 font-semibold hover:underline">
                  View Details →
                </button>

              </div>

            </div>

          </div>

          {/* Mobile View All */}
          <div className="mt-10 text-center md:hidden">

            <Link
              href="/dashboard/gallery"
              className="text-blue-900 font-semibold hover:underline"
            >
              View All Products →
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}