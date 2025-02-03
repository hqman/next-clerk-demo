export function DashboardContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Total Users</h2>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Revenue</h2>
          <p className="text-3xl font-bold">$12,345</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Active Projects</h2>
          <p className="text-3xl font-bold">42</p>
        </div>
      </div>
    </div>
  )
}

