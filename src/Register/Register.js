import React from 'react';
import './Register.css';
import Logo from  '../Assets/munlogo.png';
import NavBar from '../NavBar/NavBar.js';

class Register extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {type: 0};
		this.changeType = this.changeType.bind(this);	
	}

	changeType(e, formtype){
		e.preventDefault();
		this.setState({type: formtype});
	}

	render(){
		if (this.state.type === 1)
		return(
		<div>
			<img className="logo" 
			src={Logo} 
			alt="Model UN"/>
			<NavBar page={this.props.page}/>
			<div class="type">
			  <h2>Please choose a form of registration. 
			  (If you register as a delegation, delegates 
				should not register individually)</h2>
			  <p class="Button" onClick={(e) => {this.changeType(e, 1)}}>Delegation</p>
			  <p class="Button" onClick={(e) => {this.changeType(e, 2)}}>Individual</p>	
			</div>
			<br/>
			<div class="form">
			  <h1>Delegation Sign Up</h1>
			  <form id="delForm">
			  <h2>Email: *</h2>
			  <input id="email" type="text" maxlength="30" required/>
			  <h2>First Name of Advisor: *</h2>
			  <input id="fname" type="text" maxlength="30" required/>
			  <h2>Last Name of Advisor: *</h2>
			  <input id="lname" type="text" maxlength="30" required/>
			  <h2>School Name: *</h2>
			  <input id="school" type="text" maxlength="30" required/>
			  <h2>Type of Delegation: *</h2>
			  <input type="radio" name="deltype" value="HighSchool" checked/>High School
			  <input type="radio" name="deltype" value="MiddleSchool"/>Middle School
			  <h2>Number of Delegates: *</h2>
			  <input id="num" type="text" maxlength="30" required/>
			  <h2>Any food allergies? (Please state name of person, and allergy)</h2>
			  <input id="food" type="text" maxlength="30"/><br/>
			  <p className="submit">Submit</p> 
			  </form>
			</div>
		</div>
		);

		else if(this.state.type === 2)
		return(
		<div>
			<img className="logo" 
			src={Logo} 
			alt="Model UN"/>
			<NavBar page={this.props.page}/>
			<div class="type">
			  <h2>Please choose a form of registration. 
			  (If you register as a delegation, delegates 
				should not register individually)</h2>
			  <p class="Button" onClick={(e) => {this.changeType(e, 1)}}>Delegation</p>
			  <p class="Button" onClick={(e) => {this.changeType(e, 2)}}>Individual</p>	
			</div>
			<br/>
			<div class="form">
			  <h1>Individual Sign Up</h1>
			  <form id="indForm">
			  <h2>Email: *</h2>
			  <input id="email" type="text" maxlength="30" required/>
			  <h2>First Name: *</h2>
			  <input id="fname" type="text" maxlength="30" required/>
			  <h2>Last Name: *</h2>
			  <input id="lname" type="text" maxlength="30" required/>
			  <h2>School Name: *</h2>
			  <input id="school" type="text" maxlength="30" required/>
			  <h2>Grade: *</h2>
			  <input type="radio" name="deltype" value="6" checked/>6
			  <input type="radio" name="deltype" value="7"/>7
			  <input type="radio" name="deltype" value="8"/>8
			  <input type="radio" name="deltype" value="9"/>9
			  <input type="radio" name="deltype" value="10"/>10
			  <input type="radio" name="deltype" value="11"/>11
			  <input type="radio" name="deltype" value="12"/>12
			  <h2>Shirt Size: *</h2>
			  <input type="radio" name="shirt" value="S"/>S<br/>
			  <input type="radio" name="shirt" value="M"/>M<br/>
			  <input type="radio" name="shirt" value="L"/>L<br/>
			  <input type="radio" name="shirt" value="XL"/>XL<br/>
			  <h2>Any food allergies? (Please state name of person, and allergy)</h2>
			  <input id="food" type="text" maxlength="30"/><br/>
			  <p className="submit">Submit</p> 
			  </form>
			</div>
		</div>
		);

		else
		return(
		<div>
			<img className="logo" 
			src={Logo} 
			alt="Model UN"/>
			<NavBar page={this.props.page}/>
			<div class="type">
			  <h2>Please choose a form of registration. 
			  (If you register as a delegation, delegates 
				should not register individually)</h2>
			  <p class="Button" onClick={(e) => {this.changeType(e, 1)}}>Delegation</p>
			  <p class="Button" onClick={(e) => {this.changeType(e, 2)}}>Individual</p>	
			</div>
		</div>
		);

	}
}

export default Register;
