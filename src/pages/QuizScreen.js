import {View,Text,StyleSheet} from "react-native";
import React, { useEffect,useState } from "react";
import QuizCard from '../components/QuizCard';
import Button from '../components/Buttons';

const QuizScreen=({navigation,route})=> {
   const deck=route.params.deckData;
  const [questions,setQuestions]=useState([]);
  const [currentQuestion,setCurrentQuestion]=useState(0);
  const [currentMode,setCurrentMode]=useState('question');
   useEffect(()=>{
    //console.log("route::",deck.questions)
    setQuestions(deck.questions);
        
},[deck]);
const showAnswer=()=>{
    setCurrentMode('answer');


}
const NextQuestion=(res)=>{
    //console.log("result",res)
     let next=currentQuestion+1;
    if(next<questions.length){
    setCurrentQuestion(next);
    setCurrentMode('question')
    } else{
        console.log("ResultScreen")
    }
}
  
        return(
            <View style={styles.container}>
                
                <View style={styles.quizCardContainer}>
                <QuizCard question={questions[currentQuestion]} mode={currentMode}/>
                </View>
                <View style={styles.buttonContainer}>
                <Text>{currentQuestion+1} / {questions.length}</Text>
                <Button title="Show Answer" style={{width:200}} onPress={showAnswer} disabled={currentMode!=="question"}/>
                <Button title="Correct" style={{width:200,backgroundColor:'green'}} onPress={()=>NextQuestion("correct")} disabled={currentMode==="question"}/>
                <Button title="Wrong" style={{width:200,backgroundColor:'red'}} onPress={()=>NextQuestion("wrong")} disabled={currentMode==="question"}/>
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
        height:350,
    },
    buttonContainer:{
        flex:0.5,
       alignItems:'center',
        justifyContent:'space-evenly',
        marginTop:10,
    }

})

export default QuizScreen;