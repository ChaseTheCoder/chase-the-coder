import Image from 'next/image'
type Props = {
  title1: string;
  title2: string;
  heroImage: string;
}

export default function Hero({title1, title2, heroImage}: Props) {
  return (
    <>
      <h1>{title1}<br/>{title2}</h1>
      <Image
        src={heroImage} 
        alt={'ariel view of keyboard of Macbook with empty white space'}
        width={500}
        height={500}
      />
    </>
  )
}