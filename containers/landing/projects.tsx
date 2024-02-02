import Heading2 from "@/components/ComponentHeading";
import SectionBox from "./sectionBox";
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
          <Heading2
            headingText={headingText}
            textAlign='text-center'
          />
          {projectList.map((project) => 
            <p key={project.id}>{project.title}</p>
          )}
        </> :
        <h1>Loading...</h1>
      }
    </SectionBox>
  )
}