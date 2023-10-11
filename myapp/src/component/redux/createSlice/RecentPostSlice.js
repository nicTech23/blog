import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetctRecentPost = createAsyncThunk('recentPost/fetch', async()=>{
    const response = await axios.get('http://localhost:8080/api/v1/recentpost/')
    return response
})

const initialState = {
    status:'idle',
    data:[],
    error:''
}

const rescentPostSlice = createSlice({
    name:"recentPost",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetctRecentPost.pending, (state)=>{
            state.status = 'loading'
        })
        .addCase(fetctRecentPost.fulfilled, (state, action)=>{
            state.status = "success"
            state.data = action.payload.data
        })
        .addCase(fetctRecentPost.rejected, (state, action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export default rescentPostSlice.reducer