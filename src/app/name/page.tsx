"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
const Page = () => {
  const { push } = useRouter();
  const [name, setName] = useState<String>("");
  const [loading, setloading] = useState<boolean>(false);
  return (
    <div className='grid place-items-center h-screen w-full'>
        <div className='flex'>
            <form onSubmit={(e) => {
                e.preventDefault();
                setloading(true)
                push(`/name/${name}`)
            }} className='form flex gap-3'>
                <Input
                    name='name'
                    placeholder='Enter your name'
                    onChange={(e) => setName(e.target.value)}
                    value={name as any}
                />
                <Button disabled={loading}  type='submit'>Predict</Button>
            </form>
        </div>
    </div>
  )
}

export default Page