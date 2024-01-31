import React from 'react';
import Image from 'next/image'

type Props = {
  title1: string;
  title2: string;
  subtitle: string;
  heroImage: string;
}

export default function Hero({title1, title2, subtitle, heroImage}: Props) {
  return (
    <div className='h-[calc(100vh-76px)]'>
      <div className='grid grid-cols-2 gap-4 h-full'>
        <div className='h-full'>
          <div className='h-full relative'>
            <div
              className='rounded-full bg-green-600 shadow-2xl w-64 h-64 -z-10 absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-2/3'
            />
            <div className='absolute top-1/2 -translate-y-1/2'>
              <h1 className='text-6xl mb-4'>
                {title1}<br/>
                {title2}
              </h1>
              <p role='subtitle' className='text-5xl'>
                {subtitle}
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-end items-center'>
          <Image
            src={heroImage} 
            alt='ariel view of keyboard of Macbook with empty white space'
            width={450}
            height={450}
            className='object-cover rounded-lg shadow-2xl'
          />
        </div>
      </div>
    </div>
  )
}