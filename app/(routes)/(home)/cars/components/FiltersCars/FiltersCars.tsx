import * as React from 'react'
import { 
    Select,
    SelectContent,
    
    SelectGroup,
    
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
 } from "@/components/ui/select";
import { FiltersCarsProps } from './FiltersCars.type';
import { Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';


export function FiltersCars( props:FiltersCarsProps) {
 
 const{clearFilters, setFilters, filters}=props 
 const handleFilter=(filter: string, value:string)=> {
    setFilters(filter,value);
 };
    return (
        <div className="grid  grid-cols-1 space-y-2 lg:grid-cols-9 mb-3 md:gap-6" >
            <div className="mt-5 mb-8 flex flex-col  md:flex-row md:space-y-0 ">
        <Select onValueChange={(value)=>handleFilter("carroceria", value)}value={filters.carroceria} >
            <SelectTrigger className='w-auto flex items-center justify-between' > 
                <SelectValue placeholder="Estilo de vehiculo" />
            </SelectTrigger>
                <SelectContent>
                <SelectGroup>
                    <SelectLabel>Estilo</SelectLabel>
                    <SelectItem value="hatchback ">HATCHBACK</SelectItem>
                      <SelectItem value="sedan">SEDAN</SelectItem>
                      <SelectItem value="pickup">PICK-UP</SelectItem>
                      <SelectItem value="suv">SUV</SelectItem>
                      <SelectItem value="minivan">MINIVAN</SelectItem>
                      <SelectItem value="crossover">CROSSOVER</SelectItem>
                      <SelectItem value="coupe">COUPÉ</SelectItem>
                      </SelectGroup>
                </SelectContent>  
        </Select>
        </div>
        <div className="mt-5 mb-8 flex flex-col md:flex-row md:space-y-0 ">
        <Select onValueChange={(value)=>handleFilter("model", value)} value={filters.model}>
            <SelectTrigger className='w-auto flex items-center justify-between' > 
                <SelectValue placeholder="Año de fabricacion:" />
            </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        
                    <SelectLabel>Año</SelectLabel>
                    <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2021">2021</SelectItem>
                      <SelectItem value="2020">2020</SelectItem>
                      <SelectItem value="2019">2019</SelectItem>
                      <SelectItem value="2018">2018</SelectItem>
                      <SelectItem value="2017">2017</SelectItem>
                    
                    </SelectGroup>
                </SelectContent>  
        </Select>
        </div>
        <div className="mt-5 mb-8 flex flex-col md:flex-row md:space-y-0 ">
        <Select onValueChange={(value)=>handleFilter("color", value)}value={filters.color} >
            <SelectTrigger className='w-auto flex items-center justify-between' > 
                <SelectValue placeholder="Color de vehiculo" />
            </SelectTrigger>
                <SelectContent>
                <SelectGroup>
                    <SelectLabel>Color</SelectLabel>
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
                      </SelectGroup>
                </SelectContent>  
        </Select>
        </div>
        <div className="mt-5 mb-8 flex flex-col md:flex-row md:space-y-0 ">
        <Select onValueChange={(value)=>handleFilter("combustible", value)}value={filters.combustible} >
            <SelectTrigger className='w-auto flex items-center justify-between' > 
                <SelectValue placeholder="Combustible:" />
            </SelectTrigger>
                <SelectContent>
                <SelectGroup>
                    <SelectLabel>Combustible</SelectLabel>
                    <SelectItem value="Gasolina">Gasolina</SelectItem>
                      <SelectItem value="Diésel">Diésel</SelectItem>
                      <SelectItem value="Electrico">Electric</SelectItem>
                      <SelectItem value="Hibrido">Hibrido</SelectItem>
                      </SelectGroup>
                </SelectContent>  
        </Select>
        </div>
        <div className="mt-5 mb-8 flex flex-col  md:flex-row md:space-y-0 ">
        <Select onValueChange={(value)=>handleFilter("transmision", value)}value={filters.transmision} >
            <SelectTrigger className='w-auto flex items-center justify-between' > 
                <SelectValue placeholder="Transmision de vehiculo" />
            </SelectTrigger>
                <SelectContent>
                <SelectGroup>
                    <SelectLabel>Transmision</SelectLabel>
                    <SelectItem value="Manual ">Manual</SelectItem>
                      <SelectItem value="Automatica">Automatica</SelectItem>
                      <SelectItem value="CVT">CVT</SelectItem>
                    </SelectGroup>
                </SelectContent>  
        </Select>
        </div>
        <div className="mt-5 mb-8 flex flex-col md:flex-row md:space-y-0 ">
        <Select onValueChange={(value)=>handleFilter("cilindraje", value)}value={filters.cilindraje} >
            <SelectTrigger className='w-auto flex items-center justify-between'> 
                <SelectValue placeholder="Cilindraje" />
            </SelectTrigger>
                <SelectContent>
                <SelectGroup>
                    <SelectLabel>cilindros</SelectLabel>
                    <SelectItem value="3 Cilindros">3 Cilindros</SelectItem>
                      <SelectItem value="4 Cilindros">4 Cilindros</SelectItem>
                      <SelectItem value="6 Cilindros">6 Cilindros</SelectItem>
                      <SelectItem value="8 Cilindros">8 Cilindros </SelectItem>
                      <SelectItem value="Electrico">Electrico </SelectItem>
                      </SelectGroup>
                    
                </SelectContent>  
        </Select>
        </div>
        <div className="mt-5 mb-8 flex flex-col md:flex-row md:space-y-0 ">
        <Select onValueChange={(value)=>handleFilter("ubicacion", value)}value={filters.ubicacion} >
            <SelectTrigger className='w-auto flex items-center justify-between' > 
                <SelectValue placeholder="ubicacion" />
            </SelectTrigger>
                <SelectContent>
                <SelectGroup>
                    <SelectLabel>Estados</SelectLabel>
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
                      </SelectGroup>
                </SelectContent>  
        </Select>
        </div>
        <div className="mt-5 mb-8 flex flex-col space-y-2 md:flex-row md:space-y-0"  >
            
        <Button onClick={clearFilters}  >
            Borrar Filtros <Trash className='w-4 h-4 ml-2 '/>
        </Button>
        </div>
    </div>
    );
    
  
}
