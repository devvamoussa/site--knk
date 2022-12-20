import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import artisanService from "./artisanService";

const initialState = {
    artisan: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}
// create new goal

export const createArtisan = createAsyncThunk('artisan/create', async (artisData, thunkAPI)=>{
     console.log(artisData)
    try {
        const token= thunkAPI.getState().auth.user.token
        return await artisanService.createArtisan(artisData, token)
       
    } catch (error) {
        const message = (error.response && 
            error.response.date && 
            error.response.data.message)
         || error.message || error.toString()
         return thunkAPI.rejectWithValue(message)
    }
    
})


//get user Artisan
export const getArtisan = createAsyncThunk('artisan/getAll', async (_, thunkAPI) =>{
    try {
         const token= thunkAPI.getState().auth.user.token
        return await artisanService.getArtisan(token)
    } catch (error) {
        const message = (error.response && 
            error.response.date && 
            error.response.data.message)
         || error.message || error.toString()
         return thunkAPI.rejectWithValue(message)
        
    }
})

export const artisanSlice = createSlice({
    name: 'artisan',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers : (builder) =>{
        builder
            .addCase(createArtisan.pending, (state, action) =>{
                state.isLoading = true
            })
            .addCase(createArtisan.fulfilled, (state, action) =>{
                state.isLoading = false
                state.isSuccess = true
                state.artisan.push(action.payload)
            })
            .addCase(createArtisan.rejected, (state, action) =>{
                state.isLoading = false
                state.isError = true
                state.message= action.payload
            })
            .addCase(getArtisan.pending, (state, action) =>{
                state.isLoading = true
            })
            .addCase(getArtisan.fulfilled, (state, action) =>{
                state.isLoading = false
                state.isSuccess = true
                state.artisan= action.payload
            })
            .addCase(getArtisan.rejected, (state, action) =>{
                state.isLoading = false
                state.isError = true
                state.message= action.payload
            })
    }
})

export const {reset} = artisanSlice.actions
export default artisanSlice.reducer