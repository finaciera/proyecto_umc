"use client";

import {
  DownloadIcon,
  Upload,
  Trash,
  Fuel,
  Wrench,  
  CarIcon,
   CircleCheck, 
} from "lucide-react";
import {ButttonEditAutos} from "./ButtonEditAutos";
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { CardAutosProps } from "./CardAutos.type";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import axios from "axios";
import { boolean } from "zod";

export function CardAutos(props: CardAutosProps) {
  const { autos } = props;
//llamamos la ruta para el boton borrar,(para identificar que dato vamos a borrar)
  const router = useRouter();

  //FUNCION BORRRAR AUTOMOVIL
  /*const deleteAuto =async()=>{
    try{
      await axios.delete(`/api/cars/${autos.id }`);
      toast({title:"El Auto se elimino correctamente!"});

    }catch(error){
      toast({
        title:"Tuvimos error al intentar borrar",
        variant: "destructive"
      })
    }

  }*/
    const deleteAuto = async () => {
      try {
          await axios.delete(`/api/cars/${autos.id}`);
          toast({ title: "El Auto se eliminó correctamente!" });
      } catch (error) {
          toast({
              title: "Tuvimos un error al intentar borrar",
              variant: "destructive",
          });
      }
  };

//cambiar el estado de publicado a no publicado
  const publicarAuto =async ( valor: boolean )=>{
    try{
      
      await axios.patch (`/api/cars/${autos.id}`,{publicado: valor } );
        if (valor){
          toast({
            title:"El Auto se subio a la pagina ",
          })
        }else{
          toast({
            title:"El Auto ya no esta publicado en la pagina ",
          })
          router.refresh();
        }

    }catch(error){
      toast({
        title: "Tuvimos un error al hacer los cambios",
        variant:"destructive",
      });
    }
  };

  return (
    <div
      className="relative p-1 border-slate-600 
     bg-white rounded-lg shadow-mg  hover:shadow-lg"
    >
      <Card className={cn("w-[260px]")} {...props}>
        <CardHeader>
          <CardTitle>
            {autos.publicado ? (
              <p className="absolute top-0 right-0 w-full p-1 text-center text-white bg-green-700 rounded-t-lg ">
                PUBLICADO
              </p>
            ) : (
              <p className="absolute top-0 right-0 w-full p-1 text-center text-white bg-red-700 rounded-t-lg ">
                NO PUBLICADO
              </p>
            )}
          </CardTitle>
        </CardHeader>            
        <CardContent  className="p'1 rounded-lg shadow-md hover:shadow-ld" >
          <div>
            <Image
              src={autos.imagen}
              alt={autos.model}
              width={400}
              height={600}
              className="rounded-lg"
            />
          </div>
        </CardContent>
        <CardDescription>
          <div className=" flex items-center space-x-4 rounded-md border p-4  border-violet-300">
            <CarIcon className="text-blue-700 " />
            <div className="flex-1 space-y-1">
              <p className="text-s text-center text-cyan-500">
                {autos.marca.toUpperCase()}
              </p>
              <p className="text-m align-middle text-center font-black">
                {autos.submarca.toUpperCase()}
              </p>
              <p className="text-x font-black text-center">{autos.model}</p>
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-muted-foreground">Precio :</p>
              <p className=" font-bold text-black ">${autos.precio}</p>
            </div>
          </div>
        </CardDescription>
        <CardDescription>
        <Separator />

          <div>
            <p className="flex text-s text-center  text-blue-700">
              <CircleCheck className="h-4 w-4 mr-2 text-cyan-500 " strokeWidth={1} />
              NIV:
            </p>
            <p className="text-s font-bold text-center">{autos.niv}</p>
          </div>
          <Separator />

          <div>
            <p className="flex text-s text-center  text-blue-700">
              <Wrench className="h-4 w-4 mr-2 text-cyan-500 " strokeWidth={1} />
              Placas:
            </p>
            <p className="text-s font-bold text-center">{autos.placas}</p>
          </div>
          <Separator />

          <div>
            <p className="flex text-s text-center  text-blue-700">
              <Fuel className="h-4 w-4 mr-2 text-cyan-500 " strokeWidth={1} />
              Emplacado en:
            </p>
            <p className="text-s font-bold text-center">
              {autos.emplacado_estado}
            </p>
          </div>
          <Separator />
        </CardDescription>
        <CardFooter>
          <div className="grid md:grid-cols-2 gap-x-4">
            <div>
              <p className="flex text-s text-center  text-blue-700">
                
                Color:
              </p>
              <p className="text-s font-bold text-center">{autos.color}</p>
            </div>

            <div>
              <p className="flex text-s text-center  text-blue-700">
                
                Carroceria:
              </p>
              <p className="text-s font-bold text-center">{autos.tipo}</p>
            </div>
            <div>
              <p className="flex text-s text-center  text-blue-700">
                
                Interiores:
              </p>
              <p className="text-s font-bold text-center">{autos.vestiduras}</p>
            </div>
            <div>
              <p className="flex text-s text-center  text-blue-700">
                
                Transmision:
              </p>
              <p className="text-s font-bold text-center">
                {autos.transmision}
              </p>
            </div>
            <div>
              <p className="flex text-s text-center  text-blue-700">
                
                Traccion:
              </p>
              <p className="text-s font-bold text-center">{autos.traccion}</p>
            </div>
            <div>
              <p className="flex text-s text-center  text-blue-700">
                
                Combustible:
              </p>
              <p className="text-s font-bold text-center">
                {autos.combustible}
              </p>
            </div>
            <div>
              <p className="flex text-s text-center  text-blue-700">
                
                Cilindraje:
              </p>
              <p className="text-s font-bold text-center">{autos.cilindraje}</p>
            </div>
            <div>
              <p className="flex text-s text-center  text-blue-700">
                
                Kilometraje:
              </p>
              <p className="text-s font-bold text-center">
                {autos.kilometraje}
              </p>
            </div>
            <div>
              <p className="flex text-s text-center  text-blue-700">
                
                Ubicado:
              </p>
              <p className="text-s font-bold text-center">{autos.ubicacion}</p>
            </div>
          </div>
          
        </CardFooter>
        <CardFooter>
        <div className="flex justify-between mt-3 gap-x-4 "  >
            <Button variant={"outline"} onClick={deleteAuto} className="border-b-pink-400 ">
                Eliminar
                <Trash className="w-4 h-4 ml-2 text-red-600 "  />
            </Button >
            <ButttonEditAutos autosData= {autos} />

          </div>
          

          
        </CardFooter>
        <CardFooter> 
        {autos.publicado ? (
              <Button 
              className="w-full border-red-800 "
              variant={"outline"}
              onClick={()=>publicarAuto(false)}
                > No Publicar
                  <DownloadIcon className="w-4 h-4 ml-2 text-red-600 "  />

              </Button>
            ) : (
              <Button 
              className="w-full mt-3 border-green-800  "
              variant={"outline"}
              onClick={()=>publicarAuto(true)}
                 > Publicar
                  <Upload className="w-4 h-4 ml-2 text-green-600 "  />
              </Button>
            )}
        </CardFooter>
      </Card>
    </div>
  );
}


          
