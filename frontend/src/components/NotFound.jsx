import React from 'react';

function NotFound() {
	return (
		<div className="w3-container w3-center" style={{ margin: "3rem" }}>
			<h1 className="w3-jumbo">404</h1>
			<p className="w3-xxlarge">
				The page you are searching for was not found.
				Double check your URL and try again!
			</p>
			<button className="3w-button w3-blue" type="button" onClick={() => window.location="/"}>&laquo; Back</button>
		</div>
	)
}
export default NotFound;
