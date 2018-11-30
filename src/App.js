import React from 'react';
import './App.css';
import Logo from  './.Assets/munlogo.png';
import NavBar from './NavBar/NavBar.js';
import Button from './Buttons/Button.js';

class App extends React.Component{
	render(){
		return(
		<div>
			<img className="logo" src={Logo} alt="Model UN"/>
			<NavBar />
			<Button />
		</div>
		);
	}
}

export default App;
