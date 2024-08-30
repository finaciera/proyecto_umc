
import{Calendar, CalendarClockIcon, Car, Heart, HeartPulse, ListCheckIcon, LucideTimer, TimerOffIcon} from "lucide-react";
export const dataGeneralSidebar =[
    {
        icon:Car,
        label: "Autos" ,
        href: "/dashboard",
    },
    {
        icon:Calendar,
        label: "Citas" ,
        href: "/reserves",
    },
    {
        icon:Heart,
        label: "Me gusta" ,
        href: "/like-car",
    },
]
export const dataAdminSidebar =[
    {
        icon:ListCheckIcon ,
        label: "Agregar Auto" ,
        href: "/dashboard/admin/cars-manager",
    },
    {
        icon: CalendarClockIcon ,
        label: "Citas" ,
        href:"/dashboard/admin/reserves-admin"// "/reserves-admin",
    },
    {
        icon: HeartPulse,
        label: "Preferidos" ,
        href: "/like-car",
    },
]