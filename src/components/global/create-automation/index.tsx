import { Button } from '@/components/ui/button'
import { Activity } from 'lucide-react'
import React from 'react'

type Props = {}

const CreateAutomation = (props: Props) => {
  return (
    <Button className='lg:px-10 py-6 bg-gradient-to-r from-[#3352CC] to-[#1C2D70] hover:opacity-80 text-white rounded-full font-medium'>
      <Activity />
      <p className='lg:inline hidden'>Create Automation</p>
    </Button>
  )
}

export default CreateAutomation