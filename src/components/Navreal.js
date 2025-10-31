
//

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure
      as="nav"
      className="relative bg-blue-500 w-full after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* MOBILE MENU BUTTON */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          {/* LOGO + NAV ITEMS */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <p className="text-white font-semibold">Tail POS</p>
            </div>

            {/* 🧭 NAVIGATION SECTION */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4 items-center">
              <a href="/" className="rounded-md px-3 py-2 text-sm font-medium bg-gray-950/50 text-white">
                POS
              </a>

              <a href="/insights" className="rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-white/5 hover:text-white">
                Reports
              </a>

              {/* STOCK MENU */}
              <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-white/5 hover:text-white">
                  Stock
                  <ChevronDownIcon aria-hidden="true" className="ml-1 h-4 w-4 text-gray-300" />
                </MenuButton>
                <MenuItems className="absolute left-0 z-10 mt-2 w-44 origin-top-left rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10">
                  {['Add Product', 'Stock Levels', 'Categories', 'Adjustments'].map(item => (
                    <MenuItem key={item}>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white">
                        {item}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>

              {/* CUSTOMERS MENU */}
              <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-white/5 hover:text-white">
                  Customers
                  <ChevronDownIcon aria-hidden="true" className="ml-1 h-4 w-4 text-gray-300" />
                </MenuButton>
                <MenuItems className="absolute left-0 z-10 mt-2 w-44 origin-top-left rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10">
                  {['Add Customer', 'Customer List', 'Loyalty Points'].map(item => (
                    <MenuItem key={item}>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white">
                        {item}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>

              {/* SUPPLIERS MENU */}
              <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-white/5 hover:text-white">
                  Suppliers
                  <ChevronDownIcon aria-hidden="true" className="ml-1 h-4 w-4 text-gray-300" />
                </MenuButton>
                <MenuItems className="absolute left-0 z-10 mt-2 w-44 origin-top-left rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10">
                  {['Enter Bills','Pay Bills','Purchase Orders', 'Supplier List'].map(item => (
                    <MenuItem key={item}>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white">
                        {item}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>

              {/* REPORTS MENU */}
              <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-white/5 hover:text-white">
                  Reports
                  <ChevronDownIcon aria-hidden="true" className="ml-1 h-4 w-4 text-gray-300" />
                </MenuButton>
                <MenuItems className="absolute left-0 z-10 mt-2 w-44 origin-top-left rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10">
                  {['Sales Report', 'Expenses', 'Daily Summary', 'Profit & Loss'].map(item => (
                    <MenuItem key={item}>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white">
                        {item}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>

              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-white/5 hover:text-white">
                Account
              </a>

              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-white/5 hover:text-white">
                Settings
              </a>
            </div>
          </div>

          {/* RIGHT SIDE ICONS */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full p-1 text-gray-200 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            >
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* PROFILE MENU */}
            <Menu as="div" className="relative ml-3">
              <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10"
              >
                {['Your profile', 'Settings', 'Sign out'].map((item) => (
                  <MenuItem key={item}>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white">
                      {item}
                    </a>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  )
}