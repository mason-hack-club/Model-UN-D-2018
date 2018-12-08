import React from 'react';
import './ClubPage.css';
import NavBar from '../NavBar/NavBar.js';

class ClubPage extends React.Component{
	render(){
		return(
		<div>
			<NavBar page={this.props.page} />
			<h1>Conferences</h1>
			<h1>Leadership</h1>
			<h1>MI Enrichment</h1>
		</div>);
	}
}

export default ClubPage;
