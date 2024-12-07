import React from 'react'

import { Sheet as ShradcnSheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

type Props = {
  trigger: React.ReactNode
  children: React.ReactNode
  className?: string,
  side: "left" | "right"
}

const Sheet = ({ trigger, children, className, side }: Props) => {
  return (
    <ShradcnSheet>
      <SheetTrigger className={className}>{trigger}</SheetTrigger>
      <SheetContent side={side} className='p-0 w-[250px]'>{children}</SheetContent>
    </ShradcnSheet>
  )
}

export default Sheet