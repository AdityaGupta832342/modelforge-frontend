"use client";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useEffect } from 'react'

function errorPage({error}: {error: Error}) {
    useEffect(() =>{
        console.error(error)
    
    },[error])
  return (
    <div className="flex flex-col items-center  justify-center w-full h-full gap-4 ">
        <h1 className='text-destructive text-center text-2xl font-bold'>
            Something went wrong! <br />
            <span className='text-sm text-muted-foreground'>Please try again later.</span> <br />
            {error.message}

        </h1>
        <Button asChild>
            <Link href='/'>Go back to home</Link>
        </Button>
    </div>
  )
}

export default errorPage