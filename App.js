import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React,{useEffect}from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';
import { Provider } from "react-redux";
import store from "./src/reduxStore/store";
import * as api from './src/apiAccess/api';
import {useSelector,useDispatch} from 'react-redux';
import {setDecks} from './src/reduxStore/decksSlice';
import ReduxTest from './src/pages/reduxTest';
import AppNavigator from './src/navigation/AppNavigator';
export default function App() {

  console.log("Fonts")
  const [fontsLoaded] = Font.useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    
  });

 /*  if (!fontsLoaded) {
    console.log("Fonts not loaded")
    return <AppLoading />;
  } */
  console.log("Fonts loaded")
  const  apiTest=async()=>{
   // let decks=await api.getDecks();
   /* let newDeck=await api.addNewDeck("new deck");
   let newQuestion= {
    question: "What is ReactJS?",
    answer:
      "ReactJS is an open-source frontend JavaScript library which is used for building user interfaces, specifically for single page applications."
  };
  await api.addCardToDeck(newDeck.id,newQuestion);
   let decks=await api.getDecks();
    console.log("decks::",decks);
 */
// dispatch(setDecks(["1","2","3"]));
  }
  return (
    <Provider store={store}>
    <View style={{flex:1}}>
    <AppNavigator/>
     {/*  <Text>Platform Default</Text>
      <Text>Inter Black</Text>
      <TouchableOpacity onPress={apiTest}>
      <Text>Inter Black</Text>
      </TouchableOpacity>
      <ReduxTest/> */}
      
    </View>
    </Provider>
  );
}
