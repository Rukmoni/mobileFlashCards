import {View,Text,StyleSheet,TextInput} from "react-native";
import React,{useState} from "react";
import {useDispatch} from 'react-redux';
import Button from '../components/Buttons';
import {AddNewCardToApi,addToDeck} from '../reduxStore/decksSlice';


const AddNewCard=({navigation,route})=> {
  const deck=route.params.deckData;
    const [title,setTitle]=useState('');
   const dispatch=useDispatch();

  const addCard=()=>{
    console.log("AddNewCardToApi")
    let card={question:"new ",answer:"ans"};
    dispatch(AddNewCardToApi({deckId:deck.id,card:{question:"new ",answer:"ans"}})).then((res)=>{
        console.log("SERVER RESPONSE",res);
        //dispatch(addToDeck({deckId:deck.id,card:res.payload}))
       
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
                <Button title="Add New Card" onPress={addCard}/>
                </View>
            </View>
        )
   
}




export default AddNewCard;

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