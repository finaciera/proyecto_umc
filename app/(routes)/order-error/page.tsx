import { Navbar } from '@/components/shared/NavBar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

import React from 'react'

export default function pageOrderError() {
  return (
    <div>
        <Navbar/>
        <div className='flex flex-col items-center justify-center gap-4' >
            <h1 className='text-2xl' >OPS!! Parece que hubo un problema</h1>
            <Link href="/" >
            <Button>
                Volver a ver los vehiculos
            </Button>
            </Link>
        </div>
    </div>
  )
}
