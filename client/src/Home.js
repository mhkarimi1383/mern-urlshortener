import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'reactstrap';
import './App.css';
import product from './product.jpg';
import icon from './icon.png';
import book from './book.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {Footer} from './Footer';                                                


export class Home extends Component {

	componentDidMount() {
		window.scrollTo(0,0);
	}

	
	render() {
		return (
		<div className='page'>	

			<div className='main' id='main'>
				<div className='statement'>
					<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec posuere sagittis augue rhoncus.</h1>
					<div className='btn-holder'>
						<Button color='primary'>IMPORTANT LINK</Button>
					</div>
				</div>
			</div>
			
			<div className='description'>
				<h2>SECTION TITLE</h2>
				<p>Nunc vulputate lobortis lectus, rutrum porttitor justo consequat at quisque mi odio, consectetur commodo.</p>
			</div>

			<div className='capstone-feature'>
				<Container><Row>
					<Col lg='4'>
						<h2>CAPSTONE TITLE</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam nunc aliquam magna suscipit, eu pharetra metus maximus. Nunc ac est posuere, pellentesque odio at, hendrerit justo. Donec in blandit urna. </p> 
						<p>Sed a nunc ut ex dignissim dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum suscipit sagittis. Proin in tellus lectus. Vivamus quis erat diam. Donec et ligula commodo, pretium ligula a, ornare dolor.</p>
					</Col>
					<Col lg='8' className='product-col'>
						<img className='product' src={product}/>
					</Col>
				</Row></Container>
			</div>

			<div className='features-header'>
				<h2>FEATURES</h2>
				<p>Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis id tortor a iaculis.</p>
			</div>

			<div className='features'>
				<Container>
					<Row>
						<Row>
						<Col xs='2' md='1'>
							<div className='feature-icon'><img src={icon}/></div>
						</Col>
						<Col xs='10' md='5'>
							<div className='feature-desc'>
								<h3>Feature Name</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis id tortor a iaculis. Pellentesque volutpat urna vitae justo dictum imperdiet. </p>
							</div>
						</Col>

						
						<Col xs='2' md='1'>
							<div className='feature-icon'><img src={icon}/></div>
						</Col>
						<Col xs='10' md='5'>
							<div className='feature-desc'>
								<h3>Feature Name</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis id tortor a iaculis. Pellentesque volutpat urna vitae justo dictum imperdiet. </p>
							</div>
						</Col>
						</Row>
					</Row>
					
					<Row>
						<Row>
						<Col xs='2' md='1'>
							<div className='feature-icon'><img src={icon}/></div>
						</Col>
						<Col xs='10' md='5'>
							<div className='feature-desc'>
								<h3>Feature Name</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis id tortor a iaculis. Pellentesque volutpat urna vitae justo dictum imperdiet. </p>
							</div>
						</Col>

						
						<Col xs='2' md='1'>
							<div className='feature-icon'><img src={icon}/></div>
						</Col>
						<Col xs='10' md='5'>
							<div className='feature-desc'>
								<h3>Feature Name</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis id tortor a iaculis. Pellentesque volutpat urna vitae justo dictum imperdiet. </p>
							</div>
						</Col>
						</Row>
					</Row>

					<Row>
						<Row>
						<Col xs='2' md='1'>
							<div className='feature-icon'><img src={icon}/></div>
						</Col>
						<Col xs='10' md='5'>
							<div className='feature-desc'>
								<h3>Feature Name</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis id tortor a iaculis. Pellentesque volutpat urna vitae justo dictum imperdiet. </p>
							</div>
						</Col>

						
						<Col xs='2' md='1'>
							<div className='feature-icon'><img src={icon}/></div>
						</Col>
						<Col xs='10' md='5'>
							<div className='feature-desc'>
								<h3>Feature Name</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis id tortor a iaculis. Pellentesque volutpat urna vitae justo dictum imperdiet. </p>
							</div>
						</Col>
						</Row>
					</Row>
				</Container>
			</div>

			<div className='additional-product'>
				<h2>ADDITIONAL RELEVANT PRODUCT</h2>
				<p>Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis id tortor a iaculis.</p>
				<div className='btn-holder'>
					<Button color='primary'>LEARN MORE</Button>
				</div>
			</div>

			<div className='defining-value'>
				<h2>IMPORTANT VALUE</h2>
				<p>Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis id tortor a iaculis.</p>
			</div>

			<div className='product-giveaway'>
				<Container><Row>
					<Col sm='7'>
						<h2>FREE PRODUCT</h2>
						<p>Fusce ut leo purus. Morbi consequat dui at ligula blandit, quis aliquet magna consectetur. Quisque mollis id tortor a iaculis.</p>
						<div className='btn-holder'>
							<Button color='primary'>DOWNLOAD</Button>
						</div>
					</Col>
					<Col sm='5' className='product-col'>
						<img src={book}/>
					</Col>
				</Row></Container>
			</div>

			<div className='ending'>
				<Container><Row>
					<Col lg='4'>
						<div className='quantifiable'>
							<FontAwesomeIcon icon={faCoffee} size='2x' transform='grow-7'/>
							<h2>39%</h2>
							<h3>Increase in sales</h3>
						</div>
					</Col>
					<Col lg='4'>
						<div className='quantifiable'>
							<FontAwesomeIcon icon={faCoffee} size='2x' transform='grow-7'/>
							<h2>99%</h2>
							<h3>Customer Satisfaction</h3>
						</div>
					</Col>
					<Col lg='4'>
						<div className='quantifiable'>
							<FontAwesomeIcon icon={faCoffee} size='2x' transform='grow-7'/>
							<h2>385000</h2>
							<h3>Bookings</h3>
						</div>
					</Col>
				</Row></Container>
			</div>

			<Footer/>

		</div>
	    );
  }
}