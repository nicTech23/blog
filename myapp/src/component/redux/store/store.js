import {configureStore} from "@reduxjs/toolkit"
import {registerReducer} from '../createSlice/InputSlice'
import recentPostReducer from '../createSlice/RecentPostSlice'
import allDataReducer from '../createSlice/allStoriesSlice'
import { singleDataReducer } from "../createSlice/singleData"
import { specificStoriesReducer } from "../createSlice/SpecificStories"
import  popularSlice from '../createSlice/populaSlice'
import { postReducer } from "../createSlice/PostSlice"

const store = configureStore({
    reducer: {
        registerAuthor:registerReducer,
        recentPost: recentPostReducer,
        allPostData: allDataReducer,
        singleData: singleDataReducer,
        specificStories:specificStoriesReducer,
        popular: popularSlice,
        post: postReducer
    }
})

export default store