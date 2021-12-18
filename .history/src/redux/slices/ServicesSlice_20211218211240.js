import { createSlice } from '@reduxjs/toolkit'


const url="https://quiet-savannah-34726.herokuapp.com/food-services"

export const servicesSlice = createSlice({
  name: 'services',
    initialState:{
        allServices: url,
        deleteServices: [],
        updateData;[]
        
    },
    reducers: {
        fetchData: (state, action) => {
     
      state.value += 1
    },
    deleteData: (state,action) => {
      state.value -= 1
    },
    updateData: (state, action) => {
      state.value += action.payload
    },
    }
  
})


export const { allServices } = servicesSlice.actions

export default servicesSlice.reducer