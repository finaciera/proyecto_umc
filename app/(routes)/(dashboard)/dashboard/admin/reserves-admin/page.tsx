import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { use } from "react";
import { TableReserves } from "./components/TableReserves";


export default async function pageReservesAdmin() {
  const {userId}=auth()
  const user = await currentUser();

  if (!userId || !user){
    return redirect("/");
  }
    const orders= await db.cotiza.findMany({
    orderBy:{
        createdAt:"desc"
    },  
    });
    console.log(user)
    return (
    <div>
        <h1 className="text-3xl mb-4">Citas Pendientes</h1>
        <TableReserves orders={[]}/>
    </div>
  )
}
