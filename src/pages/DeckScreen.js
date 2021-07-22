import {View,Text,StyleSheet} from "react-native";
import {useSelector,useDispatch} from "react-redux";
import React, { useEffect,useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Buttons';
import {DeleteDeckFromApi} from '../reduxStore/decksSlice';

const DeckScreen=({route})=> {
   const decksState=useSelector((state)=>state.decks);
   const dispatch=useDispatch();
   const [deck,setDeck]=useState(null);
   const [quizDisabled,setQuizDisabled]=useState(true);
    const deckId=route.params.deckId;
   useEffect(()=>{
       let d=decksState.decks.find(_deck=>_deck.id===deckId)
       if(d?.questions.length>0){
        setQuizDisabled(false);
       }
       setDeck(d);
 

   },[decksState])
    const navigation=useNavigation();
    const deleteDeck=()=>{
 dispatch(DeleteDeckFromApi(deckId)).then(()=>{
     navigation.navigate("Home")
 })
    }
   // console.log("DecksScreen",deck)
        return(
            <View style={styles.container}>
            {deck&&
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{deck.title}</Text>
                <Text style={styles.count}>{deck.questions.length} cards</Text>
                <Button title="Start Quiz" onPress={()=>navigation.navigate("QuizScreen",{deckData:deck})} disabled={quizDisabled}/>
                <Button title="Add New Card" onPress={()=>navigation.navigate("AddNewCard",{deckData:deck})}/>
                <TouchableOpacity onPress={deleteDeck}>
                    <Text style={styles.deleteText}> Delete Deck</Text>
                </TouchableOpacity>
                </View>
            }
            </View>
        )

}

const styles=StyleSheet.create({
    container:{
      flex: 1, 
      justifyContent: 'center',
       alignItems: 'center', 
       backgroundColor: "#ebf0f7"
  
    },
    infoContainer:{
        width:300,
        justifyContent: 'center',
        alignItems: 'center', 
       
    },
    name: {
		fontSize: 18,
	
		
		color: 'black',
        fontWeight: 'bold',
        marginVertical:5,
	},

	count: {
		fontSize: 14,

		alignSelf: 'center',
        color: 'black',
        marginBottom:20,
    },
    deleteText:{
        color:'red',
        marginVertical:10
    }
  })
export default DeckScreen;