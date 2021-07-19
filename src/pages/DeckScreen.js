import {View,Text} from "react-native";
import {useSelector} from "react-redux";
import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

const DeckScreen=({route})=> {
   
    const deck=route.params.deckData;
    const navigation=useNavigation();
    console.log("DecksScreen",deck)
        return(
            <View>
                <Text>{deck.title}</Text>
                <Text>{deck.questions.length} cards</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("QuizScreen")}>
                    <Text> Start Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("AddNewCard")}>
                    <Text> Add New Card</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text> Delete Card</Text>
                </TouchableOpacity>
            </View>
        )

}


export default DeckScreen;