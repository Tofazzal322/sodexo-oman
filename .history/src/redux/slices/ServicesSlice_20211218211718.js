import { createSlice } from '@reduxjs/toolkit'


const url="http://localhost:5000/food-services"

export const servicesSlice = createSlice({
  name: 'services',
    initialState:{
        allServices: url,
        deleteData: [],
        updateData:[]
        
    },
    reducers: {
        fetchData: (state, action) => {
     state.allServices.push(action.payload)
      
    },
    deleteData: (state,action) => {
      state.allServices=st
    },
    updateData: (state, action) => {
      state.value += action.payload
    },
    }
  
})


export const { allServices } = servicesSlice.actions

export default servicesSlice.reducer