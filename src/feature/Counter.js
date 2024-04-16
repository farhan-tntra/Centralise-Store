// import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from '@reduxjs/toolkit'
// import type { AppThunk } from "../../app/store"

// If you are not using async thunks you can use the standalone `createSlice`.
export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState:{},
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
        state.value += action.payload
      },
    }
})

// Action creators are generated for each case reducer function.
export const { decrement, increment, incrementByAmount, incrementAsync } =
  counterSlice.actions

  export default counterSlice.reducer