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
    deleteData: (state,{payload}) => {
      state.allServices=state.allServices.filter(service => service.id !== payload.id)
    },
    updateData: (state, action) => {
      state.value += action.payload
    },
    },
  
})


export const { allServices,deleteData,updateData,fetchData } = servicesSlice.actions;

export default servicesSlice.reducer