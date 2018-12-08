import React from 'react';
import './HomePage.css';
import Logo from  '../Assets/munlogo.png';
import NavBar from '../NavBar/NavBar.js';

class HomePage extends React.Component{
	render(){
		return(
		<div>
			<img className="logo" 
			src={Logo} 
			alt="Model UN"/>
			<NavBar page={this.props.page}/>
		</div>
		);
	}
}

export default HomePage;
