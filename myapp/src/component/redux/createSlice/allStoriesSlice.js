import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    sports:{
        status:'idle',
        data:[],
        error:''
    },
    entertainment:{
        status:'idle',
        data:[],
        error:''
    },
    business:{
        status:'idle',
        data:[],
        error:''
    },
    news:{
        status:'idle',
        data:[],
        error:''
    },
}

export const fetchSport = createAsyncThunk('sport/fetch', ()=>{
    const response = axios.get(`http://localhost:8080/api/v1/sports/`)
    return response
})

export const fetchEntertainment = createAsyncThunk('entertainment/fetch', ()=>{
    const response = axios.get(`http://localhost:8080/api/v1/entertainment/`)
    return response
})

export const fetchBusiness = createAsyncThunk('business/fetch', ()=>{
    const response = axios.get(`http://localhost:8080/api/v1/business/`)
    return response
})
export const fetchNews = createAsyncThunk('news/fetch', async ()=>{
    const response = await axios.get(`http://localhost:8080/api/v1/news/`)
    return response
})

const allStoriesSlice = createSlice({ 
    name:'allData', 
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(fetchSport.pending, (state, action)=>{
                state.sports.status = 'loading'
            })
            .addCase(fetchSport.fulfilled, (state, action)=>{
                state.sports.status = 'success'
                state.sports.data = action.payload
            })
            .addCase(fetchSport.rejected, (state, action)=>{
                state.sports.status = 'failed'
                state.sports.error = action.error.message
            })  
            // Entertainment fetch
            .addCase(fetchEntertainment.pending, (state, action)=>{
                state.entertainment.status = 'loading'
            })
            .addCase(fetchEntertainment.fulfilled, (state, action)=>{
                state.entertainment.status = 'success'
                state.entertainment.data = action.payload
            })
            .addCase(fetchEntertainment.rejected, (state, action)=>{
                state.entertainment.status = 'failed'
                state.entertainment.error = action.error.message
            }) 

            // business fetch
            .addCase(fetchBusiness.pending, (state, action)=>{
                state.business.status = 'loading'
            })
            .addCase(fetchBusiness.fulfilled, (state, action)=>{
                state.business.status = 'success'
                state.business.data = action.payload
            })
            .addCase(fetchBusiness.rejected, (state, action)=>{
                state.business.status = 'failed'
                state.business.error = action.error.message
            })  
            
            //News fetch
            .addCase(fetchNews.pending, (state, action)=>{
                state.news.status = 'loading'
            })
            .addCase(fetchNews.fulfilled, (state, action)=>{
                state.news.status = 'success'
                state.news.data = action.payload
            })
            .addCase(fetchNews.rejected, (state, action)=>{
                state.news.status = 'failed'
                state.news.error = action.error.message
            })
    }
})


export default allStoriesSlice.reducer