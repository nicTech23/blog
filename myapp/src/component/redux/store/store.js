import {configureStore} from "@reduxjs/toolkit"
import {registerReducer} from '../createSlice/InputSlice'
import recentPostReducer from '../createSlice/RecentPostSlice'
import allDataReducer from '../createSlice/allStoriesSlice'

const store = configureStore({
    reducer: {
        registerAuthor:registerReducer,
        recentPost: recentPostReducer,
        allPostData: allDataReducer
    }
})

export default store