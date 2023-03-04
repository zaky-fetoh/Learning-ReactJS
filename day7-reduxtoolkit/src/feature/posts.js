import * as rdtk from "@reduxjs/toolkit"


const postSlice = rdtk.createSlice({
    name:"post", 
    initialState:{
        posts:[],
    },
    reducers:{
        add:(state, action)=>{
            state.posts.push(action.payload.post);
            return state; 
        },
        delete:(state, action)=>{
            state.posts = state.posts.filter(e=>{
                return e.id !== action.payload.id;
            })
            return state;
        },
        edit:(state, action)=>{
            state.posts = state.posts.map(e=>{
                return e.id === action.payload.id? action.payload.post :e
            })
            return state
        },
    }
})


export const actions = postSlice.actions ;
export const reducer = postSlice.reducer; 