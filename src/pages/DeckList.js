import {View,Text,ActivityIndicator} from "react-native";
import {useDispatch,useSelector} from 'react-redux';
import React, { Component,useEffect,useState } from "react";
import Decks from '../components/Decks'
import {getDecksfromApi} from '../reduxStore/decksSlice';

const DeckList=()=> {
 const [LoadState,setLoadState]=useState("idle");
const [decks,setDecks]=useState([])
 const dispatch=useDispatch();
 const DecksState=useSelector((state)=>state.decks);
 useEffect(()=>{
console.log("decksState,D",DecksState)
setLoadState(DecksState.loading)
let _decksArr=Object.values(DecksState.decks).map((_deck)=>({
    id:_deck.id,
    questions:_deck.questions,
    title:_deck.title

}))
setDecks(_decksArr);
 },[DecksState]);


        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'yellow' }}>
              {LoadState!=="fullfilled"?<ActivityIndicator/>: <Decks data={decks}/>} 
            
            </View>
        )

}

export default DeckList;