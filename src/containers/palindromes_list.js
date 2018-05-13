import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPalindromes } from '../actions';


class PalindromesList extends Component {
	//call api for initial palindromes array
	componentDidMount() {
		this.props.fetchPalindromes();
	}
	
	
	//return one item renderer
	renderList() {
		if (!this.props.list.length) {
			return(
				<tr>
					<td colSpan="5">
						No Palindromes
					</td>
				</tr>
			);
		}
		
		//make a shalow copy of array and reverse it just to have the newest entrys on the top.
		return this.props.list.slice(0).reverse().map((item, index) => {
			return(
				<tr key={item.id} className={(item.result) ? "success" : "danger"}>
					<th>{item.id}</th>
					<th>{new Date(item.timestamp).toLocaleString()}</th>
					<th>{item.user_input}</th>
					<th>{item.result.toString()}</th>
				</tr>
			);
		})
	}
	
	
	//Return template
	render() {
		return (
			<div className="col-xs-12 col-sm-6 m-b-lg">
				<h4>Previous checks</h4>
				<div className="table-responsive">
					<table className="table table-hover table-striped">
						<thead>
							<tr>
								<th>Id</th>
								<th>Time</th>
								<th>User Input</th>
								<th>Is Palidrome</th>
							</tr>
						</thead>
						<tbody>
							{this.renderList()}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}


//connect props with redux state
const mapStateToProps = ( state, ownProps ) => {
	return {
		list: state.palindromes
	};
};


export default connect( mapStateToProps, { fetchPalindromes } )( PalindromesList );
