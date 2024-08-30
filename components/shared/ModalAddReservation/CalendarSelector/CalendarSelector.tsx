import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { CalendarSelectorProps } from "./Calendarselector.types";

//seleccionamos fecha y hora de la cita
export function CalendarSelector(props: CalendarSelectorProps) {
  const { setDateSelected, claseNombre, setHora } = props;
  const [fecha, setDate] = React.useState<Date | undefined>(undefined);

  React.useEffect(() => {
    if (fecha) {
      setDateSelected((prev) => ({
        ...prev,
        diaFecha: fecha, // Actualiza para enviar la fecha seleccionada
      }));
    }
  }, [fecha, setDateSelected]);

  const handleTimeSelect = (time: string) => {
    setHora(time); // Asigna la hora seleccionada
    setDateSelected((prev) => ({
      ...prev,
      setHora: time, // Actualiza el estado con la hora seleccionada
    }));
  };

  return (
    <div className={cn("p-4 border rounded-lg", claseNombre)}>
      <div className="flex items-center space-x-4 rtl:space-x-reverse mb-3">
        <div className="flex items-center">
          <CalendarIcon className="w-5 h-5 text-gray-400 me-2" />
          <span className="text-gray-900 dark:text-white text-base font-medium">
            {fecha ? format(fecha, "dd.MM.yyyy") : "SELECIONA UNA FECHA:"}
          </span>
            
        </div>
      </div>
      <div className="pt-5 border-t border-gray-200 dark:border-gray-800 flex sm:flex-row flex-col sm:space-x-3 rtl:space-x-reverse text-center">
        <Calendar
          mode="single"
          selected={fecha}
          onSelect={setDate}
        
          className="rounded-md border"
        />

        <div className="sm:ms-7 sm:ps-5 sm:border-s border-gray-200 dark:border-gray-800 w-full sm:max-w-[15rem] mt-5 sm:mt-0">
          <h3 className="text-gray-900 dark:text-white text-base font-medium mb-3 text-center">
            {fecha ? format(fecha, "dd.MM.yyyy") : "SELECIONA UNA FECHA:"}
          </h3>
          <div className="grid w-full grid-cols-2 gap-2 mt-5">
            {[
              "10:00 AM",
              "10:30 AM",
              "11:00 AM",
              "11:30 AM",
              "12:00 PM",
              "12:30 PM",
              "01:00 PM",
              "01:30 PM",
              "02:00 PM",
              "02:30 PM",
              "03:00 PM",
              "03:30 PM",
              "04:00 PM",
              "04:30 PM",
            ].map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)} // Llamada a handleTimeSelect
                className="w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 dark:hover:text-white dark:border-blue-500 dark:peer-checked:border-blue-500 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500 dark:text-blue-500 dark:bg-gray-900 dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:peer-checked:bg-blue-500"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
