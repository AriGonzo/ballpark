// Include React 
var React = require('react');

// Components
var AddExpenseModal = require('../Modals/AddExpenseModal');

// Helper Function
var helpers = require('../utils/helpers.js');

var BallparkControls = React.createClass({
	getInitialState: () => {
		return {
			date: "August 26, 2016",
			showModal: false
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
					<h2>$6,325</h2>
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