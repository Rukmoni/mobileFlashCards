import React from 'react';
import 'react-native-gesture-handler';
import Home from '../pages/Home';
import AddNewDeck from '../pages/AddNewDeck';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TabStack=createBottomTabNavigator();

function Tabs(){
    return(
        <TabStack.Navigator>
            <TabStack.Screen  name="Home" component={Home}/>
            <TabStack.Screen  name="AddNewDeck" component={AddNewDeck}/>
        </TabStack.Navigator>
    )
}

export default function TabsNavigator(){
    return(
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    )
}