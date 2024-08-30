import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import {ListAutos} from "./Components/ListAutos";
//listado de autos en el dashboar para clientes
export default async  function DashboardPage() {
  const {userId}= auth();
  //previsamos si esta autentificado
  if(!userId){return redirect("/");}
//sacamos solo los que esten en publicado true y los ordemnamos en forma descendente
const autos = await db.autos.findMany({
  where:{
    publicado: true,
  },
  orderBy:{
    createdAt:"desc"
  },
})



  return (
    <div>
      <div className="flex justify-between"  >
      <h2>  lista de vehiculos</h2>
      </div>
      <ListAutos  autosArray={autos}/>
    </div>
  )
}
 