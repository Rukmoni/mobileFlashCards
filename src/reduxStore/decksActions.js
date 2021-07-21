import {createAsyncThunk} from "@reduxjs/toolkit";
import {addToDeck} from './decksSlice';
import * as api from '../apiAccess/api';

/* export const getDecksfromApi=createAsyncThunk('decks/getDecks',async(thunkAPI)=>{
    console.log("getDecksfromApi");
    const response=await api.getDecks();
    return response.data;

})
 */
/*  export const AddNewDeckToApi=createAsyncThunk('decks/addNewDeck',async(payload)=>{
    const response=await api.addNewDeck("NewDeck Rupa");
    return response;

})  */
 export function AddNewDeckToApi(title){
     
    return dispatch=>{
        return api.addNewDeck(title).then(
            deck => {
                
              dispatch(addToDeck(deck));
            })
    }
}  
/* 
export function AddNewDeck(title){
    return dispatch=>{
        try return 
    }
} */