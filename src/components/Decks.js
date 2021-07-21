import {View,ScrollView,SafeAreaView,StyleSheet,Text,TouchableOpacity} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from '@react-navigation/native';

const DeckCard=({deck})=>{
    const navigation=useNavigation();
    return(
        <TouchableOpacity onPress={()=>navigation.navigate("DeckScreen",{deckData:deck})}>
            <Text>{deck.title}</Text>
        </TouchableOpacity>
    )

}

const Decks=({data})=>{
   /// console.log("data:::",data)
    if(data.length===0){
        return ("No Decks to display!")
    }

  
        return(
            <SafeAreaView style={styles.container}>
              <ScrollView >
            {data.map((_deck)=><DeckCard  deck={_deck}/>)}
               </ScrollView>
            </SafeAreaView>
        )
    
}


export default Decks;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      marginHorizontal: 20,
    },
})