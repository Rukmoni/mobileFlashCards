import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, {  useEffect, useState } from 'react';
import Decks from '../components/Decks';
import { getDecksfromApi } from '../reduxStore/decksSlice';

const Home = () => {
	const [LoadState, setLoadState] = useState('idle');
	const [decks, setDecks] = useState([]);
	const dispatch = useDispatch();
	const DecksState = useSelector((state) => state.decks);
	useEffect(() => {
		dispatch(getDecksfromApi());
	}, []);
	useEffect(() => {
		setLoadState(DecksState.loading);
		setDecks(Object.values(DecksState.decks));
	}, [DecksState]);

	return (
		<View style={styles.container}>
			{LoadState !== 'fullfilled' ? <ActivityIndicator /> : <Decks data={decks} />}
		</View>
	);
};
const styles=StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center',
     alignItems: 'center', 
     backgroundColor: "#ebf0f7"

  }
})
export default Home;
