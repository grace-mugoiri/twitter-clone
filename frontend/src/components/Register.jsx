import { Component } from 'react';

class Register extends Component {
	render() {
		return (
			<div className="w3-card-4" style={{ margin: "2rem" }}>
				<div className="w3-container w3-blue w3-center w3-xlarge">REGISTER</div>
				<div className="w3-container">
					<form action="">
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
