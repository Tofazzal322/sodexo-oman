import { createSlice } from '@reduxjs/toolkit'
import { useEffect } from 'react'


const url = "https://quiet-savannah-34726.herokuapp.com/food-services"



export const servicesSlice = createSlice({
useEffect(() => {
  
},[])
  name: 'book',
    initialState:{
        discover : url,
        readingList: [],
        finishedList:[]
        
    },
    reducers: {
        addToReadingList : (state, action) => {
     state.readingList.push(action.payload)
      
    },
    removeFromReadingList: (state,{payload}) => {
      state.readingList = state.readingList.filter(services => services.id !== payload.id)
    },
    
    },
  
})


export const {addToReadingList, removeFromReadingList } = servicesSlice.actions;

export default servicesSlice.reducer