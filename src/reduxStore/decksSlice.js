import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import * as api from '../apiAccess/api';

export const getDecksfromApi=createAsyncThunk('decks/getDecks',async(thunkAPI)=>{
    const response=await api.getDecks();
    return response;

})

/* export const getDecksfromApi=createAsyncThunk('decks/getDecks',async(thunkAPI)=>{
    const response=await api.getDecks();
    return response;

}) */
const decksSlice=createSlice({
    name:'decksState',
    initialState:{
        decks:[],
        loading:'idle',
        loggedin:"test",
    },
    reducers:{
        setDecks:(state,action)=>{
            console.log(action);
            state.decks=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getDecksfromApi.pending,(state,action)=>{
            state.loading="pending"
        console.log("Pending")
        })
        .addCase(getDecksfromApi.fulfilled,(state,action)=>{
            state.decks=action.payload
            state.loading="fullfilled"
            console.log("Fullfilled",action)
        })
    }
});

export const {setDecks}=decksSlice.actions;

export default decksSlice.reducer;