import React from 'react';
import './WMHSMUNIV.css';
import NavBar from '../NavBar/NavBar.js';

class WMHSMUNIV extends React.Component{
	render(){
		return(
		<div>
			<NavBar page={this.props.page}/>
			<h1>Registration</h1>
			<h1>Conferences</h1>
			<h1>Committees</h1>
		</div>);
	}
}

export default WMHSMUNIV;
