import React from 'react';
import './App.css';
import Logo from  './.Assets/munlogo.png';
import NavBar from './NavBar/NavBar.js';

class App extends React.Component{
	render(){
		return(
		<div>
			<img className="logo" src={Logo} alt="Model UN"/>
			<NavBar />
		</div>
		);
	}
}

export default App;
