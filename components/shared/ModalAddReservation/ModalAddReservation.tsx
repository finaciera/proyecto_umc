"use client"
import { ModalAddReservationProps } from "./modalAdddReservation.type";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Autos } from "@prisma/client";
import { useState } from "react";
import { CalendarSelector } from "./CalendarSelector";
import axios from "axios";




export  function ModalAddReservation(props: ModalAddReservationProps) {
//Constantes
    const {autos}=props;
    
    const [diaFecha,  setDateSelected] = useState<{
      
      diaFecha: Date | undefined;
      setHora: string;
    
    }>
      ({
        diaFecha: new Date(),
        setHora:"",

       });
  //function onReserveCar(autos: { id: string; niv: string; userId: string; marca: string; submarca: string; model: string; tipo: string; placas: string; emplacado_estado: string; color: string; transmision: string; combustible: string; traccion: string; gps: string; vestiduras: string; imagen: string; cilindraje: string; kilometraje: string; ubicacion: string; precio: string; publicado: boolean | null; apartado: boolean | null; situacion: string; createdAt: Date; updatedAt: Date; }, arg1: string): void {
   // throw new Error("Function not implemented.");
 // } 
 const onReserveCar = async (auto: Autos, dataSelected: typeof diaFecha ) => {

  if (!dataSelected.diaFecha || !dataSelected.setHora) {
      alert("Selecciona una fecha y una hora");
      return;
  }
  console.log("Datos enviados:", {
    autoId: auto.id,
    precio:auto.precio,
    submarca:auto.submarca,
    modelo:auto.model,
    diaFecha: dataSelected.diaFecha,
    setHora: dataSelected.setHora,
  });
  try {
    const response = await axios.post("/api/checkout", {
      autoId: auto.id,
      precio:auto.precio,
      submarca:auto.submarca,
      modelo:auto.model,
      diaFecha: dataSelected.diaFecha,
      setHora: dataSelected.setHora,
    });
} catch (error) {
    console.error("Error en la solicitud:",error);
}





  // Aquí puedes implementar la lógica para reservar el auto.
  // Por ejemplo, llamar a una API para guardar la reserva en una base de datos.
  console.log("Auto reservado:", auto);
  console.log("Fecha seleccionada:", dataSelected.diaFecha);
  console.log("Hora seleccionada:", dataSelected.setHora);
};


      const onReservarAuto= async(autos:Autos, dataSelected: typeof diaFecha)=>{};
       
  //
  return (
    <AlertDialog>
  <AlertDialogTrigger asChild >
  <button type="button" className= "w-40 text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
<svg className="w-4 h-4 me-2 -ms-1" aria-hidden="true" 
focusable="false" data-prefix="fab" data-icon="CheckCeck" 
role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path fill="currentColor" d="M504 256c0 136.1-111 248-248 
  248S8 392.1 8 256 119 8 256 8s248 111 248 248zm-141.7-35.33c4.937-32.1-20.19
  -50.74-54.55-62.57l11.15-44.7-27.21-6.781-10.85 43.52c-7.154-1.783-14.5-3.464-21.8
  -5.13l10.93-43.81-27.2-6.781-11.15 44.69c-5.922-1.349-11.73-2.682-17.38-4.084l.031
  -.14-37.53-9.37-7.239 29.06s20.19 4.627 19.76 4.913c11.02 2.751 13.01 10.04 12.68 
  15.82l-12.7 50.92c.76 .194 1.744 .473 2.829 .907-.907-.225-1.876-.473-2.876-.713l-17.8 
  71.34c-1.349 3.348-4.767 8.37-12.47 6.464 .271 .395-19.78-4.937-19.78-4.937l-13.51 31.15 
  35.41 8.827c6.588 1.651 13.05 3.379 19.4 5.006l-11.26 45.21 27.18 6.781 11.15-44.73a1038
   1038 0 0 0 21.69 5.627l-11.11 44.52 27.21 6.781 11.26-45.13c46.4 8.781 81.3 5.239 
   95.99-36.73 11.84-33.79-.589-53.28-25-65.99 17.78-4.098 31.17-15.79 34.75-39.95zm-62.18 
   87.18c-8.41 33.79-65.31 15.52-83.75 10.94l14.94-59.9c18.45 4.603 77.6 13.72 68.81 
   48.96zm8.417-87.67c-7.673 30.74-55.03 15.12-70.39 11.29l13.55-54.33c15.36 3.828 64.84 
   10.97 56.85 43.03z"></path></svg>
reservar
</button> 
    </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>
      <h2 className="text-xl text-gray-900 dark:text-white font-bold mb-2">¡Da el primer paso para tener tu nuevo auto!</h2>
         </AlertDialogTitle>
      <AlertDialogDescription>
        <div><p>Selecciona la fecha y hora que mejor te convenga para visitarnos.</p>

        </div>
        <CalendarSelector setDateSelected={setDateSelected} setHora={(hora) => setDateSelected(diaFecha)}   />
      </AlertDialogDescription>
      <AlertDialogDescription>
      Nuestro proceso de compra es sencillo y rápido. Para confirmar tu cita, te pedimos un pequeño depósito de $1500, el cual se descontará del precio final.
      </AlertDialogDescription>
      
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Mas tarde</AlertDialogCancel>
      <AlertDialogAction onClick={() => onReserveCar(autos[0], diaFecha)} >Continuar</AlertDialogAction>

    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
   
  )
}
