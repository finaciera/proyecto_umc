import { Reveal } from "@/components/shared/Reveal";
import Image from "next/image";
export function FirstBlock() {
  return (
    <div className="grid lg:grid-cols-2 lg:pix-0 lg:py-24 items-center">
      <Reveal className="p-6 lg:pl-40"position="button">
            <h1 className="text-4xl lg:text-center lg:text-7xl font-bold">
              Financiera
              <span className="block">
                <h2 className=" lg:text-center lg:text-9xl font-bold text-blue-600 ">
                  {" "}
                  Tu Auto!!
                </h2>
              </span>
            </h1>
            <div className="flex  items-center justify-center">
              <p className="text-lg mt-2 lg:mt-5 lg:text-xl max-w-sm ">
                ¡Descubre el auto que siempre has querido! Nuestra selección de
                seminuevos se actualiza constantemente. ¡No esperes más para
                encontrar el tuyo!
              </p>
            </div>
      </Reveal>
      <Reveal className=" justify-end"position="rigth" delay={2} >
        <Image
          width={800}
          height={800}
          priority
          src={"/image/cars/mujer_auto.avif"}
          alt="autos"
        />
      </Reveal>
    </div>
  );
}
