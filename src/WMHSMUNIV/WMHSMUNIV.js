import React from 'react';
import './WMHSMUNIV.css';
import NavBar from '../NavBar/NavBar.js';

class WMHSMUNIV extends React.Component{
	render(){
		return(
		<div>
			<NavBar page={this.props.page}/>
		</div>);
	}
}

export default WMHSMUNIV;
