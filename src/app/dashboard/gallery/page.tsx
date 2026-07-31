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
      <div className="p-10 text-red-600 font-bold">
        {error.message}
      </div>
    );
  }

  return (
    <div className="p-10">

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-blue-900">
          Product Gallery
        </h1>

        <p className="text-gray-500 mt-2">
          DEMIR TORNA Product Collection
        </p>
      </div>

      {products && products.length === 0 ? (
        <p className="text-gray-500 text-xl">
          No products uploaded yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {products?.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >

              <Image
                src={product.image_url}
                alt={product.name || "Product"}
                width={600}
                height={400}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">

                <h2 className="font-bold text-blue-900 text-xl">
                  {product.name}
                </h2>

                <p className="text-gray-500 mt-2">
                  {product.description}
                </p>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}