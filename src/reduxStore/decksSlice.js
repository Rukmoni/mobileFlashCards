import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
//import {getDecksfromApi,AddNewDeckToApi} from './decksActions';
import * as api from '../apiAccess/api';


export const getDecksfromApi=createAsyncThunk('decks/getDecks',async(payload,{dispatch})=>{
    const response=await api.getDecks();
    return response;

}) 
export const AddNewDeckToApi=createAsyncThunk('decks/addNewDeck',async(payload)=>{
    console.log("createAsyncThunk",payload)
    const response=await api.addNewDeck(payload);
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
            console.log("Set Decks Called");
            state.decks=action.payload
        }, 
        addToDeck:(state,action)=>{
            console.log("action.payload",action.payload)
          state.decks.push(action.payload);
        }
    },
   extraReducers:(builder)=>{
        builder
        .addCase(getDecksfromApi.pending,(state,action)=>{
            state.loading="pending"
        //console.log("Pending")
        })
    
        .addCase(getDecksfromApi.fulfilled,(state,action)=>{
            console.log("Fullfilled",action.payload)
            state.decks=Object.values(action.payload);
            state.loading="fullfilled"
           // console.log("Fullfilled",action)
        }) 
      .addCase(AddNewDeckToApi.fulfilled,(state,action)=>{
            console.log("Fullfilleddd", state.decks)
            state.decks.push(action.payload);
           // console.log("Fullfilled",action)
        })   
       
    } 
});

export const {setDecks,addToDeck}=decksSlice.actions;

export default decksSlice.reducer;