import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Input } from 'reactstrap';
import './App.css';


export class UrlForm extends Component {

	// initialize our state 

	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	//passes changed value from form to Home.js
	handleChange() {
		this.props.handleFormChange(event.target.value);
	}

	//copies a shortened URL to keyboard
	handleClick() {
		//clear any selection
		if (window.getSelection) {window.getSelection().removeAllRanges();}

		//copy text in #shortened-url to clipboard
		let range = document.createRange();
		range.selectNode(document.getElementById('shortened-url'));
		window.getSelection().addRange(range);
		document.execCommand("copy");
		console.log("copied");

		//re-clear any selection
		if (window.getSelection) {window.getSelection().removeAllRanges();}
	}
	
	render() {
		return (
			<div className='form-container'>
				<Form inline id='url-form'>
					<Input id='url-input' type="text" name='url' placeholder="Paste a link to shorten it"
						onChange={this.handleChange}							
					/>
					<Button id='inline-button' color='primary' value="POST URL" 
						onClick={() => this.putDataToDB(this.state.urlToShorten)}
					>
						SHORTEN
					</Button>
				</Form>
			</div>	
		);
	}
}