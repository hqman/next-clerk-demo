"use client";

import { Menu } from "lucide-react"
import { UserButton, useUser } from "@clerk/nextjs"

export function Header() {
  const { user } = useUser();

  return (
    <header className="bg-white shadow-md py-4 px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            {user?.firstName} {user?.lastName}
          </span>
          <UserButton afterSignOutUrl="/" />
          <button className="md:hidden" aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}

