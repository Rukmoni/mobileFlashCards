import {View,Text,ActivityIndicator} from "react-native";
import {useDispatch,useSelector} from 'react-redux';
import React, { Component,useEffect,useState } from "react";
import Decks from '../components/Decks'
import {getDecksfromApi} from '../reduxStore/decksSlice';

const Home=()=> {
 const [LoadState,setLoadState]=useState("idle");
const [decks,setDecks]=useState([])
 const dispatch=useDispatch();
 const DecksState=useSelector((state)=>state.decks);
 useEffect(()=>{
     dispatch(getDecksfromApi());

 },[])
 useEffect(()=>{
console.log("decksState,D",DecksState)
setLoadState(DecksState.loading)
setDecks(Object.values(DecksState.decks));
 },[DecksState]);


        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'yellow' }}>
              {LoadState!=="fullfilled"?<ActivityIndicator/>: <Decks data={decks}/>} 
            
            </View>
        )

}

export default Home;