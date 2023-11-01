import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    data: []
}

const SpecificStories = createSlice({
    name:'SpecificStories',
    initialState, 
    reducers:{
        getStories:(state, action)=>{
            state.data = action.payload
            state.loading = false
        }
    }
})

export const specificStoriesAction  = SpecificStories.actions
export const specificStoriesReducer = SpecificStories.reducer