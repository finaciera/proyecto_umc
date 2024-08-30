"use client"
import { Button } from "@/components/ui/button";
import { UseLovedAutos } from "@/hooks/use-loved-cars";
import { useAuth, UserButton } from "@clerk/nextjs"
import { Heart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
    const {userId}=useAuth();
    const {lovedItems} =UseLovedAutos();

  return (
    <div className="max-w-5xl py-5 mx-auto"  >
        <div className="justify-between lg:flex">
            <Link href="/" className="flex items-center, justify-center gap-x-2">
                <Image src="/vercel.svg" alt="TuAuto" width={50} height={50} />
                <span className="text-xl font-bold" >
                    Financiera TuAuto!
                </span>
            </Link>
            <div className="flex items-center justify-center gap-x-7" > 
                <Link  href="/cars">Lista de Autos </Link>
                <Link  href="/dashboard/admin/cars-manager"> Dashboard</Link>
            </div>
            {userId? (
                <>
                <Link href="/like-car">
                    <Heart strokeWidth={1} className={`cursor-pointer ${lovedItems.length>0 && "fill-blue-600" }` } />
                </Link>
                <UserButton/>
                </>
            ):(
                <Link href="/sign-in">
                    <Button>
                    Iniciar Sesion
                    <User strokeWidth={1} className="ml-2 h-4 w-4" />
                    </Button>
            </Link>
             ) }

        </div>

    </div>
  )
}
