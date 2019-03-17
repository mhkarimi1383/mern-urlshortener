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

	// initialize our state 

	constructor(props) {
		super(props);

		this.state = {
			data: [],
			id: 0,
			message: null,
			intervalIsSet: false,
			idToDelete: null,
			idToUpdate: null,
			objectToUpdate: null
		};

		/*this.getDataFromDb = this.getDataFromDb.bind(this);
		this.putDataToDB = this.putDataToDB.bind(this);
		this.deleteFromDB = this.deleteFromDB.bind(this);
		this.updateDB = this.updateDB.bind(this);*/
	}

	// when component mounts, first thing it does is fetch all existing data in our db
	// then we incorporate a polling logic so that we can easily see if our db has 
	// changed and implement those changes into our UI
	componentDidMount() {
		window.scrollTo(0,0);

		this.getDataFromDb();
		if (!this.state.intervalIsSet) {
			let interval = setInterval(this.getDataFromDb, 1000);
			this.setState({ intervalIsSet: interval });
		}
	}

	// never let a process live forever 
	// always kill a process everytime we are done using it
	componentWillUnmount() {
		if (this.state.intervalIsSet) {
			clearInterval(this.state.intervalIsSet);
			this.setState({ intervalIsSet: null });
		}
	}

	// our first get method that uses our backend api to 
	// fetch data from our data base
	getDataFromDb = () => {
		fetch("/api/getData")
			.then(data => data.json())
			.then(res => this.setState({ data: res.data }))
			.then(console.log(this.state.data));
	};

	// our put method that uses our backend api
	// to create new query into our data base
	putDataToDB = message => {
		let currentIds = this.state.data.map(data => data.id);
		let idToBeAdded = 0;
		while (currentIds.includes(idToBeAdded)) {
			++idToBeAdded;
		}

		axios.post("/api/putData", {
			id: idToBeAdded,
			message: message
		});
	};

	// our delete method that uses our backend api 
	// to remove existing database information
	deleteFromDB = idTodelete => {
		let objIdToDelete = null;
		this.state.data.forEach(dat => {
			if (dat.id == idTodelete) {
				objIdToDelete = dat._id;
			}
		});

		console.log(objIdToDelete);

		axios.delete("/api/deleteData", {
			data: {
				id: objIdToDelete
			}
		});
	};

	// our update method that uses our backend api
	// to overwrite existing data base information
	updateDB = (idToUpdate, updateToApply) => {
		let objIdToUpdate = null;
		this.state.data.forEach(dat => {
			if (dat.id == idToUpdate) {
				objIdToUpdate = dat._id;
			}
		});

		axios.post("/api/updateData", {
			id: objIdToUpdate,
			update: { message: updateToApply }
		});
	};


	
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


/*
	render() {

	    const { data } = this.state;
	    
	    return (
			<div>
				<ul>
					{data.length <= 0
						? "NO DB ENTRIES YET"
						: data.map(dat => (
							<li style={{ padding: "10px" }} key={data.message}>
								<span style={{ color: "gray" }}> id: </span> {dat.id} <br />
								<span style={{ color: "gray" }}> data: </span>
								{dat.message}
							</li>
						))}
				</ul>
				<div style={{ padding: "10px" }}>
					<input
						type="text"
						onChange={e => this.setState({ message: e.target.value })}
						placeholder="add something in the database"
						style={{ width: "200px" }}
					/>
					<button onClick={() => this.putDataToDB(this.state.message)}>
						ADD
					</button>
				</div>
				<div style={{ padding: "10px" }}>
					<input
						type="text"
						style={{ width: "200px" }}
						onChange={e => this.setState({ idToDelete: e.target.value })}
						placeholder="put id of item to delete here"
					/>
					<button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
						DELETE
					</button>
				</div>
				<div style={{ padding: "10px" }}>
					<input
						type="text"
						style={{ width: "200px" }}
						onChange={e => this.setState({ idToUpdate: e.target.value })}
						placeholder="id of item to update here"
					/>
					<input
						type="text"
						style={{ width: "200px" }}
						onChange={e => this.setState({ updateToApply: e.target.value })}
						placeholder="put new value of the item here"
					/>
					<button
						onClick={() =>
							this.updateDB(this.state.idToUpdate, this.state.updateToApply)
							}
						>
							UPDATE
						</button>
				</div>
			</div>
		);
	}
}
*/