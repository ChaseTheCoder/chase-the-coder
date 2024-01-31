import SectionBox from "./sectionBox"
import Heading2 from '../../components/ComponentHeading';

type Props = {
  headingText: string;
}

export default function TechIUseOften({headingText}: Props){
  return (
    <SectionBox>
      <Heading2
        headingText={headingText}
        textAlign='text-center'
      />
    </SectionBox>
  )
}