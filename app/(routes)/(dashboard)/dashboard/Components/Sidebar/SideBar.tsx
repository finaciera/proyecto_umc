
import { LogoDashboard } from "../LogoDashboard"
import {SideBarRoutes} from "../SidebarRoutes"
export function SideBar() {
  return (
    <div className="h-screen">
        <div className="flex flex-col h-full border-r" >
            <LogoDashboard/>
            <SideBarRoutes/>
         </div>
    </div>
  )
}
