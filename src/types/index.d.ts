export type DashboardFlyoutProps = {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  path: string
}

export type NavigationItem = {
  name: string
  href: string
  current: boolean
  icon: any
}

export type Team = {
  id: number
  name: string
  href: string
  initial: string
  current: boolean
}
