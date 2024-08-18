import { store, dispatch } from '../redux/store';
import { updateuserName, updateAnswers, resetAll } from '../redux/quizSlice';

const getUsername = () => store.getState().userVal.username;

const getUseranswers = () => store.getState().userVal.answers;

const updateUsername = (name) => dispatch(updateuserName(name));

const updateUseranswers = (ans) => dispatch(updateAnswers(ans));

const resetState = () => dispatch(resetAll());

export { getUsername, getUseranswers, updateUsername, updateUseranswers, resetState };
