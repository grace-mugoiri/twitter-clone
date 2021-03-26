import React, { Component } from "react";
import axios from 'axios';
import Alert from './Alert';
import { login, check } from '../login';


class Login extends Component {
	state = { err: "" };
	componentDidMount() {
		check().then(r => {
			if (r) {
			window.location = "/"
		}})
	}
    login = (e) => {
		e.preventDefault();
		axios.post("/api/login",
			{
				email: document.getElementById("email").value,
				pwd: document.getElementById("password").value,
			})
			.then((res) => {
				if (res.data.error) {
					this.setState({ err: res.data.error });
				}
				else {
					window.location = "/home"
				}
				});
	};

    render() {
        return (
            <div className="w3-card-4" style={{ margin: "2rem" }}>
                <div className="w3-container w3-blue w3-center w3-xlarge">
                    LOGIN
                </div>
				<div className="w3-container">
					{this.state.err.length > 0 && (
						<Alert message={`Check your form and try again! (${this.state.err})`} />
					)}
                    <form onSubmit={this.login}>
                        <p>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="w3-input w3-border"
                                id="email"
                            />
                        </p>
                        <p>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="w3-input w3-border"
                                id="password"
                            />
                        </p>
                        <p>
                            <button type="submit" className="w3-button w3-blue">
								Login
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
