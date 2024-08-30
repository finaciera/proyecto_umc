import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  
  
  
  
  export function SelectMarca() {
    return (
        <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="marca" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Nissan">Nissan</SelectItem>
          <SelectItem value="Chevrolet"></SelectItem>
          <SelectItem value="Buick">Buick</SelectItem>
          <SelectItem value="GMC">GMC</SelectItem>
          <SelectItem value="Volkswagen">Volkswagen</SelectItem>
          <SelectItem value="Toyota">Toyota</SelectItem>
          <SelectItem value="Kia">Kia</SelectItem>
          <SelectItem value="Ford">Ford</SelectItem>
          <SelectItem value="Honda">Honda </SelectItem>
          <SelectItem value="Hyundai">Hyundai</SelectItem>
          <SelectItem value="Mazda"></SelectItem>
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
          <SelectItem value="Suzuki"></SelectItem>
          <SelectItem value="Ram">Ram</SelectItem>
          
        </SelectContent>
      </Select>
        )}
     

