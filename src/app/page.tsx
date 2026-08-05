"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 border border-gray-200">

        <div className="text-center">

          <div className="w-20 h-20 mx-auto rounded-full bg-blue-900 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
            D
          </div>

          <h1 className="text-4xl font-bold text-blue-900 mt-6">
            DEMIR TORNA
          </h1>

          <p className="text-gray-500 mt-2">
            Industrial Photo Management System
          </p>

        </div>

        <div className="mt-8">

          <button
            onClick={() => (window.location.href = "/dashboard")}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-xl transition duration-300 shadow-lg"
          >
            Sign In
          </button>

        </div>

      </div>

    </main>
  );
}