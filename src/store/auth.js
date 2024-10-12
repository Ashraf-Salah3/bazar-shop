import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn : false,
    userName : null,
    email : null,
    userId: null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        SET_ACTIVE_USER: (state,action) => {
            const {userName, email, userId} = action.payload

            state.isLoggedIn = true
            state.userName = userName
            state.email = email
            state.userId = userId

        },

        REMOVE_ACTIVE_USER: (state) =>{
            state.isLoggedIn = false
            state.email = null;
            state.userName = null;
            state.userId = null;
        }
    }
})

export const  {SET_ACTIVE_USER, REMOVE_ACTIVE_USER}  = authSlice.actions

export default authSlice.reducer