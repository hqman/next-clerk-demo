"use client";



export function Header() {

  return (
    <header className="bg-white shadow-md py-4 px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
          </span>
          <div className="relative group">

          </div>
          <button className="md:hidden" aria-label="Open menu">
          </button>
        </div>
      </div>
    </header>
  )
}

