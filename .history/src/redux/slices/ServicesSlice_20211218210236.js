import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const servicesSlice = createSlice({
  name: 'services',
    initialState{
      
  }
  
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = servicesSlice.actions

export default servicesSlice.reducer