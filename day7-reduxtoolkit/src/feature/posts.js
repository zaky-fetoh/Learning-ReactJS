import * as rdtk from "@reduxjs/toolkit"


export const featchPosts = rdtk.createAsyncThunk("post/fetch",
    async(_,thunkAPI)=>{
        const d = await fetch("https://dummyjson.com/products");
        return (await d.json()).products
    }
)



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
    },
    extraReducers:builder=>{
        builder.addCase(featchPosts.fulfilled,(state,action)=>{
            action.payload.forEach(e => {
                state.posts.push(e);
            });
        })
    }
})


export const actions = postSlice.actions ;
export const reducer = postSlice.reducer; 