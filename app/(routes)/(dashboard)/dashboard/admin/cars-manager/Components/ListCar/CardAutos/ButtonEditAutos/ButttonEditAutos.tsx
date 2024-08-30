"use client"
import { Button } from "@/components/ui/button";
import { Dialog,
    DialogContent,
    DialogTrigger,
    DialogDescription,
    DialogTitle,
    DialogHeader,
  } from "@/components/ui/dialog";
import { Pencil } from "lucide-react";  
import { useState } from "react";   
import { ButttonEditProps } from "./ButtonEditAutos.type";

import {FormEditAutos} from "./FormEditAutos";

export function ButttonEditAutos(props: ButttonEditProps  ) {
    const{ autosData}=props;
    const[openDialog, setOpenDialog]= useState(false);


  return (
     <Dialog open={openDialog} onOpenChange={setOpenDialog} >
        <DialogTrigger asChild  >
            <Button variant={"outline"} onClick={()=>setOpenDialog(true)}>
                Editar 
                <Pencil className="w-4 h-4 ml-2 text-yellow-300 "/>
            </Button>
        </DialogTrigger>
        <DialogContent>
                <DialogHeader>
                    <DialogDescription>
                        <FormEditAutos setOpenDialog={setOpenDialog} autosData={autosData }/>
                    </DialogDescription>
                    </DialogHeader>    
        </DialogContent>

     </Dialog>
  )
}
