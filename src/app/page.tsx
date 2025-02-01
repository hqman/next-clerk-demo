import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-800">
      <main className="flex flex-col gap-8 row-start-2 items-center ">
        <p className="text-4xl font-bold text-center text-white">This is Next Auth Demo</p>
        <div className="flex  items-center gap-4 pl-10">
          <Link href="/dashboard" className="px-4 py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition-colors duration-200">Dashboard</Link>


        </div>

      </main >
    </div >
  );
}
