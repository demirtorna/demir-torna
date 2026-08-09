"use client";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 border border-gray-200">

        {/* Logo */}
        <div className="text-center">

          <div className="w-20 h-20 mx-auto rounded-full bg-blue-900 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
            D
          </div>

          <h1 className="text-4xl font-bold text-blue-900 mt-6">
            DEMIR TORNA
          </h1>

          <p className="text-gray-500 mt-2">
            Administration Panel
          </p>

        </div>

        {/* Email */}
        <div className="mt-8">

          <label className="block mb-2 text-blue-900 font-semibold">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-12 rounded-xl border-2 border-gray-300 bg-white text-gray-900 px-4 placeholder-gray-400 shadow-sm outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-200 transition"
          />

        </div>

        {/* Password */}
        <div className="mt-5">

          <label className="block mb-2 text-blue-900 font-semibold">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full h-12 rounded-xl border-2 border-gray-300 bg-white text-gray-900 px-4 placeholder-gray-400 shadow-sm outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-200 transition"
          />

        </div>

        {/* Login */}
        <button
          onClick={() => (window.location.href = "/dashboard")}
          className="w-full mt-8 bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-xl transition duration-300 shadow-lg"
        >
          Sign In
        </button>

      </div>

    </main>
  );
}