import * as rdtk from "@reduxjs/toolkit";

const initialState={
    login: false,
    userName:"",
}

const authSlice = rdtk.createSlice({
    name:"auth",
    initialState,
    reducers:{
        doLogin:(state, action)=>{
            console.log("from Auth")
            return {login:true, userName:action.payload.userName};
        },
        doLogout:()=>{
            return initialState;
        },
    }   
})


export const actions = authSlice.actions;
export const reducer= authSlice.reducer;

