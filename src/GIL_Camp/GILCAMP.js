import React from 'react';
import './GILCAMP.css';
import NavBar from '../NavBar/NavBar.js';

class GILCAMP extends React.Component{
	render(){
		return(
		<div>
			<NavBar page={this.props.page}/>
		</div>);
	}
}

export default GILCAMP;
