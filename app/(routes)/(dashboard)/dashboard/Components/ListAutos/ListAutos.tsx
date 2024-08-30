"use client"
import { Autos } from "@prisma/client";
import { ListAutosProps } from "./ListAutos.type";
import Image from "next/image";
import { CarIcon, Heart } from "lucide-react";
import { ModalAddReservation } from "@/components/shared/ModalAddReservation";
import { UseLovedAutos } from "@/hooks/use-loved-cars";
import { Item } from "@radix-ui/react-select";

export function ListAutos(props: ListAutosProps) {
  const { autosArray } = props;
//funcionalidad loved autos
const {addLovedItem, lovedItems, removeLovedItem  }=UseLovedAutos();
console.log("Estos son los autos que le gustan",lovedItems);
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {autosArray.map((autos: Autos) => {
        const {
          id,
          model,
          marca,
          submarca,
          precio,
          transmision,
          combustible,
          cilindraje,
          kilometraje,
          ubicacion,
          color,
          tipo,
          imagen,
          vestiduras,
        } = autos;

        const likedAuto=lovedItems.some((Item)=>Item.id==autos.id);

        return (
          <div
            key={id}
            className="p'1 rounded-lg shadow-md hover:shadow-ld bg-white "
          >
            <div className=" flex items-center justify-end space-x-2 rounded-md border p-2  border-violet-300" >
              <Heart 
               className={`mt-2 cursor-pointer text-blue-800 ${likedAuto ? "  fill-red-700" : ""}`}
              
                onClick={
                  likedAuto
                  ?()=>removeLovedItem(autos.id)
                  :()=> addLovedItem(autos)
                 }/> </div>
            <Image
              src={imagen}
              alt={submarca}
              width={400}
              height={600}
              className="rounded-lg"
            />

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
            <div className="text-center" >
              
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
            
            <div className="flex items-center justify-center gap-x-4 "  >
                <ModalAddReservation autos={autosArray} />

                
            </div>
          </div>
        );
      })}
    </div>
  );
}
