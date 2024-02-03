import Heading2 from "@/components/ComponentHeading";
import SectionBox from "./sectionBox";
import Image from 'next/image'
import { ProjectInterface } from "@/service/client";

type Props = {
  headingText: string;
  projectList?: ProjectInterface[];
}

export default function Projects({headingText, projectList}:Props){
  console.log(projectList);
  return (
    <SectionBox>
      {projectList ? 
        <>
          <div className='grid grid-cols-1 gap-8'>
          <Heading2
            headingText={headingText}
            textAlign='text-center'
          />
          {projectList.map((project, index) =>
            <div key={project.id} className='grid grid-cols-5 gap-4'>
              <div className='col-span-2'>
                <p>{index++} / {project.title.toLocaleUpperCase()}</p>
                <p>{project.techStack}</p>
                <p>{`${project.description.substring(0, 300)} [...]`}</p>
                <a target="_blank" href={project.linkGitHub} rel="noopener noreferrer">
                  <p>GitHub Repo</p>
                </a>
                {project.linkLiveSite &&
                  <a target="_blank" href={project.linkLiveSite} rel="noopener noreferrer">
                    <p>Live Site</p>
                  </a>
                }
              </div>
              <div className='col-span-3'>
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
          </div>
        </> :
        <h1>Loading...</h1>
      }
    </SectionBox>
  )
}