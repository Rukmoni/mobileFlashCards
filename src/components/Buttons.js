import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
	const { onPress, title = 'Save', disabled= false } = props;
	const styleArr = disabled ? [styles.button, props.style, styles.buttonDisabled] : [styles.button, props.style];
    const noEvent=()=>{

    }
    return (
		<Pressable style={styleArr} onPress={disabled?noEvent:onPress}>
			<Text style={styles.text}>{title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 8,
		elevation: 3,
		backgroundColor: 'black',
		width: 250,
        height: 50,
        marginTop:5,
	},
	buttonDisabled: {
		opacity: 0.5,
	},
	text: {
		color: 'white',
	},
});
