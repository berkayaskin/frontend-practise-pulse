'use client'
import { toggleMobileNav } from '@/lib/redux/features/mobile-navigation-slice'
import { useAppDispatch } from '@/lib/redux/hooks/useAppDispatch'

function HamburgerButton() {
  const dispatch = useAppDispatch()
  return (
    <div className="block md:hidden">
      <button
        className="flex items-center text-green-400 hover:text-green-300"
        onClick={() => dispatch(toggleMobileNav())}
      >
        <svg className="h-8 w-8 fill-current" viewBox="0 0 35 22">
          <title>Menu - Open</title>
          <path d="M0 0h35v2H0zM0 10h35v2H0zM0 20h35v2H0z" />
        </svg>
        <svg
          className="hidden h-6 w-6 fill-current"
          viewBox="0 0 27 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu - Close</title>
          <path d="M1.833.918l24.749 24.749-1.414 1.414L.418 2.332z"></path>
          <path d="M25.167.919l1.414 1.414L1.833 27.08.419 25.667z"></path>
        </svg>
      </button>
    </div>
  )
}
export default HamburgerButton
