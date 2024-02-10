import React from 'react';
import Image from 'next/image'

type Props = {
  title1: string;
  title2: string;
  subtitle: string;
  heroImage: string;
}

const consolLogMessage = `
( ⸝⸝•ᴗ•⸝⸝ )੭⁾⁾

Umm. Hi.
`

export default function Hero({title1, title2, subtitle, heroImage}: Props) {
  console.log(consolLogMessage);
  return (
    <div className='h-[calc(100vh-45px)]'>
      <div className='grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-0 lg:gap-4 h-full'>
        <div className='grid-rows-1 lg:h-full'>
          <div className='h-full relative z-0'>
            <div
              className='rounded-full bg-green-600 shadow-2xl w-48 h-48 md:w-64 md:h-64 -z-10 absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-2/3'
            />
            <div className='absolute top-1/2 -translate-y-1/2 -z-10'>
              <h1 className='text-5xl md:text-6xl'>
                {title1}<br/>
                {title2}<br/>
                <span role='subtitle' className='text-4xl lg:text-5xl mt-4'>{subtitle}</span>
              </h1>
            </div>
          </div>
        </div>
        <div className='grid-rows-1 flex lg:h-full justify-center lg:justify-end items-center'>
          <Image
            src={heroImage} 
            alt='ariel view of keyboard of Macbook with empty white space'
            width={450}
            height={450}
            className='object-cover rounded-lg shadow-2xl w-auto h-5/6'
            priority
          />
        </div>
      </div>
    </div>
  )
}