"use client";
import { UseLovedAutos } from "@/hooks/use-loved-cars";
import { auth } from "@clerk/nextjs/server";
import { Autos } from "@prisma/client";
import Image from "next/image";
import { ModalAddReservation } from "@/components/shared/ModalAddReservation";
import { CarIcon, DivideSquare, Heart } from "lucide-react";
import { array } from "zod";



export function ListLoveAutos() {
  //agregar o quitar de la lista de me gustan un auto
  const { addLovedItem, removeLovedItem, lovedItems } = UseLovedAutos();
  return (
    <>
      {lovedItems.length == 0 ? (
        <h2 className="">Aun no sabemos que autos te gustaron </h2>
      ) : (
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {lovedItems.map((autos: Autos) => {
            const {
              precio,
              vestiduras,
              color,
              marca,
              imagen,
              submarca,
              model,
              id,
              kilometraje,
              ubicacion,
              transmision,
              combustible,
              cilindraje,
              tipo,
            } = autos;
            
            return (
              <div
                className="p-1 rounded-lg shadow-md hover:shadow-lg"
                key={id}
              >
                 <div className=" flex items-center justify-end space-x-2 rounded-md border p-2  border-violet-300" >
              <Heart className="mt-2 cursor-pointer  fill-red-600" onClick={()=>removeLovedItem(autos.id)}  /> 
              </div>
                <div  className="flex align-center justify-center  width:100% height:100% position:relatve position:relative " >
                
                <Image
                  src={imagen}
                  alt={submarca}
                  width={400}
                  height={600}
                  className="rounded-lg"
                />

              </div>
                <div className=" flex items-center space-x-4 rounded-md border p-3  border-violet-300">
                  <CarIcon className="text-blue-700 " />
                  <p className="text-s text-start  text-cyan-700">
                    {marca.toUpperCase()}
                  </p>
                  <div className="flex-1 space-y-1">
                    <p className="text-m align-middle text-center font-black  text-orange-500">
                      {submarca.toUpperCase()}
                    </p>
                    <p className="text-x font-black text-center ">{model}</p>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-muted-foreground">Precio :</p>
                    <p className=" font-bold text-black ">${precio}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-x-4">
                  <div>
                    <p className="flex text-xs font-normal text-center  text-blue-700">
                      Color:
                    </p>
                    <p className="text-xs font-medium text-center">
                      {color.toUpperCase()}
                    </p>
                  </div>

                  <div>
                    <p className="flex  text-xs font-normal text-center  text-blue-700">
                      Carroceria:
                    </p>
                    <p className="text-xs font-medium text-center">
                      {tipo.toUpperCase()}
                    </p>
                  </div>
                  <div>
                    <p className="flex  text-xs font-normal text-center  text-blue-700">
                      Interiores:
                    </p>
                    <p className="text-xs font-medium text-center">
                      {vestiduras.toUpperCase()}
                    </p>
                  </div>
                  <div>
                    <p className="flex  text-xs font-normal text-center  text-blue-700">
                      Transmision:
                    </p>
                    <p className="text-xs font-medium text-center">
                      {transmision.toUpperCase()}
                    </p>
                  </div>

                  <div>
                    <p className="flex  text-xs font-normal text-center  text-blue-700">
                      Combustible:
                    </p>
                    <p className="text-xs font-medium text-center">
                      {combustible.toUpperCase()}
                    </p>
                  </div>
                  <div>
                    <p className="flex  text-xs font-normal text-center  text-blue-700">
                      Cilindraje:
                    </p>
                    <p className="text-xs font-medium text-center">
                      {cilindraje.toUpperCase()}
                    </p>
                  </div>
                  <div>
                    <p className="flex  text-xs font-normal text-center  text-blue-700">
                      Kilometraje:
                    </p>
                    <p className="text-xs font-medium text-center">
                      {kilometraje.toUpperCase()}
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="flex text-s text-center text-orange-600">
                    Ubicado:
                  </p>
                  <p className="text-xs font-extrabold text-center   ">
                    {ubicacion.toUpperCase()}
                  </p>
                </div>
                <div className="text-center font-extrabold border p-3  border-green-300 ">
                  <p className="text-xs font-bold text-center  text-green-600">
                    DISPONIBLE
                  </p>
                </div>

                <div className="flex items-center justify-center gap-x-3 ">
                  <ModalAddReservation autos={[autos]} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
