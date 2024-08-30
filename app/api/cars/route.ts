import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server"; 
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try{
        const {userId}=auth()
        const data =await req.json()
        if(!userId){
            return new NextResponse("Usuario no autorizado,{status:401 }")
        }
        const autos = await db.autos.create({
            data:{
                userId,
                ...data
            }
        })
        return NextResponse.json(autos)    

    }catch(error){
        console.log("[CAR]", error )
        return new NextResponse("Error interno",{status:500})


    }
    
}