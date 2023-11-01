import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    status: 'idle', 
    data: [],
    error:''
}
const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  export const fetchPopular = createAsyncThunk('pupelar/fetch', async()=>{
    const response = await axios.get('http://localhost:8080/api/v1/popular/', config)
    return response
  })

  const popularSlice = createSlice({
    name:"popular", 
    initialState,
    extraReducers: (builder)=>{
        builder
            .addCase(fetchPopular.pending, (state)=>{
                state.status = 'loading'
            })
            .addCase(fetchPopular.fulfilled, (state, action)=>{
                state.status = 'success'
                state.data = action.payload
            })
            .addCase(fetchPopular.rejected, (state, action)=>{
                state.status = 'failed'
                state.data = action.error.message
            })

    }
  })

  export default popularSlice.reducer
