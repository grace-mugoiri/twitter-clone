import { Component } from 'react';
import axios from 'axios';

class Register extends Component {
	register = (e) => {
		e.preventDefault();
		axios.post("http://localhost:5000/api/register",
			{
				email: document.getElementById("email").value,
				username: document.getElementById("username").value,
				pwd: document.getElementById("password").value,
			})
			.then((res) => {
					console.log(res.data);
				});
	};

	render() {
		return (
			<div className="w3-card-4" style={{ margin: "2rem" }}>
				<div className="w3-container w3-blue w3-center w3-xlarge">REGISTER</div>
				<div className="w3-container">
					<form onSubmit={this.register}>
						<p>
							<label htmlFor="email">Email</label>
							<input type="email" class="w3-input w3-border" id="email"/>
						</p>
						<p>
							<label htmlFor="username">Username</label>
							<input type="username" class="w3-input w3-border" id="username"/>
						</p>
						<p>
							<label htmlFor="password">Password</label>
							<input type="password" class="w3-input w3-border" id="password"/>
						</p>
						<p>
							<button className="w3-button w3-blue" type="submit">Register</button>
						</p>
					</form>
				</div>
			</div>
		)
	}
}

export default Register;
