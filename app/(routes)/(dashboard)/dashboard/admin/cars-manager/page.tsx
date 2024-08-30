import { auth } from "@clerk/nextjs/server";
import {ButtonAddCars} from "./Components/ButtonAddCars";
import {ListCar} from "./Components/ListCar";
import { redirect } from "next/navigation";
import {db} from "@/lib/db";

export default async  function CarsManagerPage(){
    const {userId}= auth()
    if (!userId){
        return redirect("/")
    }
    const autos = await db.autos.findMany({
        where:{
            userId,
        },
        orderBy:{
            createdAt:"desc"
        },
    });
        console.log(autos);

    return(
        <div>
            <div className=" flex justify-between">
                <h2 className=" text-2xl font-bold ">formulario de pagina de carros</h2>
                <ButtonAddCars/>
            </div>
            <div className=" flex justify-between">
                <h2 className=" text-2xl font-bold "></h2>
                <ListCar autos={autos} />
            </div>
        </div>
    )

}

