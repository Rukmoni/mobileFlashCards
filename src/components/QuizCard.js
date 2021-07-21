import React,{useEffect,useState} from 'react';
import { View, StyleSheet, Animated, TouchableWithoutFeedback, Text } from 'react-native';

const QuizCard = ({question,mode}) => {
  console.log("QuizCard::",question);
  const [currentQuestion,setCurrentQuestion]=useState('');
  const [currentAnswer,setCurrentAnswer]=useState('');
  const [currentMode,setCurrentMode]=useState('');
  useEffect(()=>{
    if(question){
      setCurrentQuestion(question["question"]);
      setCurrentAnswer(question["answer"]);
    }
  
      setCurrentMode(mode)
      flipCard();
    
    
  },[question,mode]) 

        let animatedValue = new Animated.Value(0);
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
          })

        const flipCard = () => {
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
        }


        const frontAnimatedStyle = {
        transform: [{ rotateY: frontInterpolate}]
        }
        const backAnimatedStyle = {
        transform: [{ rotateY: backInterpolate }]
        }


    return (
    /*   <TouchableWithoutFeedback onPress={() => flipCard()} > */
          <View>
                <Animated.View style={[frontAnimatedStyle, styles.paperFront,{elevation: elevationFront}, {opacity: frontOpacity}]}>
                {/*   <Text style={{fontSize: 20,paddingTop: 8, paddingLeft: 8, color: 'black',lineHeight: 20}}>
                    Title Front {value} - <Text style={{fontSize: 8}}>KPI</Text>
                  </Text>
                    <View style={{position: "absolute", paddingTop: 3, right: 8}}>
                    </View> */}
                    <View style={{flex:1,backgroundColor:'yellow',alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.text}>{currentQuestion}</Text>
                    </View>
                </Animated.View>

                <Animated.View style={[backAnimatedStyle, styles.paperBack, {elevation: elevationBack}, {opacity: backOpacity}]}>
                  <Text>{currentAnswer}</Text>
                </Animated.View>
            </View>
     /*  </TouchableWithoutFeedback> */
    );
}

const styles = StyleSheet.create({
    paperFront : {
      marginHorizontal: 15,
      backgroundColor: "#16A085",
      minHeight: 400,
      borderRadius: 5,
      marginBottom: 15,

    },
    paperBack : {
      top: -415,
      marginHorizontal: 15,
      backgroundColor: "white",
      minHeight: 400,
      borderRadius: 5,
      marginBottom: 15,

    },
    text:{
      color:'#000'
    }
});

export default QuizCard