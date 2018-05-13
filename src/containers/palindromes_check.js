import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { addPalindrome } from '../actions';


class PalindromesCheck extends Component {
	
	
	renderTextInput(field) {
		
		//deconstructing values
		const { meta: { touched, error } } = field;
		
		//determin css error class
		const inputClass = `form-group ${touched && error ? ' has-error' : ''}`;
		
		//Return field template with error handlers
		return (
			<div className={inputClass}>
				<input
					type="text"
					className="form-control"
					placeholder="Enter text..."
					autoComplete="off"
					{...field.input}
					/>
					<div className="error-input text-danger small">
						{touched ? error : ''}
					</div>
			</div>
		);
	}
	
	
	onSubmit(values) {
		//Calling action creator after success form submition
		this.props.addPalindrome(values);
		
		//Clearing the form
		this.props.reset();
	}
	
	
	render() {
		//Asigning handle submit from props, redux form syntax
		const { handleSubmit } = this.props;
		
		//Returning form and using Redux Form Field input
		return (
			<div className="col-xs-12 col-sm-6 m-b-lg">
				<h4>Enter text to check if it's Palindrome Text</h4>
				<form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
					<div className="input-group">
						<Field
							name="palindrome"
							component={this.renderTextInput}
							/>
						<span className="input-group-btn">
							<button 
								className="btn btn-default btn-info" 
								type="submit">Check</button>
						</span>
					</div>
				</form>
			</div>
		);
	}
}


//Validating Redux Form
function validate(values) {
	const errors = {};
	
	//error checks
	if (!values.palindrome || values.palindrome.trim() === '') {
		errors.palindrome = 'No palindrome text';
	}
	
	return errors;
}


//Export with connected action and Form form redux form
export default reduxForm({
	validate,
	form: 'PalindromeCheckForm'
})(
	connect(
		null, 
		{ addPalindrome }
	)	( PalindromesCheck ) );
