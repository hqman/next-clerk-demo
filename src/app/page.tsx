import Link from "next/link";
import { auth, currentUser } from '@clerk/nextjs/server'


export default async function Home() {




  const user = await currentUser()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-800">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <p className="text-4xl font-bold text-center text-white">This is Next Auth Demo</p>

        {/* 显示登录状态 未登录状态显示 */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-white text-xl">
            {user ? (
              <>
                <span className="font-bold text-2xl text-blue-400 mb-2 block">{user.firstName}</span>
                <span className="text-gray-300 italic">{user.emailAddresses[0].emailAddress}</span>
              </>
            ) : (
              "Not logged in"
            )}
          </p>

        </div>

        <div className="flex gap-4">
          {!user && (
            <>
              <Link
                href="/sign-in"
                className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </Link>
            </>
          )}
          <Link
            href="/dashboard"
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
          >
            Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
