import { Navbar } from '@/components/shared/NavBar'
import { Button } from '@/components/ui/button';
import  Link  from "next/link";
import React from 'react'

export default function 
orderConfirmationPges() {
  return (
    <div>
        <Navbar/>;
        <div className='p-6 mx-auto max-w-7xl'  >
            <div className=' justify-end text-center,flex flex-col items-center gap-4'  >
                <h1>Gracias por agendar con nosotros!!</h1>
                <p>Pornto os contactaremos contigo para hacer una cotizacion previa</p>
                <p>Puedes seguir viendo nuestros autos en el siguiente link</p>
                <Link href="/">
                <Button>
                    Volver a ver Los autos
                </Button>
                </Link>

            </div>
        </div>
    </div>
  )
}
