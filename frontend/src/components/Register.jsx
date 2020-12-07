import React, { Component } from 'react';
import { check } from '../login'
import axios from 'axios';
import Alert from './Alert';

class Register extends Component {
	state = { err: "" };
	componentDidMount() {
		check().then(r => {
			if (r) {
			window.location = "/"
		}})
	}

	register = (e) => {
		e.preventDefault();
		axios.post("/api/register",
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
					window.location = "/login"
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
							<input type="email" placeholder="email.com" className="w3-input w3-border" id="email"/>
						</p>
						<p>
							<label htmlFor="username">Username</label>
							<input type="username" className="w3-input w3-border" id="username"/>
						</p>
						<p>
							<label htmlFor="password">Password</label>
							<input type="password" placeholder="****" className="w3-input w3-border" id="password"/>
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
