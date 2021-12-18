import { createSlice } from '@reduxjs/toolkit'


const url="http://localhost:5000/food-services"

export const servicesSlice = createSlice({
  name: 'services',
    initialState:{
        allServices: url,
        
  }
  
})


export const { allServices } = servicesSlice.actions

export default servicesSlice.reducer