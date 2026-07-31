export default function DashboardPage() {
  return (
    <div>

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-blue-900">
          Welcome to DEMIR TORNA
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Industrial Machinery Management System
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">

          <h2 className="text-blue-900 text-lg font-semibold">
            Image System
          </h2>

          <p className="text-3xl font-bold mt-6 text-green-600">
            Ready
          </p>

          <p className="text-gray-500 mt-3">
            Waiting for image uploads.
          </p>

        </div>



        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">

          <h2 className="text-blue-900 text-lg font-semibold">
            Product Management
          </h2>

          <p className="text-3xl font-bold mt-6 text-green-600">
            Available
          </p>

          <p className="text-gray-500 mt-3">
            Ready to manage products.
          </p>

        </div>



        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">

          <h2 className="text-blue-900 text-lg font-semibold">
            System Status
          </h2>

          <p className="text-3xl font-bold mt-6 text-blue-900">
            Online
          </p>

          <p className="text-gray-500 mt-3">
            Dashboard is working normally.
          </p>

        </div>

      </div>

    </div>
  );
}