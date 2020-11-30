import React from 'react';
import TweetItem from './TweetItem';
import Axios from "axios";
import AddTweet from './AddTweet';

class MainPage extends React.Component {
	state = { tweets: [] }
	componentDidMount() {
		Axios.get("/api/tweets").then(res => {
			this.setState({ tweets: res.data })
		});
	}
	render() {
		return (
			<React.Fragment>
				<div className="w3-container w3-jumbo" style={{ margin: "3rem", paddingLeft: "1rem" }}>
					<h1>Tweets</h1>

				<button className="w3-button w3-blue w3-large" onClick={() => {
					document.getElementById("addTweet").style.display = "block"
				}}> Add tweet </button>
				</div>

				<AddTweet />
				
				<div className="w3-container">
					{this.state.tweets.length === 0 ? <p className="w3-xlarge w3-opacity" style={{ marginLeft: "2rem" }}>No tweets! Create one </p> : this.state.tweets.map((item, index) => {
						return (
							<TweetItem title={item.title} content={item.content} key={index} />
						);
					})}
				</div>
			</React.Fragment>
		)
	}
}
export default MainPage;
