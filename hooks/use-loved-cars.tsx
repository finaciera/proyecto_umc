import { create } from 'zustand';
import { persist, StateStorage, createJSONStorage } from 'zustand/middleware';
import { toast } from '@/components/ui/use-toast';
import { Autos } from '@prisma/client';
import { set } from 'date-fns';
import { Item } from '@radix-ui/react-select';
import { string } from 'zod';

interface UseLovedAutosType{
    lovedItems:Autos[],
    addLovedItem: (data: Autos)=>void,
    removeLovedItem:(id:string)=>void,
}

export const UseLovedAutos=create(
    persist <UseLovedAutosType>(
        //se buca el auto yse pone en el arreglo
        (set,get)=>({
            lovedItems:[],
            addLovedItem:(data: Autos)=>{
                const currentLovedItems=get().lovedItems;
                const existingItem=currentLovedItems.find((Item)=>Item.id==data.id)
                // si ya esta en l;a lista
                if(existingItem){
                    return toast({
                        title:"El Auto Ya esta en tu lista"
                    });

                }
                set({
                    lovedItems:[...get().lovedItems,data]
                })
                toast({
                    title:"El Auto se Agrego a tu lista "
                })
            },
            removeLovedItem: (id:string)=>{
                set({
                    lovedItems:[...get().lovedItems.filter((item)=>item.id !==id)]
                })
                toast({
                    title:"El Auto se elimino de tu lista"
                })

            }
        }),
        {
            name:"loved-products-storage",
            storage: createJSONStorage(()=> localStorage)
        }
    )
    //fin de constante UseLovedAuts
)