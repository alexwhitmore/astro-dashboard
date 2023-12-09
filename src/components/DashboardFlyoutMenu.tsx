import { useState } from 'react'
import { Icons } from './Icons'
import { DashboardMenu } from './DashboardMenu'
import { DashboardFlyout } from './DashboardFlyout'

export function DashboardFlyoutMenu({ path }: { path: string }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <DashboardFlyout path={path} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className='lg:pl-72'>
        <div className='sticky top-0 z-40 lg:mx-auto lg:max-w-7xl lg:px-8'>
          <div className='flex h-16 items-center gap-x-4 border-b bg-background px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none'>
            <button type='button' className='-m-2.5 p-2.5 lg:hidden' onClick={() => setSidebarOpen(true)}>
              <span className='sr-only'>Open sidebar</span>
              <Icons.Menu className='h-6 w-6' aria-hidden='true' />
            </button>

            {/* Separator */}
            <div className='h-6 w-px bg-border lg:hidden' aria-hidden='true' />

            <div className='flex flex-1 gap-x-4 self-stretch lg:gap-x-6'>
              <form className='relative flex flex-1' action='#' method='GET'>
                <label htmlFor='search-field' className='sr-only'>
                  Search
                </label>
                <Icons.Search
                  className='pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-muted-foreground'
                  aria-hidden='true'
                />
                <input
                  id='search-field'
                  className='block h-full w-full border-0 py-0 pl-8 pr-0 bg-background placeholder:text-muted-foreground focus:ring-0 sm:text-sm'
                  placeholder='Search'
                  type='search'
                  name='search'
                />
              </form>
              <div className='flex items-center gap-x-4 lg:gap-x-6'>
                <button type='button' className='-m-2.5 p-2.5 text-muted-foreground hover:text-muted-foreground/90'>
                  <span className='sr-only'>View notifications</span>
                  <Icons.Bell className='h-6 w-6' aria-hidden='true' />
                </button>

                {/* Separator */}
                <div className='hidden lg:block lg:h-6 lg:w-px lg:bg-border' aria-hidden='true' />

                <DashboardMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
