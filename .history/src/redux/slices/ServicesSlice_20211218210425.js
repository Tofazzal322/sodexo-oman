import { createSlice } from '@reduxjs/toolkit'



export const servicesSlice = createSlice({
  name: 'services',
    initialState:{
        allServices: [],
        
  }
  
})

// Action creators are generated for each case reducer function
export const { allServices } = servicesSlice.actions

export default servicesSlice.reducer