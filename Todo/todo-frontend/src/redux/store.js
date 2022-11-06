import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./features/userSlice";
import todoSlice from "./features/todoSlice";

export const store = configureStore({
    reducer:{
        auth:authSlice,
        todo:todoSlice,
    }
})