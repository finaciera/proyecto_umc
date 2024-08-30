"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UseLovedAutos } from "@/hooks/use-loved-cars";
import { useAuth } from "@clerk/nextjs";
import { Autos } from "@prisma/client";
import Link from "next/link";
import { ModalAddReservation } from "@/components/shared/ModalAddReservation";
import { ListCarsHomeProps } from "./ListCarsHome.type";
import { Heart } from "lucide-react";
import { SkeletonCars } from "@/components/shared/SkeletonCars";

export default function ListCarsHome(props: ListCarsHomeProps) {
  const { cars } = props;
  const { userId } = useAuth();
  const { addLovedItem, lovedItems, removeLovedItem } = UseLovedAutos();
  if (!cars) {
    return <SkeletonCars/>;
  }
  return (
    <>
      {cars.length == 0 && <p>no se ha encontrado ningun vehiculo </p>}
      <div className="grid md:grid-cols-2 mb-2 gap-6  lg:grid-cols-4 ">
        {cars.map((auto: Autos) => {
          const { precio, id, model, submarca, imagen,cilindraje, kilometraje, tipo, transmision,color, ubicacion, combustible, } = auto;
          return (
            <div key={id}>
              
              
              <div
                className="p-1 rounded-lg shadow-md 
               hover:shadow-lg shadow-blue-200"
              >
                <Image
                  src={imagen}
                  alt=""
                  width={400}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              <div className=" p-3">
                <div  className="grid border bg-indigo-100  border-amber-100 grid-cols-2 lg:grid-cols-2 mb-3 gap-x-4">
                  <p className="text-xl font-black text-center  min-h-16 lg:min-h-fit">
                    {submarca.toUpperCase()}
                  </p>
                  <p className="font-bold text-xl tex-start text-blue-600">{model}</p>
                </div>
                <div className=" justify-center font-semibold text-start">
                  Precio:
                  <p className=" bg-neutral-200  font-semibold text-center justify-end text-blue-700">
                    Mx$ {precio}
                  </p>{" "}
                </div>
              </div>
              <div className="border bg-zinc-100  border-orange-100  grid grid-cols-2 lg:grid-cols-2 mb-3 gap-x-4 rounded p-4 " >
                <p className="text-xs justify-around text text-blue-600"> Carroceria:</p>
                <p className="text-start text-xs font-semibold" > {tipo.toUpperCase()} </p>
                <p className="text-xs text-blue-600"  >Color:</p>
                <p className="text-start text-xs font-semibold" >{color.toUpperCase()} </p>
                <p className="text-xs text-blue-600"  >Transmision:</p>
                <p className="text-start text-xs font-semibold" >{transmision} </p>                
                <p className="text-xs text-blue-600"  >Cilindraje:</p>
                <p className="text-start text-xs font-semibold" >{cilindraje} </p>
                <p className="text-xs text-blue-600"  >Combustible:</p>
                <p className="text-start text-xs font-semibold" >{combustible} </p>
                <p className="text-xs text-blue-600"  >Kilometraje:</p>
                <p className="text-start text-xs font-semibold" >{kilometraje} km </p>
                <p className="text-xs text-blue-600"  >Ubicacion:</p>
                <p className="text-start  text-xs font-semibold" >{ubicacion} </p>
              </div>
              {userId ?(
                      <div className=" flex items-center justify-end space-x-2 rounded-md gap-x-3" >
                        <ModalAddReservation autos={cars}/>
                        <Heart 
                        className={`mt-2 cursor-pointer ${
                          lovedItems &&  "fill-blue-600" }`} 
                        onClick={lovedItems
                         ? ()=>removeLovedItem(auto.id)
                         : ()=> addLovedItem(auto) } />

                       
                      </div>
              ):(
                <div className="w-full mt-2 text-center">
                  <Link href={"/sign-in"} >
                  <Button variant={"outline"} className="w-full bg-blue-700 text-white"  > Inicia sesion y apartar tu proximo auto</Button>
                  </Link>

                </div>
              ) }
            </div>
          );})}
        
      </div>
    </>
  );
}
