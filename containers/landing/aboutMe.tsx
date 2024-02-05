import Heading2 from "@/components/Heading2";
import SectionBox from "./sectionBox";
import Image from 'next/image'

type Props = {
  headingText: string;
  aboutMe: string;
  image: string;
}

export default function AboutMe({headingText, aboutMe, image}:Props){
  return (
    <SectionBox>
      <div className='grid grid-cols-5 gap-4' id='about-me'>
        <div className='flex justify-center md:justify-start items-center col-span-5 md:col-span-2'>
          <Image
            src={image} 
            alt='ariel view of keyboard of Macbook with empty white space'
            width={400}
            height={400}
            className='object-cover rounded-lg shadow-2xl'
          />
        </div>
        <div className='md:pl-20 col-span-5 md:col-span-3'>
          <Heading2
            headingText={headingText}
            textAlign='text-center md:text-start'
          />
          <p className='pt-8 text-justify'>{aboutMe}</p>
        </div>
      </div>
    </SectionBox>
  )
}