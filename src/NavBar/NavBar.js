import React from 'react';
import './NavBar.css';

class NavBar extends React.Component{
	render(){
		return(
		<div>
			<ul className="outer">
			<li className="inner">
			   </li>
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
