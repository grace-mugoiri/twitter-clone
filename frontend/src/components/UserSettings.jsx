import axios from 'axios';
import React from 'react';
import Alert from './Alert';

class UserSettings extends React.Component {
	state = { currentSetting: "main", err: "" }
	componentDidMount() {
		if (!localStorage.getItem("token")) {
			window.location = "/login"
		}
	}
	changePassword = (e) => {
		e.preventDefault();
		axios.post("api/changepassword", {
			password: document.getElementById("password").value,
			npassword: document.getElementById("npassword").value
		}, {
				headers: {
				Authorization: "Bearer " + localStorage.getItem("token")
			}
		})
			.then(res => {
				if (res.data.errr) {
					this.setState(
					{err: res.data.error}
				)
				} else {
					alert("Password changed! Logging you out...")
					window.location = "/logout"
			}
		})
	}
	deleteAccount = (e) => {
		e.preventDefault();
		let x = window.confirm("Are you sure you want to delete your account? THIS CANNOT BE UNDONE. ALL OF YOUR POST WILL BE DEETED")
		if (x) {
			axios.delete("/api/deleteaccount", {
				headers: {
					Authorization: "Bearer " + localStorage.getItem("token")
				}
			})
				.then(res => {
					if (res.data.error) {
					alert("An error occured: " + res.data.error)
					} else {
						alert("Your account has been deleted. We are sad to see you go :( Now anyone can sign up with your username. Logging you out")
						window.location = "/logout"
				}
			})
		}
	}
	render() {
		return (
			<div className="w3-container" style={{ margin: "3rem" }}>
				<div className="w3-card w3-border w3-round-large">
					<header className="w3-container w3-xlarge w3-blue" style={{ padding: "0.5rem", paddingLeft: "3rem" }}>
						Settings
					</header>
					<div className="w3-container">
						{this.state.err.length > 0 && <Alert message={this.state.err} />}
						{this.state.currentSetting === "main" && <div style={{ margin: "1rem" }}>
							<h1 className="w3-xxlarge">Settings</h1>
							<hr className="w3-border-top w3-border-black" />
							<p>Choose a setting from below:</p>
							<ul className="w3-ul w3-border w3-hoverable">
								<li className="w3-hover-light-gray" onClick={() => this.setState({ currentSetting: "cpwd" })}
									style={{ cursor: "pointer" }}>Change password
								</li>
								<li className="w3-text-red w3-hover-pale-red w3-hover-text-red" onClick={() => this.setState({ currentSetting: "del" })}
									style={{ cursor: "pointer" }}>Delete account
								</li>
							</ul>
						</div>}
						{this.state.currentSetting === "cpwd" && <div style={{ margin: "1rem" }}>
							<h1 className="w3-xxlarge">Change password</h1>
							<hr className="w3-border-top w3-border-black" />
							<button className="w3-button w3-blue"
								onClick={() => this.setState({ currentSetting: "main" })}>&laquo; Back
							</button>
							<form onSubmit={this.changePassword}>
								<p>
									<label htmlFor="password">Old password</label>
									<input type="password" id="password" className="w3-input w3-border" />
								</p>
								<p>
									<label htmlFor="npassword">New password</label>
									<input type="npassword" id="npassword" className="w3-input w3-border" />
								</p>
								<p>
									<button className="w3-button w3-blue" type="submit">Submit</button>
								</p>
							</form>
						</div>}
						{this.state.currentSetting === "del" && <div style={{ margin: "1rem" }}>
							<h1 className="w3-xxlarge w3-text-red">Delete account</h1>
							<hr className="w3-border-top w3-border-black" />
							<button className="w3-button w3-blue"
								onClick={() => this.setState({ currentSetting: "main" })}>&laquo; Back
							</button>
							<p>
								<button className="w3-button w3-red w3-large" onClick={this.deleteAccount}>DELETE ACCOUNT</button>
							</p>
						</div>}
					</div>
				</div>
				</div>
		)
	}
}
export default UserSettings;
