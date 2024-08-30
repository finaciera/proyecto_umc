"use client"
import { useEffect, useState } from "react";
import { Autos } from "@prisma/client";
import ListCarsHome from "../ListCarsHome/ListCarsHome";
import { FiltersListCarsProps } from "./FiltersListCars.type";
import { FiltersCars } from "../FiltersCars";


export function FiltersListCars(props: FiltersListCarsProps) {
    const {cars}=props;
    const [filteredCars, setFilteredCars]= useState<Autos[]>()
    const [filters, setFilters] = useState({
      color:"",
      model:"",
      transmision:"",
      carroceria:"",
      ubicacion:"",
      combustible:"",
      cilindraje:"",
    })
    useEffect(()=>{
      let filtered=cars;
      if (filters.carroceria ) {
        filtered=filtered.filter((auto)=>
        auto.tipo.toLowerCase().includes(filters.carroceria.toLowerCase()));
      }
      if (filters.model ){
        filtered=filtered.filter((auto)=>
        auto.model.toLowerCase().includes(filters.model.toLowerCase()));
      }
      if (filters.color ){
        filtered=filtered.filter((auto)=>
        auto.color.toLowerCase().includes(filters.color.toLowerCase()));
      }
      if (filters.transmision ){
        filtered=filtered.filter((auto)=>
        auto.transmision.toLowerCase().includes(filters.transmision.toLowerCase()));
      } 
      if (filters.combustible ){
        filtered=filtered.filter((auto)=>
        auto.combustible.toLowerCase().includes(filters.combustible.toLowerCase()));
      }
      if (filters.cilindraje ){
        filtered=filtered.filter((auto)=>
        auto.cilindraje.toLowerCase().includes(filters.cilindraje.toLowerCase()));
      }
      if (filters.ubicacion ){
        filtered=filtered.filter((auto)=>
        auto.ubicacion.toLowerCase().includes(filters.ubicacion.toLowerCase()));
      }
      setFilteredCars(filtered)
    },[filters,cars]);
    const handleFilterChange=(filterName: string, filterValue:string)=>{
      setFilters((prevFilter)=> ({
        ...prevFilter,
        [filterName]:filterValue,
      }));
    };
    const clearFilters=()=>{
      setFilters({
        color:"",
        model:"",
        transmision:"",
        carroceria:"",
        ubicacion:"",
        combustible:"",
        cilindraje:"",
      });
    }
  return (
    <div>
      <FiltersCars
      setFilters={handleFilterChange}
      filters={filters}
      clearFilters={clearFilters}
      />
        <ListCarsHome cars={filteredCars}/>
    </div>
  )
}
