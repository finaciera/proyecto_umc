import { Button } from "@/components/ui/button";
import { Divide, MoveRight } from "lucide-react";
import {
  CategoryOurFleet,
  GrupoOurFleet,
  SedanOurFleet
}from"./OurFleet.data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { url } from "inspector";


export function OurFleet() {
  return (
    <div 
    className=" max-w-6xl mx-auto text-center py-8 lg:py-40 p-6">
      <h3 className="text-2xl lg:text-6xl font-bold"  >
        MENSAJE
      </h3>
      <p 
      className="text-lg mt-2 lg:mt-5 lg:text-xl 
      text-center w-full mx-auto max-w-2xl mb-5 lg:mg-10"  >
        Tenemos a tu disposicion diferentes modelos de autos

      </p>
      
      <div 
      className="grid grid-cols-7 lg:grid-col-6 gap-4 
      items-center justify-center mb-5 max-w-2xl mx-auto ">

        {CategoryOurFleet.map(({category,active})=>(
          <div key={category}
          className={cn(
            "rounded-xl py-3 px-4 max-w-2xl ",
            active ? "bg-orange-500 text-blue-800":"bg-slate-200"
          )}  >{category} </div> ))}

      </div>

      <div className="mb-10" >
        <div className="grid grid-cols-3 gap-x-6 mb-6" >
          {GrupoOurFleet.map(({url})=>(
            <div key={"/cars"} >
              <Image
              src={`/image/cars/${url}`}
              alt="Cars"
              width={400}
              height={300}
              className="rounded-xl"
              />

            </div>
          ))}

        </div>
        <div className="mb-10" >
        <div className="grid grid-cols-4 gap-x-6 mb-6" >
          {SedanOurFleet.map(({url})=>(
            <div key={url}>
              <Image
              src={`/image/cars/${url}`}
              alt="Cars"
              width={400}
              height={300}
              className="rounded-xl  "
              />

            </div>
          ))}

        </div>
        
      </div>
      
      </div>
      <Link href="/cars"> 
          <Button className=" border-yellow-300 bg-orange-300  rounded-xl p6 text-lg mt-5" variant="outline">
            VER CATALOGO  
            <MoveRight className="ML-2"/> 
          </Button>
      </Link>
      </div>
      
  )
}
