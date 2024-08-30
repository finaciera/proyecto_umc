// use client
import Link  from "next/link";
import { SidebarItemProps } from "./SidebarItem.type";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { use } from "react";

export function SidebarItem( props: SidebarItemProps ) {

    const {item} =props;
    const {href, icon:Icon, label } =item;
    const pathname= usePathname();
    const activePath= pathname==href;
    

  return (
    <Link
    href={href}
    className={cn(
      'flex gap-x-2  mt-2 text-blue-900 text-sm items-center hover:bg-sky-300/20  p-2 rounded-lg cursor-pointer', activePath && "bg-gray-100" ) } >
        <Icon className="h-50 w-50 strokeWide={1}" />
        {label}
    
    </Link>
  );
}