import { Autos } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
export type FormEditAutosProps={
        autosData: Autos;
        setOpenDialog: Dispatch<SetStateAction<boolean>>;
};