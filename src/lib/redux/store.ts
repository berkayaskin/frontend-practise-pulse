import { configureStore } from '@reduxjs/toolkit'
import mobileNavigationReducer from './features/mobile-navigation-slice'

export const store = configureStore({
  reducer: {
    mobileNavigation: mobileNavigationReducer,
  },
})
