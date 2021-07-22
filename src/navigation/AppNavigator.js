import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import DeckScreen from '../pages/DeckScreen';
import AddNewDeck from '../pages/AddNewDeck';
import QuizScreen from '../pages/QuizScreen';
import AddNewCard from '../pages/AddNewCard';
import ResultScreen from '../pages/ResultScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'Home') {
						iconName = 'home';
					} else if (route.name === 'AddDeck') {
						iconName = 'duplicate';
					}

					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: '#16A085',
				inactiveTintColor: 'lightgray',
				activeBackgroundColor: '#2C3E50',
				inactiveBackgroundColor: '#2C3E50',
				style: {
					backgroundColor: '#2C3E50',
				},
				labelStyle: { fontSize: 14 },
			}}
		>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="AddDeck" component={AddNewDeck} />
		</Tab.Navigator>
	);
}

export default function AppNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerStyle: {
						backgroundColor: '#2C3E50',
					},
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			>
				<Stack.Screen name="Home" component={MyTabs} />
				<Stack.Screen name="DeckScreen" component={DeckScreen} />
				<Stack.Screen name="QuizScreen" component={QuizScreen} />
				<Stack.Screen name="AddNewCard" component={AddNewCard} />
				<Stack.Screen
					navigationOptions={{
						headerLeft: null,
					}}
					name="ResultScreen"
					component={ResultScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
