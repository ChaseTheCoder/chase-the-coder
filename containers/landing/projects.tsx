import Heading2 from "@/components/ComponentHeading";
import SectionBox from "./sectionBox";

type Props = {
  headingText: string;
}

export default function Projects({headingText}:Props){
  return (
    <SectionBox>
      <Heading2
        headingText={headingText}
        textAlign='text-center'
      />
    </SectionBox>
  )
}