import SectionBox from "./sectionBox"
import Heading2 from '../../components/Heading2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement } from "react";
import { faCss3Alt, faHtml5, faReact, faJs, faNode, faGithub, faJenkins, faJava, faPython } from "@fortawesome/free-brands-svg-icons";
import { faDiagramProject, faUniversalAccess } from "@fortawesome/free-solid-svg-icons";

type IconProps = {
  techIcon: any
  techText: string
}

type Props = {
  headingText: string;
}

const techList = [
  {
    techIcon: faHtml5,
    techText: 'HTML'
  },
  {
    techIcon: faCss3Alt,
    techText: 'CSS'
  },
  {
    techIcon: faReact,
    techText: 'React.js'
  },
  {
    techIcon: faJs,
    techText: 'JavaScript'
  },
  {
    techIcon: faDiagramProject,
    techText: 'GraphQL'
  },
  {
    techIcon: faJava,
    techText: 'Java'
  },
  {
    techIcon: faPython,
    techText: 'Python'
  },
  {
    techIcon: faNode,
    techText: 'Node.js'
  },
  {
    techIcon: faUniversalAccess,
    techText: 'Web Accessibility'
  },
  {
    techIcon: faGithub,
    techText: 'GitHub'
  },
  {
    techIcon: faJenkins,
    techText: 'Jenkins'
  },
]

export function TechIcon({techIcon, techText}: IconProps): ReactElement {
  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <FontAwesomeIcon icon={techIcon} size='4x' className='text-green-600' aria-hidden='true' />
      <p className='text-small'>{techText}</p>
    </div>
  )
}

export default function TechIUseOften({headingText}: Props){
  return (
    <SectionBox>
      <div className='grid grid-cols-1 gap-y-6'>
        <Heading2
          headingText={headingText}
          textAlign='text-center'
        />
        <div className='flex flex-wrap justify-between gap-3'>
            {techList.map((tech, index) => 
              <div key={`${index}-tech-icon`} >
                <TechIcon
                  techIcon={tech.techIcon}
                  techText={tech.techText}
                />
              </div>
            )}
        </div>
      </div>
    </SectionBox>
  )
}