import React from 'react';
import './NavBar.css';

class NavBar extends React.Component{
	render(){
		return(
		<div>
		  <table>
		    <tr>
			<td className="head">ABOUT</td>
			<td className="head">WMHSMUN</td>
			<td className="head">GIL CAMP</td>
		    </tr>
		  </table>
		</div>
		);
	}
}

export default NavBar;
