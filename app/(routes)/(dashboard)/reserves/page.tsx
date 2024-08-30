import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Link } from "lucide-react";
import{redirect} from "next/navigation";
import { TableReserves } from "./Components/TableReserves";

export default async function pageRserves() {
    const{userId}=auth();
    
    if (!userId){
        return redirect("/");       
    }
    const orden_cotiza= await db.cotiza.findMany({
        where:{userId:userId }, 
        orderBy:{createdAt:"desc"},
    });
    console.log(orden_cotiza);

  return (
    <div>
    <h1 className="mb-4 text-3xl">
      Autos reservados!
       </h1>
       {orden_cotiza.length==0 ?(
        <div className="flex flex-col justify-center gap-4 items-center" >
          <h2 className="text-xl"  >No tienes Autos reservados</h2>
          <p> Selecciona los autos que quieres reservar</p>
          <Link href="/autos"> 
          <Button>Lista de vehiculos</Button>
           </Link>
        </div>
       ):( 
        <TableReserves orders={orden_cotiza} />
       )}
    </div>
      );
}
