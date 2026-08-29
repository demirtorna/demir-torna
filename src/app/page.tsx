import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function Home() {
  let products: any[] = [];

  try {
    const { data, error } = await supabase
      .from("products")
      .select("id, name, description, image_url")
      .order("id", { ascending: false })
      .limit(3);

    if (!error && data) {
      products = data;
    }
  } catch (error) {
    console.error("Supabase fetch failed:", error);
    products = [];
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* ================= NAVBAR ================= */}
      <header className="w-full bg-white shadow-sm border-b relative z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

          {/* Logo */}
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

          {/* Login */}
          <Link
            href="/login"
            className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-2xl transition font-semibold"
          >
            Admin Login
          </Link>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden min-h-[650px] flex items-center">

        {/* Background Image */}
        <img
          src="/kilitbahir.jpg"
          alt="Kilitbahir"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80 scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/65"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-8 py-24">

          <div className="grid md:grid-cols-2 gap-20 items-center">

            {/* LEFT SIDE */}
            <div>

              <p className="text-blue-700 font-bold tracking-widest uppercase">
                Industrial Solutions
              </p>

              <h2 className="text-6xl font-extrabold text-slate-900 leading-tight mt-4">
                Precision CNC Manufacturing
              </h2>

              <p className="text-gray-700 mt-8 text-lg leading-8 max-w-2xl">
                DEMIR TORNA provides high-quality industrial machining,
                precision turning and manufacturing solutions using modern
                CNC technology.
              </p>

              <div className="flex gap-5 mt-10 flex-wrap">

                <Link
                  href="/dashboard/gallery"
                  className="bg-blue-900 text-white px-7 py-4 rounded-xl hover:bg-blue-800 transition shadow-lg"
                >
                  View Products
                </Link>

                <Link
                  href="/login"
                  className="border border-blue-900 text-blue-900 px-7 py-4 rounded-xl hover:bg-blue-900 hover:text-white transition bg-white/70"
                >
                  Admin Login
                </Link>

              </div>

            </div>


            {/* RIGHT SIDE */}
            <div className="flex justify-center">

              <div className="w-full max-w-xl bg-white/65 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/70">

                <p className="text-blue-700 font-bold tracking-widest uppercase text-sm">
                  DEMIR TORNA
                </p>

                <h3 className="text-4xl font-bold text-slate-900 mt-4">
                  Precision. Quality. Reliability.
                </h3>

                <p className="text-gray-700 mt-5 text-lg leading-8">
                  Advanced CNC machining and industrial manufacturing
                  solutions designed for precision and performance.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-4">

                  <div className="bg-white/80 rounded-2xl p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-blue-900">
                      CNC
                    </div>

                    <p className="text-sm text-gray-500 mt-1">
                      Technology
                    </p>
                  </div>

                  <div className="bg-white/80 rounded-2xl p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-blue-900">
                      100%
                    </div>

                    <p className="text-sm text-gray-500 mt-1">
                      Precision
                    </p>
                  </div>

                  <div className="bg-white/80 rounded-2xl p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-blue-900">
                      Pro
                    </div>

                    <p className="text-sm text-gray-500 mt-1">
                      Solutions
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}
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

          {/* Service 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">

            <div className="text-5xl mb-5">
              ⚙️
            </div>

            <h3 className="text-xl font-bold text-blue-900">
              CNC Turning
            </h3>

            <p className="text-gray-600 mt-3">
              High precision turning services for industrial parts.
            </p>

          </div>


          {/* Service 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">

            <div className="text-5xl mb-5">
              🏭
            </div>

            <h3 className="text-xl font-bold text-blue-900">
              Industrial Manufacturing
            </h3>

            <p className="text-gray-600 mt-3">
              Modern production using advanced CNC machines.
            </p>

          </div>


          {/* Service 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">

            <div className="text-5xl mb-5">
              🔩
            </div>

            <h3 className="text-xl font-bold text-blue-900">
              Metal Components
            </h3>

            <p className="text-gray-600 mt-3">
              Custom metal parts with exceptional quality.
            </p>

          </div>


          {/* Service 4 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">

            <div className="text-5xl mb-5">
              🛠️
            </div>

            <h3 className="text-xl font-bold text-blue-900">
              Custom Solutions
            </h3>

            <p className="text-gray-600 mt-3">
              Manufacturing according to customer requirements.
            </p>

          </div>

        </div>

      </section>


      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-8">

          {/* Header */}
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


          {/* Products */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {products.length > 0 ? (

              products.map((product) => (

                <Link
                  href={`/products/${product.id}`}
                  key={product.id}
                  className="group bg-slate-50 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
                >

                  {/* Image */}
                  <div className="h-72 bg-slate-200 overflow-hidden">

                    {product.image_url ? (

                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />

                    ) : (

                      <div className="w-full h-full flex items-center justify-center">

                        <div className="text-center">

                          <div className="text-5xl mb-3">
                            ⚙️
                          </div>

                          <span className="text-slate-400">
                            Product Image
                          </span>

                        </div>

                      </div>

                    )}

                  </div>


                  {/* Product Info */}
                  <div className="p-7">

                    <p className="text-blue-700 text-sm font-semibold uppercase tracking-wide">
                      DEMIR TORNA PRODUCT
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-2">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 mt-3 leading-7">
                      {product.description}
                    </p>

                    <div className="mt-5 text-blue-900 font-semibold">
                      View Details →
                    </div>

                  </div>

                </Link>

              ))

            ) : (

              <>
                {/* Default Product 1 */}
                <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-md">

                  <div className="h-72 bg-slate-200 flex items-center justify-center">

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

                    <p className="text-gray-600 mt-3">
                      High precision industrial component.
                    </p>

                  </div>

                </div>


                {/* Default Product 2 */}
                <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-md">

                  <div className="h-72 bg-slate-200 flex items-center justify-center">

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

                    <p className="text-gray-600 mt-3">
                      Durable industrial metal component.
                    </p>

                  </div>

                </div>


                {/* Default Product 3 */}
                <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-md">

                  <div className="h-72 bg-slate-200 flex items-center justify-center">

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

                    <p className="text-gray-600 mt-3">
                      Custom-made industrial parts.
                    </p>

                  </div>

                </div>

              </>

            )}

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


      {/* ================= FOOTER ================= */}
      <footer className="bg-blue-950 text-white py-12">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid md:grid-cols-3 gap-10">

            <div>

              <h2 className="text-2xl font-bold">
                DEMIR TORNA
              </h2>

              <p className="text-blue-200 mt-3">
                CNC Machining & Industrial Manufacturing
              </p>

            </div>


            <div>

              <h3 className="font-bold text-lg">
                Services
              </h3>

              <p className="text-blue-200 mt-3">
                CNC Turning
              </p>

              <p className="text-blue-200 mt-2">
                Metal Components
              </p>

              <p className="text-blue-200 mt-2">
                Custom Manufacturing
              </p>

            </div>


            <div>

              <h3 className="font-bold text-lg">
                DEMIR TORNA
              </h3>

              <p className="text-blue-200 mt-3">
                Precision manufacturing solutions.
              </p>

            </div>

          </div>


          <div className="border-t border-blue-800 mt-10 pt-6 text-center text-blue-300">
            © {new Date().getFullYear()} DEMIR TORNA. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}
