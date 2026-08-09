"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Product = {
  id: string;
  name: string;
  description: string | null;
  image_url: string;
};

export default function ProductDetailsPage() {
  const params = useParams();
  const id = params.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      if (!id) return;

      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        setError("Product not found");
        setLoading(false);
        return;
      }

      setProduct(data);
      setLoading(false);
    };

    getProduct();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-xl font-semibold text-blue-900">
          Loading product...
        </p>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold text-blue-900">
          Product Not Found
        </h1>

        <p className="text-gray-600 mt-4">
          The product you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 bg-blue-900 text-white px-7 py-3 rounded-xl hover:bg-blue-800 transition"
        >
          Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <header className="w-full bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">

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

          </Link>

          <Link
            href="/"
            className="border border-blue-900 text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 hover:text-white transition"
          >
            Home
          </Link>

        </div>
      </header>

      {/* Product Details */}
      <section className="max-w-7xl mx-auto px-8 py-20">

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center text-blue-900 font-semibold hover:underline mb-10"
        >
          ← Back to Products
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="grid md:grid-cols-2">

            {/* Product Image */}
            <div className="bg-slate-100 min-h-[500px] flex items-center justify-center p-8">

              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-[500px] object-contain rounded-2xl"
              />

            </div>

            {/* Product Information */}
            <div className="p-10 md:p-14 flex flex-col justify-center">

              <p className="text-blue-700 font-bold tracking-widest uppercase text-sm">
                DEMIR TORNA PRODUCT
              </p>

              <h1 className="text-5xl font-extrabold text-slate-900 mt-4 leading-tight">
                {product.name}
              </h1>

              <div className="w-20 h-1 bg-blue-900 rounded-full mt-6" />

              <p className="text-gray-600 text-lg leading-8 mt-8">
                {product.description || "No description available for this product."}
              </p>

              <div className="mt-10">

                <p className="text-sm text-gray-400 uppercase tracking-wider">
                  Manufacturing
                </p>

                <p className="text-blue-900 font-semibold text-lg mt-1">
                  Precision CNC Manufacturing
                </p>

              </div>

              <Link
                href="/"
                className="mt-10 inline-block w-fit bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition"
              >
                ← Back to Products
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}