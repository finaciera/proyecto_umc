import React from 'react'
import { ListLoveAutos } from './Components/ListLoveAutos'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default function pageLoverCars() {
  const {userId}=auth()
  if (!userId){
    return redirect("/");
  }
  return (
    <div>
      <h1 className='text-center text-2xl'  > 
        AUTOS QUE ME GUSTAN!! 
      </h1>
      <ListLoveAutos/>
    </div>
  )
}
