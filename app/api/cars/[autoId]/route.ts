import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
// cambiar el estado de publicado a no publicado del auto
export async function PATCH(
    req:Request,
    {params}: {params:{autoId:string}}
){
    try{
        const {userId }=auth();
        const {autoId}=params;
        const{ publicado}=await req.json();
        if(!userId){
            return new NextResponse("No Autorizado", {status:401})
        }
        const auto=await db.autos.update({
            where: {
                id: autoId,
                userId,
            },
            data:{
                publicado:publicado,
            },

        });
        return NextResponse.json(auto);

    }catch(error){
        console.log ("[CARS ID PATCH]",error);
        return new NextResponse("Error al Cambiar la publicacion",{status:500})
    }
}




//borrar un registro
export async function DELETE(
    req: Request,
    { params }: { params: { autoId: string } } // Asegúrate de que el nombre coincida con lo que se espera en la ruta
) {
    try {
        const { userId } = auth();
        const { autoId } = params; // Usa 'autoId' si ese es el nombre correcto en la URL
        if (!userId) {
            return new NextResponse("El usuario no está registrado", { status: 401 });
        }
        const deleteAuto = await db.autos.delete({
            where: {
                id: autoId, // Asegúrate de usar 'autoId' aquí también
            },
        });
        return NextResponse.json(deleteAuto);
    } catch (error) {
        console.log("[DELETE CARS ID]", error); // Usa 'error' para imprimir el mensaje real de error
        return new NextResponse("Error al borrar el registro", { status: 500 });
    }
}
