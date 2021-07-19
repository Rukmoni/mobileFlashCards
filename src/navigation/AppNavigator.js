import * as React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import DeckScreen from '../pages/DeckScreen';
import AddNewDeck from '../pages/AddNewDeck';
import QuizScreen from '../pages/QuizScreen';
import AddNewCard from '../pages/AddNewCard';
//import Home from '../pages/DeckList';
function HomeScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'red'}}>
      <Text>Home!</Text>
      <TouchableOpacity onPress={()=>props.navigation.navigate("Details")}>
          <Text>DetailsScreen</Text>
      </TouchableOpacity>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'green' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function DetailsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'yellow' }}>
        <Text>Details!</Text>
      </View>
    );
  }

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AddDeck" component={AddNewDeck} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="DeckScreen" component={DeckScreen} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
        <Stack.Screen name="AddNewCard" component={AddNewCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}