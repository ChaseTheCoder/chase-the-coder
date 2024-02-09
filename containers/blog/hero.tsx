import { ImageObject } from '@/service/client';
import Image from 'next/image'

type Props = {
  title: string;
  blogImage: ImageObject;
}

export default function BlogHero({title, blogImage}: Props) {
  return (
    <div className='h-[calc(100vh-45px)]'>
      <div className='grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-0 lg:gap-4 h-full'>
        <div className='grid-rows-1 flex items-center'>
          <div
            className='rounded-full bg-green-600 shadow-2xl w-48 h-48 md:w-64 md:h-64'
          />
          <h1 className='text-5xl text-green-600 md:text-6xl -m-7 md:-m-9 first-letter:text-white'>
            {title}<br/>
          </h1>
        </div>
        <div className='grid-rows-1 flex lg:h-full justify-center lg:justify-end items-center'>
          <Image
            src={blogImage.url} 
            alt={blogImage.altText}
            width={450}
            height={450}
            className='object-cover rounded-lg shadow-2xl w-auto h-5/6'
          />
        </div>
      </div>
    </div>
  )
}