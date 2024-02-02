import Heading2 from "@/components/ComponentHeading";
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
      <div className='grid grid-cols-5 gap-4'>
        <div className='flex justify-start items-center col-span-2'>
          <Image
            src={image} 
            alt='ariel view of keyboard of Macbook with empty white space'
            width={400}
            height={400}
            className='object-cover rounded-lg shadow-2xl'
          />
        </div>
        <div className='pl-20 col-span-3'>
          <Heading2
            headingText={headingText}
            textAlign='text-start'
          />
          <p className='pt-8'>{aboutMe}</p>
        </div>
      </div>
    </SectionBox>
  )
}