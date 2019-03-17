import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse,
  NavbarToggler} from 'reactstrap';

export class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
		isOpen: false
		};

		this.toggle = this.toggle.bind(this);
		this.closeNav = this.closeNav.bind(this);
	}


	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	closeNav() {
		if (this.state.isOpen == true) {
			this.toggle();
		}
	}


	render() {
	return (
		<div className='navbar-container'>
			<Navbar color='light' light expand='md'>
				<NavbarBrand href="/" className="mr-auto"><Link to="/">URL Shortener</Link></NavbarBrand>
				<NavbarToggler onClick={this.toggle} className='mr-2'/>
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav navbar className='ml-auto'>
						<NavItem>
							<Link to="/" className='padded-nav' onClick={this.closeNav} > Home </Link>
						</NavItem>

						<NavItem>
							<Link to="/about" className='padded-nav' onClick={this.closeNav} > About </Link>
						</NavItem>

						<NavItem>
							<Link to="/contact-us" className='padded-nav' onClick={this.closeNav} > Contact </Link>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
    );
  }
}