type Props = {
  headingText: string;
  textAlign: 'text-left' | 'text-center' | 'text-right' | 'text-justify' | 'text-start' | 'text-end';
}

export default function Heading2({headingText, textAlign}: Props){
  return (
    <h2 className={`text-5xl ${textAlign}`}>
      {headingText}
    </h2>
  )
}