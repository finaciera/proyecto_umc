
import {z} from "zod";

export const FormSchema2 =z.object({ 
      
      niv: z.string().min(8, {
        message: "El NIV es importante capturarlo completo",
      }),
      marca: z.string().min(2, {
        message: "La marca no debe de permanecer vacía",
      }),
      submarca: z.string().min(3, {
        message: "El nombre del vehículo no debe de permanecer vacío",
      }),
      model: z.string().min(3, {
        message: "El año de fabricación es un dato importante",
      }),
      gps: z.string(),
      tipo: z.string().min(3, {
        message: "Es necesario identificar la carrocería del vehículo",
      }),
      placas: z.string().min(3, {
        message: "Si no tiene placas del vehículo, capturar N/A",
      }),
      emplacado_estado: z.string().min(3, {
        message: "El estado donde fue emplacado",
      }),
      color: z.string().min(3, {
        message: "El color principal del vehículo",
      }),
      transmision: z.string().min(3, {
        message: "La transmisión del vehículo no ha sido capturada",
      }),
      combustible: z.string().min(3, {
        message: "Falta definir qué tipo de combustible usa el vehículo",
      }),
      traccion: z.string().min(3, {
        message: "Captura este dato",
      }),
      vestiduras: z.string().min(3, {
        message: "El color del interior del vehículo",
      }),
      imagen: z.string().min(3, {
        message: "Sube una foto del vehículo",
      }),
      cilindraje: z.string().min(3, {
        message: "Falta esta información",
      }),
      kilometraje: z.string().min(3, {
        message: "Cuántos kilómetros tiene recorridos el vehículo",
      }),
      ubicacion: z.string().min(3, {
        message: "Dónde se encuentra el vehículo",
      }),
      precio: z.string().min(3, {
        message: "Cuál es el precio del auto?",
      }),
      publicado: z.boolean(),
      situacion:  z.string().min(3, {
        message: "El auto disponible?",}),
      apartado: z.boolean(),
    
   });
   