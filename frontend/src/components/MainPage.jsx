import React from 'react';
import TweetItem from './TweetItem';

class MainPage extends React.Component {
	render() {
		let tweets = [
			{
				title: "Hello World",
				content: "Content for first tweet"
			},
			{
				title: "Second Title",
				content: "Content for second tweet"
			},
			{
				title: "Hello World",
				content: "Content for third tweet"
			},
			{
				title: "forth Title",
				content: "Content for forth tweet"
			},
		];
		return (
			<React.Fragment>
				<div className="w3-container w3-jumbo" style={{ margin: "3rem", paddingLeft: "1rem" }}>
					Tweets
				</div>
				<div className="w3-container">
					{tweets.map((item, index) => {
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
