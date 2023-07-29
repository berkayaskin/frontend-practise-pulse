import NavigationView from './navigation-view'

function MobileNavigation() {
  return (
    <NavigationView
      className="absolute bottom-0 left-0 top-[82px] z-50 flex w-full flex-col bg-green-100 p-6 md:hidden"
      mobile
    />
  )
}
export default MobileNavigation
