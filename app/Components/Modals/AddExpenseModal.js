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
			            <Modal.Title>New Expense/Asset</Modal.Title>
			          </Modal.Header>
			          <Modal.Body>
			          	<div className="row">
				          	<div className="col-md-6">
				          		<label for="title">Title</label>
				          		<input className="form-control" id="title" />
			          		</div>
			          		<div className="col-md-6">
			          			<label>Type </label>
				          		<div className="expenseType">
				          			<form>
									    <label className="radio-inline">
									      <input type="radio" name="expenseType" />Expense
									    </label>
									    <label className="radio-inline">
									      <input type="radio" name="expenseType" />Asset
									    </label>
								    </form>
				          		</div>
			          		</div>
		          		</div>
		          		<div className="row">
		          			<div className="col-md-6">
				          		<label for="amount">Amount</label>
				          		<input className="form-control" id="amount" />
			          		</div>
			          		<div className="col-md-6">
								<label for="term">Expense Term</label>
				          		<select className="form-control" id="term">
				          			<option>Choose One</option>
				          			<option value="once">One Time</option>
				          			<option value="biWeekly">Bi-Weekly</option>
				          			<option value="short-term">Short-Term</option>
				          			<option value="monthly">Monthly</option>
			          			</select>
			          		</div>
		          		</div>
		          		<div className="row">
		          			<div className="col-md-6">
				          		<label for="start">Start Date</label>
				          		<input className="form-control" id="start" />
				          	</div>
				          	<div className="col-md-6">
				          		<label for="end">End Date</label>
				          		<input placeholder="Leave blank if continuous" className="form-control" id="end" />
				          	</div>
			          	</div>
			          </Modal.Body>
			          <Modal.Footer>
			            <Button onClick={this.props.close}>Close</Button>
			            <Button onClick={this.props.save}>Save</Button>
			          </Modal.Footer>
			        </Modal>
				</div>
			)
	}
});

module.exports = AddExpenseModal;