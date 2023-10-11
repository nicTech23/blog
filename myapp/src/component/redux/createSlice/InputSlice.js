import {createSlice} from '@reduxjs/toolkit'
import Login from './../../author/Login';

const initialState = {
    register: {
        firstname:'',
        lastname:'',
        email:'',
        username:'',
        password:'',
        comfirmpassword:''
    },
    login:{
        email:'',
        password:''
    }

}

const registerSlice = createSlice({
    name:'AuthorRegister',
    initialState,
    reducers: {
        authorInfo:(state, action)=>{
            const fillName = action.payload.name
            state.register[fillName] = action.payload.value
        },
        Login:(state, action)=>{
            const fillName = action.payload.name
            state[fillName] = action.payload.value
        }
    }
})

export const registerReducer = registerSlice.reducer
export const registerAction = registerSlice.actions

