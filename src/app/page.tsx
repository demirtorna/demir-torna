import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

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

          {/* Real Products */}
          {error ? (
            <div className="text-center bg-red-50 border border-red-200 rounded-2xl p-6">
              <p className="text-red-600 font-semibold">
                Unable to load products.
              </p>
            </div>
          ) : products && products.length > 0 ? (

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {products.map((product) => (

                <div
                  key={product.id}
                  className="group bg-slate-50 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
                >

                  <div className="relative h-72 bg-slate-200">

                    <Image
                      src={product.image_url}
                      alt={product.name || "DEMIR TORNA product"}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />

                  </div>

                  <div className="p-7">

                    <p className="text-blue-700 text-sm font-semibold uppercase tracking-wide">
                      DEMIR TORNA
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-2">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 mt-3 leading-7">
                      {product.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            <div className="text-center bg-slate-50 rounded-3xl p-16">

              <div className="text-5xl mb-5">
                ⚙️
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Products Coming Soon
              </h3>

              <p className="text-gray-500 mt-3">
                Our latest products will appear here soon.
              </p>

            </div>

          )}

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