import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import PalindromeTest from './common/palindrome';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

//tests to check 20 cases of use PalindromeTest method
const PALINDROME_TEST = 'PalindromeTest';

describe(PALINDROME_TEST, () => {
  it(`${PALINDROME_TEST} () shuld return FALSE`, () => {    
    expect(PalindromeTest()).toBeFalsy();
  });
  it(`${PALINDROME_TEST} (null) shuld return FALSE`, () => {    
    expect(PalindromeTest(null)).toBeFalsy();
  });
  it(`${PALINDROME_TEST} ('') shuld return FALSE`, () => {    
    expect(PalindromeTest('')).toBeFalsy();
  });
  it(`${PALINDROME_TEST} (0) shuld return TRUE`, () => {    
    expect(PalindromeTest(0)).toBeTruthy();
  });
  it(`${PALINDROME_TEST} (1) shuld return TRUE`, () => {    
    expect(PalindromeTest(1)).toBeTruthy();
  });
  it(`${PALINDROME_TEST} (-1) shuld return TRUE`, () => {    
    expect(PalindromeTest(-1)).toBeTruthy();
  });
  it(`${PALINDROME_TEST} (11) shuld return TRUE`, () => {    
    expect(PalindromeTest(1)).toBeTruthy();
  });
  it(`${PALINDROME_TEST} (999) shuld return TRUE`, () => {    
    expect(PalindromeTest(999)).toBeTruthy();
  });
  it(`${PALINDROME_TEST} (2002) shuld return TRUE`, () => {    
    expect(PalindromeTest(2002)).toBeTruthy();
  });
  it(`${PALINDROME_TEST} ("Tsst") shuld return TRUE`, () => {    
    expect(PalindromeTest('Tsst')).toBeTruthy();
  });
  it(`${PALINDROME_TEST} ("Kayak") shuld return TRUE`, () => {    
    expect(PalindromeTest('Kayak')).toBeTruthy();
  });
  it(`${PALINDROME_TEST} ("Level") shuld return TRUE`, () => {    
    expect(PalindromeTest('Level')).toBeTruthy();
  });
  it(`${PALINDROME_TEST} ("I did, did I?") shuld return TRUE`, () => {    
    expect(PalindromeTest('I did, did I?')).toBeTruthy();
  });
  it(`${PALINDROME_TEST} ("Red rum, sir, is murder!") shuld return TRUE`, () => {    
    expect(PalindromeTest('Red rum, sir, is murder!')).toBeTruthy();
  });
  it(`${PALINDROME_TEST} (12) shuld return FALSE`, () => {    
    expect(PalindromeTest(12)).toBeFalsy();
  });
  it(`${PALINDROME_TEST} (911) shuld return FALSE`, () => {    
    expect(PalindromeTest(911)).toBeFalsy();
  });
  it(`${PALINDROME_TEST} ("Test") shuld return FALSE`, () => {    
    expect(PalindromeTest('Test')).toBeFalsy();
  });
  it(`${PALINDROME_TEST} ("Palindrome") shuld return FALSE`, () => {    
    expect(PalindromeTest('Palindrome')).toBeFalsy();
  });
  it(`${PALINDROME_TEST} ("Level1") shuld return FALSE`, () => {
    expect(PalindromeTest('Level1')).toBeFalsy();
  });
  it(`${PALINDROME_TEST} ("White rum, sir, is murder!") shuld return FALSE`, () => {
    expect(PalindromeTest('White rum, sir, is murder!')).toBeFalsy();
  });
});
