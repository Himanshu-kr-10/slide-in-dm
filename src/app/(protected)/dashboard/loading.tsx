import { Loader2 } from 'lucide-react'
import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <Loader2 className='animate-spin size-6' />
    </div>
  )
}

export default Loading