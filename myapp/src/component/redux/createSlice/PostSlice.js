import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    title:'',
    content:'',
    category:[],
    popular:false,
    image:'',
    author:'', 
    checkCategrory:''
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
        getCategory:(state, action)=>{
            if(!state.category.includes(action.payload)){
                state.category =  [...state.category, action.payload]
            } else{
                state.category = state.category.filter(item => item != action.payload)
            }
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
        getChecKCategory:(state, action)=>{
            state.checkCategrory = action.payload
            state.category = []
        }
    }
})

export const postAction = postSlice.actions
export const postReducer = postSlice.reducer
