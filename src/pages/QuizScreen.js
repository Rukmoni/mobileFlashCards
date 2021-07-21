import {View,Text,StyleSheet} from "react-native";
import React, { useEffect,useState } from "react";
import QuizCard from '../components/QuizCard';
import Button from '../components/Buttons';

const QuizScreen=({route})=> {
   const deck=route.params.deckData;
  const [questions,setQuestions]=useState([]);
  const [currentQuestion,setCurrentQuestion]=useState(0);
  const [currentMode,setCurrentMode]=useState('question');
   useEffect(()=>{
    console.log("route::",deck.questions)
    setQuestions(deck.questions);
        
},[deck]);
const NextQuestion=()=>{
  /*   let next=currentQuestion+1;
    if(next<questions.length){
    setCurrentQuestion(next);
    } */
    setCurrentMode('back');
}
        return(
            <View style={styles.container}>
                <Text>Quiz page2</Text>
                <View style={styles.quizCardContainer}>
                <QuizCard question={questions[currentQuestion]} mode={currentMode}/>
                </View>
                <View style={styles.buttonContainer}>
                <Button title="Submit" style={{width:200}} onPress={NextQuestion}/>
                <Button title="Correct" style={{width:200,backgroundColor:'green'}}/>
                <Button title="Wrong" style={{width:200,backgroundColor:'red'}}/>
                </View>
            </View>
        )
   
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
     
    },
    quizCardContainer:{
        marginTop:10,
        height:450,
    },
    buttonContainer:{
        flex:0.5,
       alignItems:'center',
        justifyContent:'space-evenly',
        marginTop:10,
    }

})

export default QuizScreen;