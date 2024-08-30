"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { FormAddCar } from "../FormAddCar";
import { useState } from "react";

export function ButtonAddCars() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpenDialog(true)}>
          Agregar Auto
          <PlusCircle className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="sm:justify-center">
            <div className="sm:justify-center">CAPTURAR INFORMACION DEL VEHICULO</div>
          </DialogTitle>
         
        </DialogHeader>
        <DialogDescription>
          <FormAddCar setOpenDialog={setOpenDialog} />
        </DialogDescription>
        
      </DialogContent>
    </Dialog>
  );
}
