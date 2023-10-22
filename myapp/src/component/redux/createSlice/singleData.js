import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'idle',
    data:[],
    error:''
}

const singleDataSlice = createSlice({
    name:'singleData',
    initialState, 
    reducers:{
        singleData:(state, action)=>{
            state.data = action.payload
            state.status  = 'success'
        }
    }
})

export const singleDataAction = singleDataSlice.actions
export const singleDataReducer = singleDataSlice.reducer