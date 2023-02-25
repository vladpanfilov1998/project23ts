import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IThemeState{
    thems:string
}
const initialState:IThemeState ={
    thems: 'light'
}
const themSlice = createSlice({
    name: 'themSlice',
    initialState,
    reducers:{
        setThem:(state, action:PayloadAction<{them:string}>) =>{
            state.thems=action.payload.them
        }
    }
})
const themReducer = themSlice.reducer;
export  default  themReducer;
export  const {setThem} = themSlice.actions