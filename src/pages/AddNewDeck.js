import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../components/Buttons';
import { AddNewDeckToApi } from '../reduxStore/decksSlice';

const AddNewDeck = ({ navigation }) => {
	const [title, setTitle] = useState('');
	const [disabled, setDisabled] = useState(true);
	const dispatch = useDispatch();

	const addDeck = () => {
		setTitle('');
		dispatch(AddNewDeckToApi(title)).then(() => {
			navigation.navigate('Home');
		});
	};

	const onChange = (msg) => {
		let status = msg.length > 0;
		setDisabled(!status);
		setTitle(msg);
	};
	return (
		<View style={styles.container}>
			<Text style={styles.title}>What is the Title of your New Deck?</Text>
			<View style={styles.input}>
				<TextInput
					value={title}
					placeholderTextColor="#696969"
					onChangeText={(msg) => onChange(msg)}
					blurOnSubmit={false}
					placeholder="Type Deck Title"
					returnKeyType="send"
				/>
			</View>
			<View style={styles.buttonContainer}>
				<Button title="Add New Deck" onPress={addDeck} disabled={disabled} />
			</View>
		</View>
	);
};

export default AddNewDeck;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ebf0f7',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		padding: 20,
		textAlign: 'center',
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
