import rdtk from "@reduxjs/toolkit";

const initialState={
    login: false,
    userName:"",
}

const authSlice = rdtk.createSlice({
    name:"auth",
    initialState,
    reducers:{
        doLogin:(state, action)=>{
            return {login:true, userName:action.payload.userName};
        },
        doLogout:(state, action)=>{
            return initialState;
        },
    }
})


export const action = auth.actions;
export const reducer= auth.reducers;

