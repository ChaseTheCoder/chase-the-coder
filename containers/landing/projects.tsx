import Heading2 from "@/components/Heading2";
import SectionBox from "./sectionBox";
import Image from 'next/image'
import { ProjectInterface } from "@/service/client";
import Link from "next/link";

type Props = {
  headingText: string;
  projectList?: ProjectInterface[];
}

export default function Projects({headingText, projectList}:Props){
  console.log(projectList);
  return (
    <SectionBox>
      {projectList ?
        <div className='grid grid-cols-1 gap-12 md:gap-8' id='projects'>
          <Heading2
            headingText={headingText}
            textAlign='text-center'
          />
          {projectList.map((project, index) =>
            <div key={project.id} className='grid grid-cols-5 gap-y-4 gap-x-8'>
              <div className='cols-1 col-span-5 md:col-span-2'>
                <h3 className='font-bold mb-4'>{++index} / {project.title.toLocaleUpperCase()}</h3>
                <p className='my-3'>{project.techStack}</p>
                <p className='text-justify my-3'>{`${project.description.substring(0, 300)} [...]`}</p>
                <div className='grid grid-cols-3 my-3 underline'>
                  <Link href={'/blog'}>
                    <p>Read More</p>
                  </Link>
                  <a target="_blank" href={project.linkGitHub} rel="noopener noreferrer">
                    <p>GitHub Repo ↗︎</p>
                  </a>
                  {project.linkLiveSite &&
                    <a target="_blank" href={project.linkLiveSite} rel="noopener noreferrer">
                      <p>Live Site ↗︎</p>
                    </a>
                  }
                </div>
              </div>
              <div className='cols-1 col-span-5 md:col-span-3 flex order-first md:order-last'>
                <Image
                  src={project.projectImage.url} 
                  alt='ariel view of keyboard of Macbook with empty white space'
                  width={700}
                  height={450}
                  className='object-cover rounded-lg shadow-2xl'
                />
              </div>
            </div>
          )}
        </div> :
        <h1>Loading...</h1>
      }
    </SectionBox>
  )
}