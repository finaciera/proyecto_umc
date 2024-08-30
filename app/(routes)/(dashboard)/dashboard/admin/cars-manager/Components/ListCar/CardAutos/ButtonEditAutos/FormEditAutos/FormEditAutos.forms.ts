
import {z} from "zod";

export const FormSchema =z.object({ 
      id:z.string().min(2),
     
      niv: z.string().min(8),
      marca: z.string().min(2),
      submarca: z.string().min(3),
      model: z.string().min(3),
      gps: z.string(),
      tipo: z.string().min(3),
      placas: z.string().min(3),
      emplacado_estado: z.string().min(3),
      color: z.string().min(3),
      transmision: z.string().min(3),
      combustible: z.string().min(3),
      traccion: z.string().min(3),
      vestiduras: z.string().min(3),
      imagen: z.string().min(3),
      cilindraje: z.string().min(3),
      kilometraje: z.string().min(3),
      ubicacion: z.string().min(3),
      precio: z.string().min(3),
      publicado: z.boolean(),
      situacion:  z.string().min(3),
      apartado: z.boolean(),
    
   });
   