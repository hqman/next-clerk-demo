import Link from "next/link";


export default async function Home() {



  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-800">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <p className="text-4xl font-bold text-center text-white">This is Next Auth Demo</p>




        <Link
          href="/dashboard"
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
        >
          Dashboard
        </Link>

      </main>
    </div>
  );
}
