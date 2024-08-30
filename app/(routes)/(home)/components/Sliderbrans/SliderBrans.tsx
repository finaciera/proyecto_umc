"use client"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Reveal } from "@/components/shared/Reveal"
import{dataBrans} from "./SliderBrans.data"

export function SliderBrans() {
  return (
   <Reveal position="button" className="flex grap-x-20  mt-5 mb-10 justify-center" >
    <Carousel className="max-w-xl w-full mx-auto" 
        plugins={[
          Autoplay({
            delay:4500,
          }),
        ]}>
          <CarouselContent>
            {dataBrans.map(({url})=>( 
              <CarouselItem key={url}
              className="basis-4/4 md:basis 2/2 lg:basis2/4">
                <Image 
                src={`/image/carousel/${url}`}
                alt="Brand"
                width={190}
                height={190}
                className="object-contain aspect-[3/2]"
                />
              
              </CarouselItem>
            ))}
          </CarouselContent>

    </Carousel>
   </Reveal>
  )
}
