import React,{useEffect,useState} from 'react';
import { View, StyleSheet, Animated, TouchableWithoutFeedback, Text } from 'react-native';

const QuizCard = ({question,mode}) => {
 // console.log("QuizCard::",question);
  const [currentQuestion,setCurrentQuestion]=useState('');
  const [currentAnswer,setCurrentAnswer]=useState('');
  const [currentMode,setCurrentMode]=useState('');
  useEffect(()=>{
    if(question){
      setCurrentQuestion(question["question"]);
      setCurrentAnswer(question["answer"]);
    }
  
      setCurrentMode(mode)
     // flipCard();
    
    
  },[question,mode]) 

/*         let animatedValue = new Animated.Value(0);
        let value = 0;

        animatedValue.addListener(({ value }) => {
          console.log("before this",value)
         
          // console.log("before val",value)
            this.value = value;
          // console.log("after",this.value)
       
        })

        let frontInterpolate = animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'],
        })
        let backInterpolate = animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        })
        let frontOpacity = animatedValue.interpolate({
        inputRange: [89, 90],
        outputRange: [1, 0]
        });

        let backOpacity = animatedValue.interpolate({
        inputRange: [89, 90],
        outputRange: [0, 1]
        });

        let elevationFront = animatedValue.interpolate({
          inputRange: [0, 25],
          outputRange: [10, 0]
          })

        let elevationBack = animatedValue.interpolate({
          inputRange: [155, 180],
          outputRange: [0, 10]
          }) */

       /*  const flipCard = () => {
          console.log("prees")
          console.log("v",this.value)
          console.log("anim",currentMode)
          
          //if (this.value >= 90) {
            if(currentMode=='back'){
            console.log("front")
            Animated.timing(animatedValue,{
              toValue: 0,
              friction: 8,
              tension: 10,
              useNativeDriver:true,
            }).start();
          } else {
            console.log("back")
            Animated.timing(animatedValue,{
              toValue: 180,
              friction: 8,
              tension: 10,
              useNativeDriver:true,
            }).start();
          }
        } */



    return (
    /*   <TouchableWithoutFeedback onPress={() => flipCard()} > */
          <View>
          {currentMode==="question"?
           <View style={styles.paperFront}>
           <Text style={styles.title}>Question</Text>
                    <Text style={styles.text}>{currentQuestion}</Text>
                    </View>
        :
                    <View style={styles.paperBack}>
                    <Text style={styles.title}>Answer</Text>
                    <Text style={styles.text}>{currentAnswer}</Text>
                    </View>
          }

           {/*      <Animated.View style={[frontAnimatedStyle, styles.paperFront,{elevation: elevationFront}, {opacity: frontOpacity}]}>
               
                    <View style={{flex:1,backgroundColor:'yellow',alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.text}>{currentQuestion}</Text>
                    </View>
                </Animated.View>

                <Animated.View style={[backAnimatedStyle, styles.paperBack, {elevation: elevationBack}, {opacity: backOpacity}]}>
                  <Text>{currentAnswer}</Text>
                </Animated.View> */}
            </View>
     /*  </TouchableWithoutFeedback> */
    );
}

const styles = StyleSheet.create({

    paperFront : {
      marginHorizontal: 15,
      backgroundColor: "#16A085",
      minHeight: 300,
      borderRadius: 5,
      marginBottom: 15,
      shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    justifyContent:'center',
    alignItems:'center'

    },
    paperBack : {
     
      marginHorizontal: 15,
      backgroundColor: '#ECF0F1',
      minHeight: 300,
      borderRadius: 5,
      marginBottom: 15,
      shadowColor: '#00000021',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
      justifyContent:'center',
      alignItems:'center'

    },
    title:{
      padding:10,
      fontSize:22,
      fontWeight:'bold',
      color:'orange'

    },
    text:{
      padding:15,
      fontSize:18,
      color:'#000'
    }
});

export default QuizCard