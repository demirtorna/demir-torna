import Image from "next/image";
import { supabase } from "@/lib/supabase";

export default async function GalleryPage() {

  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });


  if (error) {
    return (
      <div className="text-red-600">
        {error.message}
      </div>
    );
  }


  return (
    <div>

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-blue-900">
          Product Gallery
        </h1>

        <p className="text-gray-500 mt-2">
          DEMIR TORNA Product Collection
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {products?.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >

            <Image
              src={product.image_url}
              alt={product.name || "product"}
              width={600}
              height={400}
              className="w-full h-56 object-cover"
            />


            <div className="p-5">

              <h2 className="font-bold text-blue-900">
                {product.name}
              </h2>


              <p className="text-gray-500 mt-2">
                {product.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}