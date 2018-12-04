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
	}

	handleClick(e, pagenum){
		e.preventDefault();
		this.setState({page: pagenum});
	}

	render(){
		switch (this.state.page){
			case 1: return(<ClubPage/>);
			case 2: return(<WMHSMUNIV/>);
			case 3: return(<GILCAMP/>);
			default: return(<HomePage/>);
		}
	}
}

export default App;
