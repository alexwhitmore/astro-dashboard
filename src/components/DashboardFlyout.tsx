import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { cn } from '@/lib/utils'
import { Icons } from './Icons'
import { navigation, teams } from '@/config/dashboard'
import type { DashboardFlyoutProps } from '@/types'

export function DashboardFlyout({ sidebarOpen = false, setSidebarOpen, path }: DashboardFlyoutProps) {
  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog as='div' className='relative z-50 lg:hidden' onClose={setSidebarOpen}>
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-background/80' />
        </Transition.Child>

        <div className='fixed inset-0 flex'>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'>
            <Dialog.Panel className='relative mr-16 flex w-full max-w-xs flex-1'>
              <Transition.Child
                as={Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'>
                <div className='absolute left-full top-0 flex w-16 justify-center pt-5'>
                  <button type='button' className='-m-2.5 p-2.5' onClick={() => setSidebarOpen(false)}>
                    <span className='sr-only'>Close sidebar</span>
                    <Icons.X className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>
              </Transition.Child>

              <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-background px-6 pb-4 border-r'>
                <div className='flex h-16 shrink-0 items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='30'
                    height='30'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-8 w-auto'>
                    <path d='M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z'></path>
                  </svg>
                </div>
                <nav className='flex flex-1 flex-col'>
                  <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                    <li>
                      <ul role='list' className='-mx-2 space-y-1'>
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={cn(
                                path === item.href ? 'bg-secondary' : 'hover:text-foreground hover:bg-secondary',
                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6'
                              )}>
                              <item.icon
                                className={cn(
                                  path === item.href
                                    ? 'text-primary'
                                    : 'text-muted-foreground group-hover:text-primary',
                                  'h-6 w-6 shrink-0'
                                )}
                                aria-hidden='true'
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <div className='text-xs font-semibold leading-6'>Your teams</div>
                      <ul role='list' className='-mx-2 mt-2 space-y-1'>
                        {teams.map((team) => (
                          <li key={team.name}>
                            <a
                              href={team.href}
                              className={cn(
                                team.current ? 'bg-secondary text-primary' : 'hover:bg-secondary',
                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6'
                              )}>
                              <span
                                className={cn(
                                  team.current
                                    ? 'bg-gray-50 text-primary'
                                    : 'text-muted-foreground border-border group-hover:border-primary',
                                  'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium'
                                )}>
                                {team.initial}
                              </span>
                              <span className='truncate'>{team.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className='mt-auto'>
                      <a
                        href='/dashboard/settings'
                        className={cn(
                          path === '/dashboard/settings' ? 'bg-secondary' : 'hover:bg-secondary',
                          'group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                        )}>
                        <Icons.Settings
                          className={cn(
                            path === '/dashboard/settings' ? 'text-primary' : 'text-muted-foreground',
                            'h-6 w-6 shrink-0 group-hover:text-primary'
                          )}
                        />
                        Settings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
