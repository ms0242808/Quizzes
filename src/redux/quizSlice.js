import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	username: '',
	answers: []
};

export const quizlice = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		updateuserName: (state, action) => {
			state.username = action.payload;
		},
		updateAnswers: (state, action) => {
			state.answers = action.payload;
		},
		resetAll: (state, action) => {
			state = initialState;
		}
	}
});

// Action creators are generated for each case reducer function
export const { updateuserName, updateAnswers, resetAll } = quizlice.actions;

export default quizlice.reducer;
