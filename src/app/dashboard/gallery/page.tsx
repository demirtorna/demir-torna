import Image from "next/image";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="p-10">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl">
          <p className="text-red-600 font-bold text-lg">
            {error.message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8">

      {/* ================= HEADER ================= */}
      <div className="mb-10">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/60 p-8">

          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900">
            Product Gallery
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            DEMIR TORNA Product Collection
          </p>

        </div>
      </div>

      {/* ================= PRODUCTS ================= */}
      {products && products.length === 0 ? (
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-10 text-center">
          <p className="text-gray-600 text-xl">
            No products uploaded yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {products?.map((product) => (

            <div
              key={product.id}
              className="group bg-white/85 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-white/70 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >

              {/* ================= IMAGE ================= */}
              <div className="relative w-full h-64 bg-slate-200 overflow-hidden">

                {product.image_url ? (
                  <Image
                    src={product.image_url}
                    alt={product.name || "Product"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl mb-3">
                        ⚙️
                      </div>

                      <p className="text-gray-400">
                        Product Image
                      </p>
                    </div>
                  </div>
                )}

              </div>

              {/* ================= PRODUCT INFO ================= */}
              <div className="p-6">

                <p className="text-blue-700 text-sm font-bold uppercase tracking-widest">
                  DEMIR TORNA PRODUCT
                </p>

                <h2 className="font-bold text-blue-900 text-2xl mt-2">
                  {product.name || "Industrial Product"}
                </h2>

                <p className="text-gray-600 mt-3 leading-7">
                  {product.description || "Precision industrial component manufactured by DEMIR TORNA."}
                </p>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}