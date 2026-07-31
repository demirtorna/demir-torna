export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
        <h1 className="text-4xl font-bold text-blue-700">
          DEMIR TORNA
        </h1>

        <p className="mt-4 text-gray-600">
          Industrial Photo Management System
        </p>

        <button className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg">
          Login
        </button>
      </div>
    </main>
  );
}