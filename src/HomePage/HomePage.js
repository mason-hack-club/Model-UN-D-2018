import React from 'react';
import './HomePage.css';
import NavBar from '../NavBar/NavBar.js';

class HomePage extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			image: 1
		};
	}

	componentDidMount(){	
		var result = null;
  		var filePath = require("../Assets/Photos/names.txt");
		var xmlhttp = new XMLHttpRequest();
  		xmlhttp.open("GET", filePath, false);
  		xmlhttp.send();
  		if (xmlhttp.status === 200) {
    			result = xmlhttp.responseText;
  		}
		var lines = result.split("\n");
		this.interval = setInterval(()=>{
			if (this.state.image + 1 > lines.length - 1){
				this.setState({image: 1});
			}
			else{
				this.setState({image: this.state.image + 1});
			}
		}, 3500);
	}
	
	componentWillUnmount(){
		clearInterval(this.interval);
	}	

	render(){
		var result = null;
  		var filePath = require("../Assets/Photos/names.txt");
		var xmlhttp = new XMLHttpRequest();
  		xmlhttp.open("GET", filePath, false);
  		xmlhttp.send();
  		if (xmlhttp.status === 200) {
    			result = xmlhttp.responseText;
  		}
		var lines = result.split("\n");
		let file = require("../Assets/Photos/" + lines[this.state.image - 1]);
		return(
		<div>
			<NavBar page={this.props.page}/>
			<img class="slideshow" src={file} alt="images"/>	
		</div>
		);
	}
}

export default HomePage;
