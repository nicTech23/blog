import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    data:[],
}

const singleDataSlice = createSlice({
    name:'singleData',
    initialState, 
    reducers:{
        singleData:(state, action)=>{
            state.data = action.payload
            state.loading  = true
        }
    }
})

export const singleDataAction = singleDataSlice.actions
export const singleDataReducer = singleDataSlice.reducer