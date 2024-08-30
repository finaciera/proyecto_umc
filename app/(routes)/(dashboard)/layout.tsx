
import { SideBar } from "./dashboard/Components/Sidebar";
import { NavbarDashboard } from "./dashboard/Components/NavbarDashboard";
export default function LayoutDashboard(
    {children,}:
    {children: React.ReactNode;}
) {
  return (
    <div className="flex h-full w-full" >
    <div className="hidden h-full w-80 xl:block xl:fixed lg:bg-white " >
        <SideBar/>
    </div> 
    <div className="h-full w-full xl:ml-80" >
      <NavbarDashboard/>
        <div className="p-6 h-max  lg:bg-slate-100 " >{children}   
        </div>
        
        </div>
    
    
</div>
  )
  
}
