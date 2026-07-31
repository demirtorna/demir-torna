import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200">

      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-900">
          DEMIR TORNA
        </h1>
      </div>

      <nav className="px-4 space-y-2">

        <Link
          href="/dashboard"
          className="block p-3 rounded-lg text-blue-900 hover:bg-blue-50"
        >
          Dashboard
        </Link>

        <Link
          href="/dashboard/upload"
          className="block p-3 rounded-lg text-blue-900 hover:bg-blue-50"
        >
          Upload Images
        </Link>

        <div className="block p-3 rounded-lg text-gray-400 cursor-not-allowed">
          Gallery (Coming Soon)
        </div>

        <div className="block p-3 rounded-lg text-gray-400 cursor-not-allowed">
          Settings (Coming Soon)
        </div>

      </nav>

    </aside>
  );
}