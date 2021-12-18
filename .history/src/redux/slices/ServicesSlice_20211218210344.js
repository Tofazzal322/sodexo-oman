import { createSlice } from '@reduxjs/toolkit'



export const servicesSlice = createSlice({
  name: 'services',
    initialState:{
      all
  }
  
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = servicesSlice.actions

export default servicesSlice.reducer