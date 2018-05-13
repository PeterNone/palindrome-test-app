import React from 'react';

//Snippet to return component 
//just in case I would need props but no need for this in this test
const Nav = (props) => {
	return (
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-header">
					<div className="navbar-brand">
						Palindrome Test - <span className="small">Peter Kaczmarski</span>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
