import { Component } from 'react';
import axios from 'axios';
import Alert from './Alert';

class Register extends Component {
	state = { err: "" };

	register = (e) => {
		e.preventDefault();
		axios.post("http://localhost:5000/api/register",
			{
				email: document.getElementById("email").value,
				username: document.getElementById("username").value,
				pwd: document.getElementById("password").value,
			})
			.then((res) => {
				if (res.data.error) {
					this.setState({ err: res.data.error });
				}
				else {
					this.setState({ register: true })
				}
				});
	};

	render() {
		return (
			<div className="w3-card-4" style={{ margin: "2rem" }}>
				<div className="w3-container w3-blue w3-center w3-xlarge">REGISTER</div>
				<div className="w3-container">
					{this.state.err.length > 0 && (
						<Alert message={`Check your form and try again! (${this.state.err})`} />
					)}
					<form onSubmit={this.register}>
						<p>
							<label htmlFor="email">Email</label>
							<input type="email" className="w3-input w3-border" id="email"/>
						</p>
						<p>
							<label htmlFor="username">Username</label>
							<input type="username" className="w3-input w3-border" id="username"/>
						</p>
						<p>
							<label htmlFor="password">Password</label>
							<input type="password" className="w3-input w3-border" id="password"/>
						</p>
						<p>
							<button className="w3-button w3-blue" type="submit">Register</button>
							{this.state.register && <p>You are registered!</p>}
						</p>
					</form>
				</div>
			</div>
		)
	}
}

export default Register;
