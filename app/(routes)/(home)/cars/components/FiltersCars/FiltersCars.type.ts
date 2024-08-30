export type FiltersCarsProps={
    setFilters: (filterName:string, filterValue:string) => void
    clearFilters: () => void
    filters:{
        color:string,
        model:string,
        transmision:string,
        carroceria:string,
        ubicacion:string,
        combustible:string,
        cilindraje:string,
    }
}