// Include React 
var React = require('react');

// Helper Function
var helpers = require('../utils/helpers.js');

var BallparkControls = React.createClass({
	getInitialState: () => {
		return {
			date: "August 26, 2016"
		}
	},

	render: function(){
		return (
				<div className="balanceAndControls">
					<h2>{this.state.date}</h2>
					<h3>Current Balance</h3>
					<h2>$6,325</h2>
					<div className="actionContainer">
						<a href="javascript:void(0)"><h4><i className="fa fa-plus"></i> Add Expense/Asset</h4></a>
						<a href="javascript:void(0)"><h4><i className="fa fa-question"></i> Can I Buy?</h4></a>
						<a href="javascript:void(0)"><h4><i className="fa fa-clock-o"></i> Time Travel</h4></a>
					</div>
				</div>
			);
	}
})

module.exports = BallparkControls;