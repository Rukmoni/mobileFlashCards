import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Animated, TouchableWithoutFeedback, Text } from 'react-native';

const QuizCard = ({ question, mode }) => {
	const [currentQuestion, setCurrentQuestion] = useState('');
	const [currentAnswer, setCurrentAnswer] = useState('');
	const [currentMode, setCurrentMode] = useState('');
	useEffect(() => {
		if (question) {
			setCurrentQuestion(question['question']);
			setCurrentAnswer(question['answer']);
		}

		setCurrentMode(mode);
		// flipCard();
	}, [question, mode]);

	return (
		<View>
			{currentMode === 'question' ? (
				<View style={styles.paperFront}>
					<Text style={styles.title}>Question</Text>
					<Text style={styles.text}>{currentQuestion}</Text>
				</View>
			) : (
				<View style={styles.paperBack}>
					<Text style={styles.title}>Answer</Text>
					<Text style={styles.text}>{currentAnswer}</Text>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	paperFront: {
		marginHorizontal: 15,
		backgroundColor: '#16A085',
		minHeight: 300,
		borderRadius: 5,
		marginBottom: 15,
		shadowColor: '#00000021',
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.37,
		shadowRadius: 7.49,
		elevation: 12,
		justifyContent: 'center',
		alignItems: 'center',
	},
	paperBack: {
		marginHorizontal: 15,
		backgroundColor: '#ECF0F1',
		minHeight: 300,
		borderRadius: 5,
		marginBottom: 15,
		shadowColor: '#00000021',
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.37,
		shadowRadius: 7.49,
		elevation: 12,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		padding: 10,
		fontSize: 22,
		fontWeight: 'bold',
		color: 'orange',
	},
	text: {
		padding: 15,
		fontSize: 18,
		color: '#000',
	},
});

export default QuizCard;
