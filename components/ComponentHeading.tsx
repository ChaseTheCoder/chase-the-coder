type Props = {
  headingText: string;
  textAlign: string;
}

export default function Heading2({headingText, textAlign}: Props){
  return (
    <h2 className={`text-5xl ${textAlign}`}>
      {headingText}
    </h2>
  )
}