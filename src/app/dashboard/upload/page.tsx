"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const uploadImage = async () => {
    if (!file) {
      setMessage("Please select an image");
      return;
    }

    if (!name) {
      setMessage("Please enter product name");
      return;
    }

    const fileName = `${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("product-images")
      .upload(fileName, file);

    if (uploadError) {
      setMessage(uploadError.message);
      return;
    }

    const imageUrl = supabase.storage
      .from("product-images")
      .getPublicUrl(fileName)
      .data.publicUrl;

    const { error: dbError } = await supabase
      .from("products")
      .insert({
        image_url: imageUrl,
        name: name,
        description: description,
      });

    if (dbError) {
      setMessage(dbError.message);
      return;
    }

    setMessage("Product uploaded successfully ✅");

    setFile(null);
    setName("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <h1 className="text-4xl font-bold text-blue-900">
        Upload Product
      </h1>

      <p className="mt-2 text-gray-500">
        Add a new product to the DEMIR TORNA gallery
      </p>

      <div className="bg-white mt-8 p-8 rounded-2xl shadow-md border border-gray-200 max-w-3xl">

        {/* Product Name */}
        <div className="mb-5">
          <label className="block mb-2 text-blue-900 font-semibold">
            Product Name
          </label>

          <input
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-12 rounded-xl border-2 border-gray-300 bg-white text-gray-900 px-4 shadow-sm outline-none placeholder-gray-400 focus:border-blue-800 focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>

        {/* Description */}
        <div className="mb-5">
          <label className="block mb-2 text-blue-900 font-semibold">
            Product Description
          </label>

          <textarea
            placeholder="Enter product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            className="w-full rounded-xl border-2 border-gray-300 bg-white text-gray-900 px-4 py-3 shadow-sm outline-none placeholder-gray-400 focus:border-blue-800 focus:ring-2 focus:ring-blue-200 transition resize-none"
          />
        </div>

        {/* Image */}
        <div className="mb-5">
          <label className="block mb-2 text-blue-900 font-semibold">
            Product Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setFile(e.target.files?.[0] || null);
            }}
            className="w-full rounded-xl border-2 border-gray-300 bg-white text-gray-700 p-3 shadow-sm cursor-pointer focus:border-blue-800 focus:ring-2 focus:ring-blue-200 transition"
          />

          {file && (
            <p className="mt-2 text-sm text-gray-500">
              Selected: {file.name}
            </p>
          )}
        </div>

        {/* Upload Button */}
        <button
          onClick={uploadImage}
          className="mt-3 bg-blue-900 hover:bg-blue-800 text-white px-7 py-3 rounded-xl font-semibold shadow-md transition"
        >
          Upload Product
        </button>

        {/* Message */}
        {message && (
          <div className="mt-5 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-blue-900 font-semibold">
              {message}
            </p>
          </div>
        )}

      </div>

    </div>
  );
}