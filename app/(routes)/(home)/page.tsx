import { Navbar } from "@/components/shared/NavBar";
import { FirstBlock } from "./components/FirstBlock";
import { SliderBrans } from "./components/Sliderbrans";
import { Features } from "./components/Features";
import {OurFleet} from "./components/OurFleet";

//pagina inicio
export default function Home() {
  return (
    <div>
      <Navbar/>
      <FirstBlock/>
      <SliderBrans/>
      <Features/>
      <OurFleet/>
      
    </div>
    
  );
}
