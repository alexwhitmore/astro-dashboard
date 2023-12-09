import { Icons } from '@/components/Icons'

export const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Icons.Home },
  { name: 'Team', href: '/dashboard/team', icon: Icons.Users },
  { name: 'Projects', href: '/dashboard/projects', icon: Icons.Folder },
  { name: 'Calendar', href: '/dashboard/calendar', icon: Icons.Calendar },
  { name: 'Documents', href: '/dashboard/documents', icon: Icons.Document },
  { name: 'Reports', href: '/dashboard/reports', icon: Icons.PieChart },
]

export const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
