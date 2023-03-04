import * as rdtk  from "@reduxjs/toolkit";
import {reducer as auth} from "./auth"
import {reducer as post} from "./posts"


export default rdtk.configureStore({
    reducer:{
        auth,
        post,
    }
})