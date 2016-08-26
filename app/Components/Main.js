// Include React 
var React = require('react');

// Components
var BallparkControls = require('./Children/BallparkControls');
var Graph = require('./Children/Graph');

// Helper Function
var helpers = require('./utils/helpers.js');

var Main = React.createClass({
	render: function(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<BallparkControls />
					</div>
					<div className="col-md-6">
						<Graph />
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						
					</div>
				</div>
			</div>
			);
	}
});

module.exports = Main;