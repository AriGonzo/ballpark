// Include React 
var React = require('react');

// Dependencies
var moment = require('moment');

// Components
var AddExpenseModal = require('../Modals/AddExpenseModal');

// Helper Function
var helpers = require('../utils/helpers.js');

var BallparkControls = React.createClass({
	getInitialState: () => {
		var dateNow = moment(Date.now()).format('dddd MMMM Do YYYY')
		return {
			date: dateNow,
			showModal: false,
			fundsAmount: '$6,315'
		}
	},

	handleClick: function() {
		this.setState({ showModal: true });
	},

	save: function(){
		this.close();
	},

	close: function() {
		this.setState({ showModal: false });
	},

	render: function(){
		return (
				<div className="balanceAndControls">
					<h2>{this.state.date}</h2>
					<h3>Current Balance</h3>
					<h2>{this.state.fundsAmount}</h2>
					<div className="actionContainer">
						<a href="javascript:void(0)" onClick={this.handleClick}><h4><i className="fa fa-plus"></i> Add Expense/Asset</h4></a>
						<a href="javascript:void(0)"><h4><i className="fa fa-question"></i> Can I Buy?</h4></a>
						<a href="javascript:void(0)"><h4><i className="fa fa-clock-o"></i> Time Travel</h4></a>
					</div>
					<AddExpenseModal close={this.close} save={this.save} showModal={this.state.showModal} />
				</div>
			);
	}
})

module.exports = BallparkControls;