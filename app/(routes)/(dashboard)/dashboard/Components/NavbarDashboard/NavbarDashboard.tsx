import {
    Sheet,
    SheetContent,
    
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { SideBarRoutes } from "../SidebarRoutes"
import { UserButton } from "@clerk/nextjs"

export function NavbarDashboard() {
  return(
    <nav className="flex justify-between items-center w-full 
    h-20 bordee-b px-20 gap-x-4 md:px-6 bg-background" >
        <div className="block xl:hidden" >
        <Sheet>
    <SheetTrigger className="flex items-center"  >
        <Menu/>
    </SheetTrigger>
    <SheetContent side={"left"}>
        <SideBarRoutes/>
    </SheetContent>
  </Sheet>
  </div>
  <div className="flex items-center justify-end w-full gap-x-2 " >
    <UserButton/>
  </div>
    </nav>
  )
}
