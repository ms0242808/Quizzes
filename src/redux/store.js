import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './quizSlice';

export const store = configureStore({
	reducer: {
		userVal: quizReducer
	}
});

export const getState = () => store.getState();

export const dispatch = (action) => store.dispatch(action);
