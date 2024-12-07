'use client'
import { usePath } from '@/hooks/use-path'
import { LogoSmall } from '@/svgs/logo-small'
import React from 'react'
import Items from './items'
import { HelpCircle, MessageSquareIcon } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import ClerkAuthState from '../clerk-auth-state'
import { SubscriptionPlan } from '../subscription-plan'
import UpgradeCard from './upgrade'

type Props = {
  slug: string
}

const Sidebar = ({ slug }: Props) => {
  const { page } = usePath();
  return (
    <div className="w-[250px] border-2 radial fixed left-0 lg:inline-block border-[#545454] bg-gradient-to-b from-[#7688DD] via-[#171717] to-[#7688DD] hidden bottom-0 top-0 m-3 rounded-3xl oveflow-hidden">
      <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#0e0e0e] bg-opacity-90 bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl rounded-[22px]">
        <div className="flex gap-x-2 items-center p-5 justify-center relative">
          <LogoSmall />
          <MessageSquareIcon className='text-[#AABBFF] fill-current absolute top-[22px] right-24' />
        </div>
        <div className='flex flex-col py-3'>
          <Items page={page} slug={slug} />
        </div>
        <div className="px-16">
          <Separator 
            orientation="horizontal"
            className='bg-[#333336]'
          />
        </div>
        <div className="px-3 flex flex-col gap-y-5">
          <div className="flex gap-x-2">
            <ClerkAuthState />
            <div className="text-[#9B9CA0]">Profile</div>
          </div>
          <div className='flex gap-x-2'>
            <HelpCircle/>
            <div className="text-[#9B9CA0]">Help</div>
          </div>
        </div>
        <SubscriptionPlan type='FREE'>
          <div className='flex-1 flex flex-col justify-end'>
            <UpgradeCard />
          </div>
        </SubscriptionPlan>
      </div>
    </div>
  )
}

export default Sidebar