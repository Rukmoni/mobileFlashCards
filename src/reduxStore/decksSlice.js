import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../apiAccess/api';

export const getDecksfromApi = createAsyncThunk('decks/getDecks', async (payload, { dispatch }) => {
	const response = await api.getDecks();
	return response;
});
export const AddNewDeckToApi = createAsyncThunk('decks/addNewDeck', async (payload) => {
	const response = await api.addNewDeck(payload);
	return response;
});

export const AddNewCardToApi = createAsyncThunk('decks/addNewCardToDeck', async (payload) => {
	const response = await api.addCardToDeck(payload.deckId, payload.card);
	return response;
});
export const DeleteDeckFromApi = createAsyncThunk('decks/deleteDeck', async (payload) => {
	const response = await api.removeDeck(payload);
	return response;
});

const decksSlice = createSlice({
	name: 'decksState',
	initialState: {
		decks: [],
		loading: 'idle',
		loggedin: 'test',
	},
	reducers: {
		setDecks: (state, action) => {
			state.decks = action.payload;
		},
		addToDeck: (state, action) => {
			state.decks[action.payload.deckId].push(action.payload.card);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getDecksfromApi.pending, (state, action) => {
				state.loading = 'pending';
			})

			.addCase(getDecksfromApi.fulfilled, (state, action) => {
				state.decks = Object.values(action.payload);
				state.loading = 'fullfilled';
			})
			.addCase(AddNewDeckToApi.fulfilled, (state, action) => {
				state.decks.push(action.payload);
			})
			.addCase(AddNewCardToApi.fulfilled, (state, action) => {
				state.decks.find((deck) => deck.id === action.meta.arg.deckId)?.questions.push(action.payload);
			})
			.addCase(DeleteDeckFromApi.fulfilled, (state, action) => {
				state.decks = Object.values(action.payload);
			});
	},
});

export const { setDecks, addToDeck } = decksSlice.actions;

export default decksSlice.reducer;
