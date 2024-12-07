import { Activity, Home, RocketIcon, Settings } from 'lucide-react'
import { v4 as uuid } from 'uuid'

type FieldProps = {
  label: string,
  id: string
}

type SideBarProps = {
  icon: React.ReactNode
} & FieldProps

export const SIDEBAR_MENU: SideBarProps[] = [
  {
    id: uuid(),
    label: 'home',
    icon: <Home />
  },
  {
    id: uuid(),
    label: 'automations',
    icon: <Activity />
  },
  {
    id: uuid(),
    label: 'integrations',
    icon: <RocketIcon />
  },
  {
    id: uuid(),
    label: 'settings',
    icon: <Settings />
  }
]