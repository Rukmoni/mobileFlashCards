import { View, ScrollView, SafeAreaView, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const DeckCard = ({ deck }) => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity onPress={() => navigation.navigate('DeckScreen', { deckId: deck.id })}>
		<View style={styles.card}>
		 <View>
				<Text style={styles.name}>{deck.title}</Text>
				<Text style={styles.count}>{deck.questions.length} cards</Text>
				</View>
		</View>
		</TouchableOpacity>
	);
};

const Decks = ({ data }) => {
	/// console.log("data:::",data)
	if (data.length === 0) {
		return 'No Decks to display!';
	}
	return (
		<SafeAreaView>
			<ScrollView style={styles.container}>
				<View style={styles.contentList}>
					{data.map((_deck) => (
						<DeckCard key={_deck.id} deck={_deck} />
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Decks;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		marginTop: 20,
		backgroundColor: '#ebf0f7',
	},
	contentList: {
		flex: 1,
		width: '100%',
	},
	cardContent: {
		marginLeft: 20,
		marginTop: 10,
	},

	card: {
		width: 330,
		height: 90,
		shadowColor: '#00000021',
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.37,
		shadowRadius: 7.49,
		elevation: 12,

		margin: 10,
		backgroundColor: 'white',
		borderLeftWidth: 5,
		borderLeftColor: 'green',
		padding: 10,
		flexDirection: 'row',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},

	name: {
		fontSize: 18,
		flex: 1,
		alignSelf: 'center',
		color: 'black',
		fontWeight: 'bold',
	},

	count: {
		fontSize: 14,
		flex: 1,
		alignSelf: 'center',
		color: '#6666ff',
	},
	followButton: {
		marginTop: 10,
		height: 35,
		width: 100,
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 30,
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: '#dcdcdc',
	},
	followButtonText: {
		color: '#dcdcdc',
		fontSize: 12,
	},
});
