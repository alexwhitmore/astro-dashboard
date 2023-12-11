import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Icons } from './Icons'
import { navigation } from '@/config/navigation'

export function LandingFlyout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className='flex lg:hidden'>
        <button
          type='button'
          className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5'
          onClick={() => setMobileMenuOpen(true)}>
          <span className='sr-only'>Open main menu</span>
          <Icons.Menu className='h-6 w-6' aria-hidden='true' />
        </button>
      </div>

      <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-50'></div>
        <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <Icons.Logo aria-hidden='true' />
            </a>
            <button type='button' className='-m-2.5 rounded-md p-2.5' onClick={() => setMobileMenuOpen(false)}>
              <span className='sr-only'>Close menu</span>
              <Icons.X className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-border'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base leading-7 hover:bg-secondary'>
                    {item.name}
                  </a>
                ))}
              </div>
              <div className='py-6'>
                <a href='#' className='-mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 hover:bg-secondary'>
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
