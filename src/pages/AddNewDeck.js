import {View,Text,StyleSheet,TextInput} from "react-native";
import React,{useState} from "react";
import {useDispatch} from 'react-redux';
import Button from '../components/Buttons';
import {AddNewDeckToApi} from '../reduxStore/decksSlice';

const AddNewDeck=({navigation})=> {
    const [title,setTitle]=useState('');
   const dispatch=useDispatch();

  const addDeck=()=>{
    console.log("AddNewDeckToApi")
    dispatch(AddNewDeckToApi(title)).then(()=>{
        console.log("SERVER RESPONSE");
        navigation.navigate("Home")
    });
  }
        return(
            <View style={styles.container}>
                <Text style={styles.title}>What is the Title of your New Deck?</Text>
                <View style={styles.input}>
                <TextInput
                
                value={title}
                placeholderTextColor = "#696969"
                onChangeText={msg => setTitle(msg)}
                blurOnSubmit={false}
                
                placeholder="Type Deck Title"
                returnKeyType="send"/>
               
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Add New Deck" onPress={addDeck}/>
                </View>
            </View>
        )
   
}




export default AddNewDeck;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        padding:20,
        textAlign:'center'
    },
    input: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
  padding:5,
        height: 40,
       width:'90%',
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#3d3d3d',
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: {
          height: 1,
        },
        borderColor:'#696969',
        borderWidth:1,
        marginBottom:40,
      },
      buttonContainer:{
          marginTop:50
      }
}) 