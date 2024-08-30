"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormSchema2 } from "./FormAddCars.form";
import { use, useState } from "react";
import axios from 'axios';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UploadButton } from "@/utils/uploadthing";
import { Switch } from "@/components/ui/switch"
import { FormAddCarsProps } from "./FormsAddCars.types";
import { useRouter } from "next/navigation";



export function FormAddCar( props: FormAddCarsProps ) {
  const {setOpenDialog}=props;

    //subir la foto
  const [photoUploader, setPhotoUploader]=useState(false);
    
  
  const router= useRouter();

//validacion de los datos
  const form = useForm<z.infer<typeof FormSchema2>>({
    resolver: zodResolver(FormSchema2),
    defaultValues: {
      submarca: "",
      model: "",
      tipo: "",
      placas: "",
      emplacado_estado: "",
      color: "",
      niv:"",
      transmision: "",
      combustible: "",
      traccion: "",
      vestiduras: "",
      imagen: "",
      cilindraje: "",
      kilometraje: "",
      ubicacion: "",
      precio: "",
      gps:"no",
      publicado: false,
      situacion: "",
      apartado: false,
    },
  });
  /*const onSubmit=async (values: z.infer<typeof FormSchema2>)=> {
    setOpenDialog(false);
    try{
      console.log(values);
      await axios.post('/api/cars/', values);
      toast({
        title:"Guardado Correctamente!!"
      })
      router.refresh();
      }catch {Error}{
        toast({
          title:"No se guardo!, algo estuvo mal!!",
         variant: "destructive",
      });
    }
   
  }*/
    const onSubmit = async (values: z.infer<typeof FormSchema2>) => {
      setOpenDialog(false);
    
      try {
        const response = await axios.post('/api/cars/', values);
        if (response.status === 200) {
          toast( {
            title: "Guardado Correctamente!!",
            description: "¡Operación exitosa! "
               
              
          });
          router.refresh();
        } else {
          // Manejar respuestas no exitosas
          console.error('Error al guardar:', response);
          toast({
            title: "Error al guardar. Intente nuevamente.",
            variant: "destructive",
          });
        }
      } catch (error) {
        // Manejar otros errores (por ejemplo, errores de red)
        console.error('Error inesperado:', error);
        toast({
          title: "Error inesperado. Por favor, contacte al administrador.",
          variant: "destructive",
        });
      }
    };
  const {isValid}= form.formState;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-4/2 space-y-6 bg-stone-100 p-3  "
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {/* modelo del vehiculo cuadro de captura */}
          <FormField
            control={form.control}
            name="submarca"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vehículo</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre del vehículo" {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          {/* lista de marcas de vehiculo */}
          <FormField
            control={form.control}
            name="marca"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Marca:</FormLabel>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value || ''} 
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Marcas" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Nissan">Nissan</SelectItem>
                    <SelectItem value="Chevrolet">Chevrolet</SelectItem>
                    <SelectItem value="Dodge">Dodge</SelectItem>
                    <SelectItem value="Buick">Buick</SelectItem>
                    <SelectItem value="GMC">GMC</SelectItem>
                    <SelectItem value="Volkswagen">Volkswagen</SelectItem>
                    <SelectItem value="Toyota">Toyota</SelectItem>
                    <SelectItem value="Kia">Kia</SelectItem>
                    <SelectItem value="Ford">Ford</SelectItem>
                    <SelectItem value="Honda">Honda</SelectItem>
                    <SelectItem value="Hyundai">Hyundai</SelectItem>
                    <SelectItem value="Mazda">Mazda</SelectItem>
                    <SelectItem value="Fiat">Fiat</SelectItem>
                    <SelectItem value="Volvo">Volvo</SelectItem>
                    <SelectItem value="BYD">BYD</SelectItem>
                    <SelectItem value="GreatWall">Great Wall</SelectItem>
                    <SelectItem value="Changan">Changan</SelectItem>
                    <SelectItem value="JAC">JAC</SelectItem>
                    <SelectItem value="BAIC">BAIC</SelectItem>
                    <SelectItem value="MG">MG</SelectItem>
                    <SelectItem value="Jeep">Jeep</SelectItem>
                    <SelectItem value="Renault">Renault</SelectItem>
                    <SelectItem value="Mitsubishi">Mitsubishi</SelectItem>
                    <SelectItem value="Suzuki">Suzuki</SelectItem>
                    <SelectItem value="Ram">Ram</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          {/* select del ano de fabricacion  */}
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Año de fabricación:</FormLabel>

                <Select
                  onValueChange={field.onChange }
                   defaultValue={field.value || ''} 
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Año" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2020">2020</SelectItem>
                    <SelectItem value="2019">2019</SelectItem>
                    <SelectItem value="2018">2018</SelectItem>
                    <SelectItem value="2017">2017</SelectItem>
                  </SelectContent>
                </Select>

                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          {/* select de carroceria  */}
          <FormField
            control={form.control}
            name="tipo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Carroceria:</FormLabel>

                <Select
                  onValueChange={field.onChange}
                   defaultValue={field.value || ''} 
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Seleccona la carroceria" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="hatchback ">HATCHBACK</SelectItem>
                    <SelectItem value="sedan">SEDAN</SelectItem>
                    <SelectItem value="pickup">PICK-UP</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="minivan">MINIVAN</SelectItem>
                    <SelectItem value="crossover">CROSSOVER</SelectItem>
                    <SelectItem value="coupe">COUPÉ</SelectItem>
                  </SelectContent>
                </Select>

                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          {/* select color  */}
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color :</FormLabel>

                <Select
                  onValueChange={field.onChange}
                   defaultValue={field.value || ''} 
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Seleccona color" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Rojo ">Rojo</SelectItem>
                    <SelectItem value="Blanco">Blanco</SelectItem>
                    <SelectItem value="Negro">Negro</SelectItem>
                    <SelectItem value="Gris">Gris</SelectItem>
                    <SelectItem value="Arena">Arena</SelectItem>
                    <SelectItem value="Plateado">Plateado</SelectItem>
                    <SelectItem value="Azul">Azul</SelectItem>
                    <SelectItem value="Cafe">Cafe</SelectItem>
                    <SelectItem value="Amarillo">Amarillo</SelectItem>
                    <SelectItem value="Naranja">Naranja</SelectItem>
                    <SelectItem value="Verde">Verde</SelectItem>
                  </SelectContent>
                </Select>

                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          {/* select vestiduras  */}
          <FormField
            control={form.control}
            name="vestiduras"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color interior:</FormLabel>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={typeof field.value === 'string' ? field.value : ''} 
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Interiores" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Blanco">Blanco</SelectItem>
                    <SelectItem value="Negro">Negro</SelectItem>
                    <SelectItem value="Gris">Gris</SelectItem>
                    <SelectItem value="Arena">Arena</SelectItem>
                  </SelectContent>
                </Select>

                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* select combustible  */}
          <FormField
            control={form.control}
            name="combustible"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Combustible :</FormLabel>

                <Select
                  onValueChange={field.onChange}
                   defaultValue={field.value || ''} 
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Combustible" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Gasolina">Gasolina</SelectItem>
                    <SelectItem value="Diésel">Diésel</SelectItem>
                    <SelectItem value="Electrico">Electric</SelectItem>
                    <SelectItem value="Hibrido">Hibrido</SelectItem>
                  </SelectContent>
                </Select>

                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          {/* select traccion */}
          <FormField
            control={form.control}
            name="traccion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Traccion</FormLabel>

                <Select
                  onValueChange={field.onChange}
                   defaultValue={field.value || ''} 
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Traccion" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Delantera FWD ">
                      Delantera FWD
                    </SelectItem>
                    <SelectItem value="Trasera RWD">Trasera RWD</SelectItem>
                    <SelectItem value="4x4 AWD">4x4 AWD</SelectItem>
                  </SelectContent>
                </Select>

                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          {/* select transmision  */}
          <FormField
            control={form.control}
            name="transmision"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de Transmision:</FormLabel>

                <Select
                  onValueChange={field.onChange}
                   defaultValue={field.value || ''} 
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="transmision" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Manual ">Manual</SelectItem>
                    <SelectItem value="Automatica">Automatica</SelectItem>
                    <SelectItem value="CVT">CVT</SelectItem>
                  </SelectContent>
                </Select>

                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* select cilindraje */}
          <FormField
            control={form.control}
            name="cilindraje"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cilindros:</FormLabel>

                <Select
                  onValueChange={field.onChange}
                   defaultValue={field.value || ''} 
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Cilindros" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="3 Cilindros">3 Cilindros</SelectItem>
                    <SelectItem value="4 Cilindros">4 Cilindros</SelectItem>
                    <SelectItem value="6 Cilindros">6 Cilindros</SelectItem>
                    <SelectItem value="8 Cilindros">8 Cilindros </SelectItem>
                    <SelectItem value="Electrico">Electrico </SelectItem>
                  </SelectContent>
                </Select>

                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* input kilometros */}
          <FormField
            control={form.control}
            name="kilometraje"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kilometraje :</FormLabel>
                <FormControl>
                  <Input placeholder="Kilometraje" {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          {/*imagen*/}
          <FormField
            control={form.control}
            name="imagen"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Foto:</FormLabel>
                <FormControl>
                  {photoUploader ? (
                    <p className="text-sm">La Imagen se subio correctamente!</p>
                  ) : (
                    <UploadButton
                      className="rounded-lg bg-slate-700/20 text-slate-800 outline-dotted outline-3"
                      {...field}
                      endpoint="photo"
                      onClientUploadComplete={(res) => {
                        form.setValue("imagen", res?.[0].url);
                        setPhotoUploader(true);
                      }}
                      onUploadError={(error: Error) => {
                        console.log(error);
                      }}
                    />
                  )}
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* select ubicacion  */}
          <FormField
            control={form.control}
            name="ubicacion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Se encuentra en:</FormLabel>

                <Select
                  onValueChange={field.onChange}
                   defaultValue={field.value || ''} 
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Ubicacion" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Aguascalientes ">
                      Aguascalientes{" "}
                    </SelectItem>
                    <SelectItem value="Baja California">
                      Baja California
                    </SelectItem>
                    <SelectItem value="Baja California Sur">
                      Baja California Sur
                    </SelectItem>
                    <SelectItem value="Campeche">Campeche</SelectItem>
                    <SelectItem value="Chihuahua">Chihuahua</SelectItem>
                    <SelectItem value="Ciudad de México">
                      Ciudad de México
                    </SelectItem>
                    <SelectItem value="Coahuila">Coahuila</SelectItem>
                    <SelectItem value="Colima">Colima</SelectItem>
                    <SelectItem value="Durango">Durango</SelectItem>
                    <SelectItem value="Estado de México">
                      Estado de México
                    </SelectItem>
                    <SelectItem value="Guanajuato">Guanajuato</SelectItem>
                    <SelectItem value="Guerrero">Guerrero</SelectItem>
                    <SelectItem value="Hidalgo">Hidalgo</SelectItem>
                    <SelectItem value="Jalisco">Jalisco</SelectItem>
                    <SelectItem value="Michoacán ">Michoacán</SelectItem>
                    <SelectItem value="Morelos">Morelos</SelectItem>
                    <SelectItem value="Nayarit">Nayarit</SelectItem>
                    <SelectItem value="Nuevo León">Nuevo León</SelectItem>
                    <SelectItem value="Oaxaca">Oaxaca</SelectItem>
                    <SelectItem value="Puebla">Puebla</SelectItem>
                    <SelectItem value="Querétaro">Querétaro</SelectItem>
                    <SelectItem value="Quintana Roo">Quintana Roo</SelectItem>
                    <SelectItem value="San Luis Potosí ">
                      San Luis Potosí
                    </SelectItem>
                    <SelectItem value="Sinaloa">Sinaloa</SelectItem>
                    <SelectItem value="Sonora">Sonora</SelectItem>
                    <SelectItem value="Tabasco">Tabasco</SelectItem>
                    <SelectItem value="Tamaulipas">Tamaulipas</SelectItem>
                    <SelectItem value="Tlaxcala">Tlaxcala</SelectItem>
                    <SelectItem value="Veracruz">Veracruz</SelectItem>
                    <SelectItem value="Yucatán">Yucatán</SelectItem>
                    <SelectItem value="Zacatecas">Zacatecas</SelectItem>
                  </SelectContent>
                </Select>

                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* precio */}
          <FormField
            control={form.control}
            name="precio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Precio de venta:</FormLabel>
                <FormControl>
                  <Input placeholder="precio" {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {/* niv */}
          <FormField
            control={form.control}
            name="niv"
            render={({ field }) => (
              <FormItem>
                <FormLabel>NIV vehicular</FormLabel>
                <FormControl>
                  <Input placeholder="Numero de serie" {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          {/* placas */}
          <FormField
            control={form.control}
            name="placas"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Numero de Placas:</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          {/* emplacado_estado  */}
          <FormField
            control={form.control}
            name="emplacado_estado"
            render={({ field }) => (
              <FormItem>
                <FormLabel>del estado de:</FormLabel>

                <Select
                  onValueChange={field.onChange}
                   defaultValue={field.value || ''} 
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Estado" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Aguascalientes ">
                      Aguascalientes{" "}
                    </SelectItem>
                    <SelectItem value="Baja California">
                      Baja California
                    </SelectItem>
                    <SelectItem value="Baja California Sur">
                      Baja California Sur
                    </SelectItem>
                    <SelectItem value="Campeche">Campeche</SelectItem>
                    <SelectItem value="Chihuahua">Chihuahua</SelectItem>
                    <SelectItem value="Ciudad de México">
                      Ciudad de México
                    </SelectItem>
                    <SelectItem value="Coahuila">Coahuila</SelectItem>
                    <SelectItem value="Colima">Colima</SelectItem>
                    <SelectItem value="Durango">Durango</SelectItem>
                    <SelectItem value="Estado de México">
                      Estado de México
                    </SelectItem>
                    <SelectItem value="Guanajuato">Guanajuato</SelectItem>
                    <SelectItem value="Guerrero">Guerrero</SelectItem>
                    <SelectItem value="Hidalgo">Hidalgo</SelectItem>
                    <SelectItem value="Jalisco">Jalisco</SelectItem>
                    <SelectItem value="Michoacán ">Michoacán</SelectItem>
                    <SelectItem value="Morelos">Morelos</SelectItem>
                    <SelectItem value="Nayarit">Nayarit</SelectItem>
                    <SelectItem value="Nuevo León">Nuevo León</SelectItem>
                    <SelectItem value="Oaxaca">Oaxaca</SelectItem>
                    <SelectItem value="Puebla">Puebla</SelectItem>
                    <SelectItem value="Querétaro">Querétaro</SelectItem>
                    <SelectItem value="Quintana Roo">Quintana Roo</SelectItem>
                    <SelectItem value="San Luis Potosí ">
                      San Luis Potosí
                    </SelectItem>
                    <SelectItem value="Sinaloa">Sinaloa</SelectItem>
                    <SelectItem value="Sonora">Sonora</SelectItem>
                    <SelectItem value="Tabasco">Tabasco</SelectItem>
                    <SelectItem value="Tamaulipas">Tamaulipas</SelectItem>
                    <SelectItem value="Tlaxcala">Tlaxcala</SelectItem>
                    <SelectItem value="Veracruz">Veracruz</SelectItem>
                    <SelectItem value="Yucatán">Yucatán</SelectItem>
                    <SelectItem value="Zacatecas">Zacatecas</SelectItem>
                  </SelectContent>
                </Select>

                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {/* select situacion */}
          
           <FormField
            control={form.control}
            name="situacion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status:</FormLabel>

                <Select
                  onValueChange={field.onChange}
                   defaultValue={field.value || ''} 
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                  <SelectItem value="Disponible">Disponible</SelectItem>
                    <SelectItem value="Vendido">Vendido</SelectItem>
                    <SelectItem value="Mantenimiento">Mantenimiento</SelectItem>
                    <SelectItem value="Inactivo">Inactivo</SelectItem>
                    <SelectItem value="Baja">Baja</SelectItem>
                    
                  </SelectContent>
                </Select>

                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          {/* disponible */}
          <div className="flex items-center space-x-1 justify-center">
           
            <FormField
              control={form.control}
              name="publicado"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-2 px-2  ">
                    <FormLabel className="text-base items-center space-x-2 justify-center">
                        Publicar vehiculo
                    </FormLabel>
                    
                  </div>
                  
                </FormItem>
              )}
            />
          </div>
          {/* apartado*/}
          <div className="flex items-center space-x-1 justify-center">
           
           <FormField
             control={form.control}
             name="apartado"
             render={({ field }) => (
               <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                 <FormControl>
                   <Switch
                     checked={field.value}
                     onCheckedChange={field.onChange}
                   />
                 </FormControl>
                 <div className="space-y-2 px-2">
                   <FormLabel className="text-base items-center space-x-2 justify-center">
                       Apartado
                   </FormLabel>
                   
                 </div>
                 
               </FormItem>
             )}
           />




         </div>
          {/* Añade más campos según sea necesario */}
        </div>

        <Button type="submit"className="w-full mt-5" disabled={!isValid} >Guardar Vehiculo</Button>
      </form>
    </Form>
  );
}
