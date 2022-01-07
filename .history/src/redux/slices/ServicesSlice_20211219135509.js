import { createSlice } from '@reduxjs/toolkit'



const data



export const servicesSlice = createSlice({

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