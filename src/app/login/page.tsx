"use client";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-10">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-blue-900">
            DEMIR TORNA
          </h1>

          <p className="text-gray-500 mt-3">
            Administration Panel
          </p>

        </div>

        <div className="mt-8">

          <label className="block text-blue-900 font-medium mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
          />

        </div>

        <div className="mt-6">

          <label className="block text-blue-900 font-medium mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
          />

        </div>

        <button
          onClick={() => (window.location.href = "/dashboard")}
          className="w-full mt-8 bg-blue-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
        >
          Sign In
        </button>

      </div>

    </main>
  );
}