
/*import React from "react";

export type CalendarSelectorProps= 
React.HTMLAttributes<HTMLDivElement>&{
    setDateSelected: React.Dispatch <
    React.SetStateAction <{diaFecha:Date | undefined}> >;
    claseNombre?: string;
    setHora?: string | null;
}*/

import React from "react";

export type CalendarSelectorProps = 
  React.HTMLAttributes<HTMLDivElement> & {
    setDateSelected: React.Dispatch<React.SetStateAction<{ diaFecha: Date | undefined; setHora: string }>>;
    claseNombre?: string;
    setHora: React.Dispatch<React.SetStateAction<string>>; // Cambiado a función de estado
};
