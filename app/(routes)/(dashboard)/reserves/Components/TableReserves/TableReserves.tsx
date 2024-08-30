import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableReservesProps } from "./TableReserves.type";
import { formatPrice } from "@/lib/formatPrice";
import { number } from "zod";

export function TableReserves(props: TableReservesProps) {
  const { orders } = props;
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
              <TableCell className="font-medium">{new Date(order.ordenFecha).toLocaleDateString () } </TableCell>
              <TableCell className="font-medium">{new Date(order.hora_cita).toLocaleDateString() } </TableCell>
              <TableCell className="font-medium text-right">{formatPrice (Number(order.cotizacion)) } </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
