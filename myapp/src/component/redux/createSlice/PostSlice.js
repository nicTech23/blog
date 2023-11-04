import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    title:'',
    content:'',
    popular:false,
    image:'',
    author:'yaw', 
    type:'',
    category:''
}

const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{
        getTitle:(state, action)=>{
           state.title = action.payload
        },
        getContent:(state, action)=>{
            state.content = action.payload
        },
        getType:(state, action)=>{
            state.type = action.payload
        },
        getPopural:(state, action)=>{
            state.popular = action.payload
        },
        getImage:(state, action)=>{
            state.image = action.payload
        },
        getAuthor:(state, action)=>{
            state.author = action.payload
        },
        getCategory:(state, action)=>{
            state.category = action.payload
        }
    }
})

export const postAction = postSlice.actions
export const postReducer = postSlice.reducer
