"use client";

import { Menu } from "lucide-react"
import { UserButton, useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

export function Header() {
  const { user } = useUser();
  const router = useRouter();

  return (
    <header className="bg-white shadow-md py-4 px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            {user && `Welcome, ${user.firstName} ${user.lastName}`}
          </span>
          <div className="relative group">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonBox: "hover:opacity-80 transition-opacity",
                  userButtonTrigger: "rounded-full"
                }
              }}
            />
          </div>
          <button className="md:hidden" aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}

