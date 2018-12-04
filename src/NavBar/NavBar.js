import React from 'react';
import './NavBar.css';

class NavBar extends React.Component{
	render(){
		return(
		<div>
			<ul className="outer">
			<li className="inner">ABOUT</li>
			<li className="inner">WMHSMUN</li>
			<li className="inner">GIL CAMP</li>
			</ul>
		</div>
		);
	}
}

export default NavBar;
