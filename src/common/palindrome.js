export default (string) => {
	
	//check if it's a null or undefined
	if (string === null || string === undefined) return false;
	
	//remove special characters and make text lovercase and string for comparing 
	const re = /[^A-Za-z0-9]/g;
	string = String(string).toLowerCase().replace(re, '');
	
	//check length of trimed text
	const n = string.length;
	if (n < 1) return false;
	
	//check if first part of the text is the same as secound one
	//in general palindrome check loop
	for (let i = 0; i < n / 2; i++) {
		if (string[i] !== string[n - i - 1]) {
			return false;
		}
	}
	
	//if loop didnt found not matching text it is a palindrome
	return true;
}