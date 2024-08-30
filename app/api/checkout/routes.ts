import Stripe from "stripe";
import { NextResponse } from "next/server";
import {db}from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { stripe } from "@/lib/stripe";
import { string } from "zod";
import { url } from "inspector";


const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function POST(req: Request, {params}: {params: {
    autoId: string,
    submarca: string,
    marca: string,
    modelo: string,
    diaFecha: Date,
    setHora: string,
    niv: string,
    precio: string
    
}})

{
    
    const { userId } = auth()
    const { autoId, precio, submarca, modelo, setHora, diaFecha, niv } = await req.json();

// Verifica que todos los campos existan y no sean null o undefined
if (!autoId || !precio || !submarca || !setHora || !diaFecha || !niv) {
    console.log("entro a routes  ")
    return new NextResponse("Datos incompletos", { status: 400 });
}
    if (!userId) {
        return new NextResponse("Usuario sin registro", { status: 401 });
    }

    const start = new  Date(diaFecha)
    const end= new Date (diaFecha)
    const dias =Math.ceil((end.getTime()-start.getTime())/(1000*60*60*24))+1
    const totalAmount= Number(precio)*dias
    const totalAmountStripe=Number(precio)*100*dias
    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[]=[
        {
            quantity:1,
            
            price_data:{
                currency:"MX",
                product_data:{
                    name:submarca
                },
                unit_amount:totalAmountStripe
            }
        }
    ]
    const order = await db.cotiza.create({
        data: {
            autoId,
            cotizacion:submarca,
            niv:niv,
            status:modelo,
            precio_interes:precio,
            hora_cita:diaFecha,
            ordenFecha:setHora,  
            plazos:1,
            userId:userId        

        },
    });
    const session= await stripe.checkout.sessions.create({
        line_items,
        mode:"payment",
        billing_address_collection:"required",
        phone_number_collection:{
            enabled:true,
        },
        success_url:`${process.env.NEXT_PUBLIC_FRONTEND_STORE_URL}/order-confirmation`,
        cancel_url:`${process.env.NEXT_PUBLIC_FRONTEND_STORE_URL}/order-error`,
        metadata:{
            cotizaId:order.id,
            autoId:autoId,
            setHora,
            diaFecha,
            dias
        }
    })
    return NextResponse.json({url:session.url}, {headers:corsHeaders})
}