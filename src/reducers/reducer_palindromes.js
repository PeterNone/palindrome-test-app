import { FETCH_PALINDROMES, ADD_PALINDROME } from '../actions/types';

//Simple reducer to gett all and add new palindrome
export default function ( state = [], action ) {
	switch ( action.type ) {
		case FETCH_PALINDROMES:
			//this condition was needed for tests without the api in place
			if (action.payload.data && action.payload.data.length) {
				return [...state, ...action.payload.data];
			} else {
				return state;
			}
		case ADD_PALINDROME:			
			return [...state, action.payload.data ];
		default:
			return state;
	}
}