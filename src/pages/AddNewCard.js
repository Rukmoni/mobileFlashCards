import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState, useEffect, isValidElement } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../components/Buttons';
import { AddNewCardToApi, addToDeck } from '../reduxStore/decksSlice';

const AddNewCard = ({ navigation, route }) => {
	const deck = route.params.deckData;
	const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState('');
	const [isinValid, setIsinValid] = useState(true);
	const dispatch = useDispatch();
	useEffect(() => {
		if (question.length > 0 && answer.length > 0) {
			setIsinValid(false);
		} else {
			setIsinValid(true);
		}
	}, [question, answer]);

	const addCard = () => {
		let card = { question: question, answer: answer };
		dispatch(AddNewCardToApi({ deckId: deck.id, card: { question: 'new ', answer: 'ans' } })).then((res) => {
			navigation.navigate('DeckScreen', { deckId: deck.id });
		});
	};
	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				<Text style={styles.title}>What is the Title of your Card?</Text>
				<View style={styles.input}>
					<TextInput
						value={question}
						placeholderTextColor="#696969"
						onChangeText={(msg) => setQuestion(msg)}
						blurOnSubmit={false}
						placeholder="Enter Question"
						returnKeyType="send"
					/>
				</View>
				<Text style={styles.title}>What is the Answer of your Card?</Text>
				<View style={styles.input}>
					<TextInput
						value={answer}
						placeholderTextColor="#696969"
						onChangeText={(msg) => setAnswer(msg)}
						blurOnSubmit={false}
						placeholder="Enter Answer"
						returnKeyType="send"
					/>
				</View>
			</View>
			<View style={styles.buttonContainer}>
				<Button title="Add New Deck" onPress={addCard} disabled={isinValid} />
			</View>
		</View>
	);
};

export default AddNewCard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ebf0f7',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	contentContainer: {
		width: '100%',
	},
	title: {
		fontSize: 15,
		marginLeft: 10,
	},
	input: {
		flexDirection: 'row',
		alignSelf: 'flex-end',
		padding: 5,
		height: 40,
		width: '90%',
		backgroundColor: '#fff',
		margin: 10,
		shadowColor: '#3d3d3d',
		shadowRadius: 2,
		shadowOpacity: 0.5,
		shadowOffset: {
			height: 1,
		},
		borderColor: '#696969',
		borderWidth: 1,
		marginBottom: 40,
	},
	buttonContainer: {
		marginTop: 50,
	},
});
