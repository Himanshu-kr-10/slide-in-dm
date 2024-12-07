import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const PaymentButton = (props: Props) => {
  return (
    <Button 
    className='bg-gradient-to-br
      from-[#9685DB]
      via-[#9434E6]
      to-[#CC3BD4]
      text-white
      rounded-full
      font-bold
    '>
      Upgrade
    </Button>
  )
}

export default PaymentButton