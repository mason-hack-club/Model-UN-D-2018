import React from 'react';
import './Contact.css';
import NavBar from '../NavBar/NavBar.js';

class Contact extends React.Component{
	
	render(){
		return(
		<div>
			<NavBar page={this.props.page}/>
			 <div class="container">
  			<form>
    				<label for="fname">First Name</label>
    				<input type="text" id="fname" name="firstname" placeholder="Lastname, Firstname"></input>
    				<label for="subject">Question</label>
    				<textarea style={{height: '30vh'}}id="subject" name="subject" 
					placeholder="We will answer anything within the next 48 hours"></textarea>
    				<input type="submit" value="Submit"></input>
  			</form>
			</div> 
		</div>
		);

	}
}

export default Contact;
