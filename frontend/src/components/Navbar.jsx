import React from 'react'

function Navbar() {
	return (
		<div className="w3-bar w3-black">
			<a href="/" className="w3-bar-item w3-button"> Twitter</a>
			<div style={{ float: "right"}}>
				<a href="/" className="w3-bar-item w3-button"> login</a>
				<a href="/" className="w3-bar-item w3-button"> Register</a>
			</div>
		</div>
	)
}
export default Navbar;
