// Include React 
var React = require('react');

// Components
var Sidebar = require('./Layout/Sidebar')

// Helper Function
var helpers = require('./utils/helpers.js');

var Main = React.createClass({
	render: function(){
		return (
			<div className="row">
				<div className="col-md-3">
					<Sidebar />
				</div>
				<div className="col-md-9">
				</div>
			</div>
			)
	}
});

module.exports = Main;