import {configureStore} from "@reduxjs/toolkit"
import {registerReducer} from '../createSlice/InputSlice'
import recentPostReducer from '../createSlice/RecentPostSlice'

const store = configureStore({
    reducer: {
        registerAuthor:registerReducer,
        recentPost: recentPostReducer
    }
})

export default store