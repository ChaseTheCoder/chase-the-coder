import React from "react"

type Props = {
  children: string | JSX.Element | JSX.Element[];
}

export default function SectionBox({children}: Props) {
  return (
    <div className='py-8'>
      {children}
    </div>
  )
}