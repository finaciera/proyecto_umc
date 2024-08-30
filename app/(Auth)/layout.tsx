import React from 'react'
import Image from 'next/image'

export default function Authlayout({children}:{children: React.ReactNode} ) {
  return (
    <div className='grid lg:grid-cols-2 h-full items-center justify-center' >
        <div className='flex items-center justify-center' >{children}</div>
        <div className='hidden lg:flex
         lg:bg-slate-100 h-full 
         items-center justify-center lg:flex-col  '> 
        <Image src="./vercel.svg" alt="logo" width={150} height={150} />
         <h1 className='te'  >TuAuto</h1>
         </div>
        
    </div>
  )
}
