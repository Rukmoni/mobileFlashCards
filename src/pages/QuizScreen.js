import { View, Text, StyleSheet ,ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';
import QuizCard from '../components/QuizCard';
import Button from '../components/Buttons';

const QuizScreen = ({ navigation, route }) => {
	const deck = route.params.deckData;
	const [questions, setQuestions] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [currentMode, setCurrentMode] = useState('question');
	const [score, setScore] = useState(0);

	useEffect(() => {
		//console.log("route::",deck.questions)
		setQuestions(deck.questions);
	}, [deck]);
	const showAnswer = () => {
		setCurrentMode('answer');
	};
	const NextQuestion = (res) => {
		//console.log("result",res)
		if (res === 'correct') {
			if (!score) {
				setScore(1);
			} else {
				let newscore = score + 1;
				setScore(newscore);
				console.log('result', score);
			}
		}
		let next = currentQuestion + 1;
		if (next < questions.length) {
			setCurrentQuestion(next);
			setCurrentMode('question');
		} else {
			navigation.navigate('ResultScreen', { deckData: deck, score: score });
		}
	};

	return (
		<ScrollView style={styles.container}>
			<View style={styles.quizCardContainer}>
				<QuizCard question={questions[currentQuestion]} mode={currentMode} />
			</View>
			<View style={styles.buttonContainer}>
				<Text>
					{currentQuestion + 1} / {questions.length}
				</Text>
				<Button
					title="Show Answer"
					style={{ width: 200 }}
					onPress={showAnswer}
					disabled={currentMode !== 'question'}
				/>
				<Button
					title="Correct"
					style={{ width: 200, backgroundColor: 'green' }}
					onPress={() => NextQuestion('correct')}
					disabled={currentMode === 'question'}
				/>
				<Button
					title="Wrong"
					style={{ width: 200, backgroundColor: 'red' }}
					onPress={() => NextQuestion('wrong')}
					disabled={currentMode === 'question'}
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	quizCardContainer: {
		marginTop: 10,
		height: 350,
	},
	buttonContainer: {
		flex: 0.5,
		alignItems: 'center',
	
		
	},
});

export default QuizScreen;
