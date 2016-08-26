// Include React 
var React = require('react');

var Graph = React.createClass({
	getInitialState: () => {
		return {
			graph: "http://www.chartholdr.io/line/450/300"
		}
	},
	render: function(){
		return(
				<img src={this.state.graph} />
			)
	}
});

module.exports = Graph;