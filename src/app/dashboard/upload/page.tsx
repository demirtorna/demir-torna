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


    // رفع الصورة
    const { error: uploadError } = await supabase.storage
      .from("product-images")
      .upload(fileName, file);


    if (uploadError) {
      setMessage(uploadError.message);
      return;
    }


    // جلب رابط الصورة
    const imageUrl = supabase.storage
      .from("product-images")
      .getPublicUrl(fileName)
      .data.publicUrl;



    // حفظ بيانات المنتج
    const { error: dbError } = await supabase
      .from("products")
      .insert({
        image_url: imageUrl,
        name: name,
        description: description
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
    <div className="p-10">

      <h1 className="text-4xl font-bold text-blue-900">
        Upload Product
      </h1>


      <div className="bg-white mt-8 p-8 rounded-2xl shadow-md">


        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="border p-3 rounded-lg w-full mb-4"
        />


        <textarea
          placeholder="Product description"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          className="border p-3 rounded-lg w-full mb-4"
        />


        <input
          type="file"
          accept="image/*"
          onChange={(e)=>
            setFile(e.target.files?.[0] || null)
          }
          className="border p-3 rounded-lg w-full"
        />



        <button
          onClick={uploadImage}
          className="mt-6 bg-blue-900 text-white px-6 py-3 rounded-xl"
        >
          Upload Product
        </button>



        {message && (
          <p className="mt-4 text-blue-900 font-semibold">
            {message}
          </p>
        )}


      </div>

    </div>
  );
}