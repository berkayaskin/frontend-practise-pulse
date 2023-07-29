import DesktopNavigation from './desktop-navigation'
import MobileNavigation from './mobile-navigation'

const Header = () => {
  return (
    <header className="max-md:border-b md:bg-pulse-green-100">
      <DesktopNavigation />
      <MobileNavigation />
    </header>
  )
}

export default Header
