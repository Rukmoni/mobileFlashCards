import {View,Text,StyleSheet} from "react-native";

import React from "react";

import Button from '../components/Buttons';
 
const ResultScreen=({navigation,route})=> {
 
  
   console.log("ResultScreen",route.params)
        return(
            <View style={styles.container}>
           
            <View style={styles.infoContainer}>
               <Text style={styles.name}>ResultScreen</Text>
               <Text style={styles.count}>You Successfully Completed Your Quiz!</Text>
               <Button title="Home" onPress={()=>navigation.navigate("Home")}></Button>
        </View>
            </View>
        )

}
ResultScreen.navigationOptions = {
    headerTitle: 'Trucks Screen',
    headerLeft: null,
};
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
export default ResultScreen;