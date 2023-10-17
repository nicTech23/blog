import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    header: true
}

const headerSlice = createSlice({
    name:'header',
    initialState, 
    reducers:{
        changeHeader:(state, action)=>{
            state.header = false
        }
    }
})