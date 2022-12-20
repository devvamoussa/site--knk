import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice";
import artisanReducer from "../inscriptionStep1/artisanSlice";



export const stores = configureStore({
    reducer:{
        auth: authReducer,
        artisan: artisanReducer
    },
});
