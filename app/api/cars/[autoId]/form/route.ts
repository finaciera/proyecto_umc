import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { autoId: string } }
) {
  
    console.log("AUTO ID :", params)
    
  try {
    const { userId } = auth();
    const { autoId } = params;
    const values = await req.json();
    console.log("el usuario que llega es :", userId)
    console.log("AUTO ID :", autoId)
    console.log("registro :", values)

    if (!userId) {
        return new NextResponse("no autorizado", {status:401})
    }
    const autos= await db.autos.update ({
        where:{
        id: autoId,
        userId,
    }, 
        data:{...values},
    });
    return NextResponse.json(autos);

  } catch (error) {
    console.log("[CARS FORM ID ]", error);
    return new NextResponse("error interno", { status: 500 });
  }
}
  