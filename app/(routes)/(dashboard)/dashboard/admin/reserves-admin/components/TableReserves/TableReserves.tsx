import { formatPrice } from "@/lib/formatPrice";
import { TableReservesProps } from "./TableReserves.type";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";   

export function TableReserves(props:TableReservesProps ) {
    const{orders}=props
    const totalAmount= orders.reduce((acc,booking)=>{
        return acc+ parseFloat(booking.precio_interes);
    },0);
  return (
    <Table>
    <TableCaption>Lista de sus Autos para cotizar.</TableCaption>
    <TableHeader>
      <TableRow>
        
        
        <TableHead>AUTO</TableHead>
        
        
        <TableHead>CITA</TableHead>
        <TableHead>HORA</TableHead>
        <TableHead className="text-right">PRECIO</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {
        orders.map((order)=>(
          <TableRow key={order.id}> 
            <TableCell className="font-medium">{order.autoId} </TableCell>
            <TableCell className="font-medium">{new Date(order.ordenFecha).toLocaleDateString ("es-ES",{
                day:"2-digit",
                month:"2-digit",
                year:"numeric"
            }) } </TableCell>
            <TableCell className="font-medium">{new Date(order.hora_cita).toLocaleDateString ("es-ES",{
                day:"2-digit",
                month:"2-digit",
                year:"numeric"
            }) } </TableCell>
            <TableCell className="font-medium text-right">{formatPrice (Number(order.cotizacion)) } </TableCell>
          </TableRow>
        ))}
    </TableBody>
  </Table>
  )
}
