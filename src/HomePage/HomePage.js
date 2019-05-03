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
		this.interval = setInterval(()=>{
			if (this.state.image + 1 > 5){
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
		let file = require("../Assets/Photos/" + this.state.image.toString() + ".jpg");
		return(
		<div>
			<NavBar page={this.props.page}/>
			<img class="slideshow" src={file} alt="images"/>	
		</div>
		);
	}
}

export default HomePage;
