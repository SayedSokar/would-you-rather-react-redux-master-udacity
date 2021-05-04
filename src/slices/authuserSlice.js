import { createSlice } from '@reduxjs/toolkit'
//------------------------------ end of import --------------------------------//

//-------------------------Functions-------------------------------------------//

export const authuserSlice = createSlice({
    name: 'authuser',
    initialState: {
        name:''
    },
    reducers: {
        SET_AUTHED_USER: (authuser, action) => {
             authuser.name= action.payload
            
        },
        DELETE_AUTHED_USER: (authuser, action) => {
            authuser.name= ''
            
        },
    }
})


//-----------------------------------------------------------------------------//


export const { SET_AUTHED_USER, DELETE_AUTHED_USER} = authuserSlice.actions

export default authuserSlice.reducer