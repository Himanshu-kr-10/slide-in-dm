"use client"
import React from 'react'
import { HelpCircle, Menu, MessageSquareIcon } from 'lucide-react';

import { usePath } from '@/hooks/use-path';

import Sheet from '../sheet';
import Items from '../sidebar/items';
import UpgradeCard from '../sidebar/upgrade';

import ClerkAuthState from '../clerk-auth-state';
import { PAGE_BOARD_CRUMBS } from '@/constants/pages';
import { SubscriptionPlan } from '../subscription-plan';
import { Separator } from '@/components/ui/separator';
import { LogoSmall } from '@/svgs/logo-small';
import CreateAutomation from '../create-automation';
import Search from '../search';
import { Notifications } from '../notifications';
import MainBreadCrumb from '../main-bread-crumb';

type Props = {
  slug: string
}

const Navbar = ({ slug }: Props) => {
  const { page } = usePath();
  const currentPage = PAGE_BOARD_CRUMBS.includes(page) || page === slug;
  return currentPage && (
    <div className='flex flex-col'>
      <div className="flex gap-x-3 lg:gap-x-5 justify-end">
        <span className='lg:hidden flex items-center flex-1 gap-x-2'>
          <Sheet 
            trigger={<Menu />}
            className='lg:hidden max-w-[250px]'
            side='left'
          >
            <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#0e0e0e] bg-opacity-90 bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl rounded-3xl">
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
          </Sheet>
        </span>
        <Search />
        <CreateAutomation />
        <Notifications />
      </div>
      <MainBreadCrumb 
        page={page === slug ? "home" : page}
        slug={slug}
      />
    </div>
  )
}

export default Navbar