import React from 'react';
import './GILCAMP.css';
import NavBar from '../NavBar/NavBar.js';

class GILCAMP extends React.Component{
	render(){
		return(
		<div>
			<NavBar page={this.props.page}/>
			<h1>About</h1>
			<h1>Model UN</h1>
			<h1>Schedule</h1>
			<h1>Staff</h1>
			<h1>Register</h1>
		</div>);
	}
}

export default GILCAMP;
