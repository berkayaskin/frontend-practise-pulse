import { createSlice } from '@reduxjs/toolkit'

export type MobileNavigationState = {
  isOpen: boolean
}

const initialState: MobileNavigationState = {
  isOpen: false,
}

export const mobileNavigationSlice = createSlice({
  name: 'mobileNavigation',
  initialState,
  reducers: {
    toggleMobileNav: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

export const { toggleMobileNav } = mobileNavigationSlice.actions
export default mobileNavigationSlice.reducer
