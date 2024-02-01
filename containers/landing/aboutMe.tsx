import Heading2 from "@/components/ComponentHeading";
import SectionBox from "./sectionBox";

type Props = {
  headingText: string;
  aboutMe: string;
}

export default function AboutMe({headingText, aboutMe}:Props){
  return (
    <SectionBox>
      <Heading2
        headingText={headingText}
        textAlign='text-center'
      />
      <p>{aboutMe}</p>
    </SectionBox>
  )
}