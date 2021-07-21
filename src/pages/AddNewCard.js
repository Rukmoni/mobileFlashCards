import {View,Text,StyleSheet} from "react-native";
import React, { Component } from "react";

const AddNewScreen=()=> {
   
        return(
            <View>
                <Text>AddNewScreen</Text>
            </View>
        )
   
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    flipCard: {
      width: 200,
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue',
      backfaceVisibility: 'hidden',
    },
    flipCardBack: {
      backgroundColor: "red",
      position: "absolute",
      top: 0,
    },
    flipText: {
      width: 90,
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
    }
  });

export default AddNewScreen;