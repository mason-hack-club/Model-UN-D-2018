import React from 'react';
import './App.css';
import HomePage from './HomePage/HomePage.js';
import ClubPage from './ClubPage/ClubPage.js';
import WMHSMUNIV from './WMHSMUNIV/WMHSMUNIV.js';
import GILCAMP from './GIL_Camp/GILCAMP.js';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {page: 0};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e, pagenum){
		e.preventDefault();
		this.setState({page: pagenum});
	}

	render(){
		switch (this.state.page){
			case 1: return(<ClubPage page={this.handleClick}/>);
			case 2: return(<WMHSMUNIV page={this.handleClick}/>);
			case 3: return(<GILCAMP page={this.handleClick}/>);
			default: return(<HomePage page={this.handleClick}/>);
		}
	}
}

export default App;
