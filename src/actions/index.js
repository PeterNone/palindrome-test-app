import axios from 'axios';
import PalindromeTest from '../common/palindrome';

//get const types for actions
import { ADD_PALINDROME, FETCH_PALINDROMES } from './types';

//json-server api url, proxy setting in package.json
const ROOT_URL = '/api/palindromes';

//action to fetch all palindromes from api with axios as middleware
export const fetchPalindromes = () => {
	const request = axios.get(`${ROOT_URL}`);
	
	return {
		type: FETCH_PALINDROMES,
		payload: request
	};
};

//action to add palindrome to api with axios as middleware
export const addPalindrome = (value, callback) => {
	
	//create object to add to api
	const inputObject = {
		timestamp: Date.now(),
		user_input: value.palindrome,
		result: PalindromeTest(value.palindrome)
	}
	
	const request = axios.post(`${ROOT_URL}`, inputObject);
	
	return {
		type: ADD_PALINDROME,
		payload: request
	};
};
