
import { Reveal } from "@/components/shared/Reveal"
import {DataFutures} from "./Features.data"
import { Icon } from "lucide-react"
export function Features() {
  return (
      <div className="max-w-6xl mx-auto p-6 lg:py-20">
        <div  className="grid grid-cols-2 lg:grid-cols-2 gap-x-5">
        <h3 className="text-2xl lg:text-6xl font-bold justify-center" >
        ¿Por qué comprar 
        con nosotros? </h3>
        <p className="max-w-lg mt-5 lg:mt-10 lg:mb-16 text-xl" >En nuestra agencia, encontrarás la combinación perfecta entre calidad y accesibilidad. Ofrecemos una amplia variedad de vehículos seminuevos. Además, contamos con planes de financiamiento flexibles y personalizados, diseñados para adaptarse a tus necesidades y brindarte la tranquilidad de conducir tu auto lo antes posible.</p>
       
        
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5"  >
          {DataFutures.map(
            ({icon:Icon, id, text, title, bg, delay})=>(
              <Reveal
              key={id}
              className="p-6 rounded-xl hover:shadow-md  shadow-amber-500 flex flex-col items-center"
              position="rigth"
              delay={delay}
              >
                <div className={`rounded-full ${bg} w-fit p-4 md-4 flex justify-center`}  >
                  <Icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-center">{title}</h3>
                <h5 className=" text-center  ">{text} </h5>
                

              </Reveal>
            ))}

        </div>
      </div>
  )
}
