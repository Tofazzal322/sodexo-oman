import { createSlice } from '@reduxjs/toolkit'


const url="https://quiet-savannah-34726.herokuapp.com/food-services"

export const servicesSlice = createSlice({
  name: 'services',
    initialState:{
        discover : url,
        readingList: [],
        updateData:[]
        
    },
    reducers: {
        fetchData: (state, action) => {
     state.readingList.push(action.payload)
      
    },
    deleteData: (state,{payload}) => {
      state.readingList=state.readingList.filter(services => services.id !== payload.id)
    },
    
    },
  
})


export const { allServices,deleteData,updateData,fetchData } = servicesSlice.actions;

export default servicesSlice.reducer