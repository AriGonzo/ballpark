// Include React 
var React = require('react');
import {Modal, Button} from 'react-bootstrap/lib'

// Helper Function
var helpers = require('../utils/helpers.js');

var AddExpenseModal = React.createClass({
	render: function(){
		return (
				<div>
					<Modal show={this.props.showModal} onHide={this.props.close}>
			          <Modal.Header closeButton>
			            <Modal.Title>Add Expense/Asset</Modal.Title>
			          </Modal.Header>
			          <Modal.Body>

			          </Modal.Body>
			          <Modal.Footer>
			            <Button onClick={this.props.close}>Close</Button>
			          </Modal.Footer>
			        </Modal>
				</div>
			)
	}
});

module.exports = AddExpenseModal;