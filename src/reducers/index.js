import { combineReducers } from 'redux';
import { reducer as fromReducer } from 'redux-form';
import PalindromesReducer from './reducer_palindromes';

//setting up reducers and also Redux form reducer
const rootReducer = combineReducers({
	palindromes: PalindromesReducer,
	form: fromReducer
});

export default rootReducer;
