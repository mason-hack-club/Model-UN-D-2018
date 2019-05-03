import React from 'react';
import './NavBar.css';
import logo from '../Assets/munlogo.png';

class NavBar extends React.Component{
	render(){
		return(
		<div>
			<img onClick={(e) => {this.props.page(e, 0)}} 
			className="logo" src={logo} alt="logo"/>

			<ul className="outer">
			<li onClick={(e) => {this.props.page(e, 1)}} 
			className="inner">ABOUT
			</li>
			<li onClick={(e) => {this.props.page(e, 2)}} 
			className="inner">WMHSMUN
			</li>
			<li onClick={(e) => {this.props.page(e, 3)}} 
			className="inner">GIL CAMP
			</li>
			<li onClick={(e) => {this.props.page(e, 4)}} 
			className="inner">Contact Us
			</li>
			</ul>
		</div>
		);
	}
}

export default NavBar;
