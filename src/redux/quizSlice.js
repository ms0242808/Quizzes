import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	title: 'Pick a date'
};

export const quizlice = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		updateTitle: (state, action) => {
			state.title = action.payload;
		}
	}
});

// Action creators are generated for each case reducer function
export const { updateTitle } = quizlice.actions;

export default quizlice.reducer;