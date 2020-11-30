import React from 'react';

function AddTweet() {
	return (
		<div className="w3-modal w3-animate-opacity" id="addTweet">
			<div className="w3-modal-content w3-card">
				<header className="w3-container w3-blue">
					<span className="w3-button w3-display-topright w3-hover-none w3-hover-text-white" onClick={() => {
						document.getElementById("addTweet").style.dispaly = "none"
					}}>X</span>
				</header>
				<form className="w3-container">
					<div className="w3-section">
						<label htmlFor="title">Title</label>
						<input type="text" className="w3-input w3-border w3-margin-bottom" />
						<textarea cols="30" rows="10" />
					</div>
				</form>
			</div>
		</div>
	)

}
export default AddTweet;
