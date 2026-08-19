import { createSlice } from '@reduxjs/toolkit'

interface CartState {
  totalQuantity: number
}

const initialState: CartState = {
  totalQuantity: 0,
}

const cartSlice = createSlice({
  name: 'cart',

  initialState,

  reducers: {
    addToCart: (state) => {
      state.totalQuantity += 1
    },

    removeFromCart: (state) => {
      if (state.totalQuantity > 0) {
        state.totalQuantity -= 1
      }
    },
  },
})

export const {
  addToCart,
  removeFromCart,
} = cartSlice.actions

export default cartSlice.reducer