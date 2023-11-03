import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    loading:true,
    title:'',
    content:'',
    category:[],
    popular:'',
    image:'',
    author:''
}

const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{
        getPostData:(state, action)=>{
           state.title = action.payload.title
        }
    }
})

export const postAction = postSlice.actions
export const postReducer = postSlice.reducer
