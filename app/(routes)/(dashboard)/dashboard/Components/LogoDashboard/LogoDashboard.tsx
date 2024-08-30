 import Image from "next/image"
import Link from "next/link"
export function LogoDashboard() {
  return (
    <Link href="/" className="flex 
    items-center h-20 gap-2 border-b-2
    cursor-pointer min-h-20 px-6 ">
        <Image src="/next.svg" alt="Logo" height={30} width={30}priority />
        <h1 className="text-xl font-bold"> TuAuto</h1>
    </Link>
  )
}
