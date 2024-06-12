import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='grid h-screen w-full place-items-center'>
      <div className='flex-col justify-center gap-2'>
      <div className=''>
      
      <h2 className='font-bold text-3xl'>Hi Welcome To <u className='text-sky-500'>Prediction</u></h2>
      </div>
      <div className='flex justify-center'>
      <Button className='mt-4'>
      <Link href={"/name"}>
        Pridict Now.
      </Link>
      </Button>
      </div>
      </div>
    </div>
  )
}

export default page