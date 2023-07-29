import HamburgerButton from './hamburger-button'
import NavigationBrand from './navigation-brand'
import NavigationList from './navigation-list'

function DesktopNavigation() {
  return (
    <div className="container py-4 max-md:bg-white md:py-12">
      <nav className="flex flex-wrap items-center justify-between">
        <NavigationBrand />
        <NavigationList />
        <HamburgerButton />
      </nav>
    </div>
  )
}
export default DesktopNavigation
