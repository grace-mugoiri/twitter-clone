import React from 'react';
import '../assets/styles/topbar.css';
import '../assets/images/GraceMugoiriPic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhotoVideo, faPollH, faSmileBeam, faCalendarAlt, faRetweet, faShare, faHeart, faComment, faVideo, faHashtag, faPlus, faHome, faBell, faEllipsisH, faBookmark, faEnvelope, faListAlt, faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, } from '@fortawesome/free-brands-svg-icons';
function Home() {
  return (
    <>
      <div className="row">
        <div className="column-one">
          <div className="css-3">
            <a href="/api/tweets" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
					<div className="css-3">
						<a href="/api/tweets" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faHome} />
						</a>
					<div className="css-3">
						<a href="/api/tweets" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faHashtag} />
						</a>
					<div className="css-3">
						<a href="/api/tweets" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faBell} />
						</a>
					<div className="css-3">
						<a href="/api/tweets" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faEnvelope} />
						</a>
					<div className="css-3">
						<a href="/api/tweets" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faBookmark} />
						</a>
					<div className="css-3">
						<a href="/api/tweets" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faListAlt} />
						</a>
					<div className="css-3">
						<a href="/api/tweets" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faUserCircle} />
						</a>
					<div className="css-3">
						<a href="/api/tweets" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faEllipsisH} />
						</a>
					<div>
						<button className="add-tweet-plus">
							<FontAwesomeIcon icon={faPlus} />
						</button>
					</div>

					</div>
					</div>
					</div>
					</div>
					</div>
					</div>
					</div>
					</div>
					</div>

        </div>
        <div className="column-two">
          <div className="css-3">
            <div id="topbar">
              Home
              <div id="profile-tile" />
              <div id="trending-tile" />
              <div id="notice-tile" />
              <div id="follow-tile" />
              <div id="links-tile" />

            </div>
          </div>
          <hr />

          <div className="image">
            <a href="/profile"><img src="../assets/images/GraceMugoiriPic.jpg" alt="" /></a>
            <div className="css-3">
              What's happening?
              <div className="css-3-others">
                <a href="/api/tweets">
                  <FontAwesomeIcon icon={faPhotoVideo} />
                </a>
                <div className="css-3-others">
                  <a href="/api/tweets">
                    <FontAwesomeIcon icon={faVideo} />
                  </a>
                  <div className="css-3-others">
                    <a href="/api/tweets">
                      <FontAwesomeIcon icon={faPollH} />
                    </a>
                    <div className="css-3-others">
                      <a href="/api/tweets">
                        <FontAwesomeIcon icon={faSmileBeam} />
                      </a>

                      <div className="css-3-others">
                        <a href="/api/tweets">
                          <FontAwesomeIcon icon={faCalendarAlt} />
                        </a>
                        <button id="tweet-button">Tweet</button>
                        {/* <h1 className="w3-jumbo"> Twitter Clone </h1> */}
                        {/* <button className="w3-button w3-pink" style={{ marginRight: '1rem' }} onClick={() => (window.location = '/login')}>Login</button> */}
                        {/* <button className="w3-button w3-pink" onClick={() => (window.location = '/register')}> Register</button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
					<div className="article">
						<div><a href="/api" className="category">Computer Programming</a>
							<a href="/api" className="content" >
								<div className="photo"><img src="#" alt="" id="photo" />photo
								<span>
									<a href="/api">John Doe </a>
									<a href="/api">@JohnDoe </a>
									<span>16h</span>
								</span>

								<p>Lorem ipsum dolor sit amet</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, qui nesciunt nihil expedita laudantium enim ipsa numquam illum nam? Accusantium quas aliquid laudantium maxime consequuntur fugiat iusto vitae deleniti officiis?</p>
									<span className="likes">
										<a href="/api"><FontAwesomeIcon icon={faComment} />12</a>
										<a href="/api"><FontAwesomeIcon icon={faRetweet} />27</a>
										<a href="/api"><FontAwesomeIcon icon={faHeart} />212</a>
										<a href="/api"><FontAwesomeIcon icon={faShare} /></a>
								</span>
								</div>
								</a>
						</div>
					</div>
					<hr/>
					<div className="article">
						<div><a href="/api" className="category">Computer Programming</a>
							<a href="/api" className="content" >
								<div className="photo"><img src="#" alt="" id="photo" />photo
								<span>
									<a href="/api">Mary Stew </a>
									<a href="/api">@MaryStew </a>
									<span>16h</span>
								</span>

								<p>Lorem ipsum dolor sit amet</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, qui nesciunt nihil expedita laudantium enim ipsa numquam illum nam? Accusantium quas aliquid laudantium maxime consequuntur fugiat iusto vitae deleniti officiis?</p>
									<span className="likes">
										<a href="/api"><FontAwesomeIcon icon={faComment} />12</a>
										<a href="/api"><FontAwesomeIcon icon={faRetweet} />27</a>
										<a href="/api"><FontAwesomeIcon icon={faHeart} />212</a>
										<a href="/api"><FontAwesomeIcon icon={faShare} /></a>
								</span>
								</div>
								</a>
						</div>
					</div>
					<hr/>
					<div className="article">
						<div><a href="/api" className="category">Computer Programming</a>
							<a href="/api" className="content" >
								<div className="photo"><img src="#" alt="" id="photo" />photo
								<span>
									<a href="/api">Vin Tool </a>
									<a href="/api">@VinTool </a>
									<span>16h</span>
								</span>

								<p>Lorem ipsum dolor sit amet</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, qui nesciunt nihil expedita laudantium enim ipsa numquam illum nam? Accusantium quas aliquid laudantium maxime consequuntur fugiat iusto vitae deleniti officiis?</p>
									<span className="likes">
										<a href="/api"><FontAwesomeIcon icon={faComment} />12</a>
										<a href="/api"><FontAwesomeIcon icon={faRetweet} />27</a>
										<a href="/api"><FontAwesomeIcon icon={faHeart} />212</a>
										<a href="/api"><FontAwesomeIcon icon={faShare} /></a>
								</span>
								</div>
								</a>
						</div>
					</div>
					<hr/>
					<div className="article">
						<div><a href="/api" className="category">Computer Programming</a>
							<a href="/api" className="content" >
								<div className="photo"><img src="#" alt="" id="photo" />photo
								<span>
									<a href="/api">Vin Tool </a>
									<a href="/api">@VinTool </a>
									<span>16h</span>
								</span>

								<p>Lorem ipsum dolor sit amet</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, qui nesciunt nihil expedita laudantium enim ipsa numquam illum nam? Accusantium quas aliquid laudantium maxime consequuntur fugiat iusto vitae deleniti officiis?</p>
									<span className="likes">
										<a href="/api"><FontAwesomeIcon icon={faComment} />12</a>
										<a href="/api"><FontAwesomeIcon icon={faRetweet} />27</a>
										<a href="/api"><FontAwesomeIcon icon={faHeart} />212</a>
										<a href="/api"><FontAwesomeIcon icon={faShare} /></a>
								</span>
								</div>
								</a>
						</div>
					</div>
					<div className="article">
						<div><a href="/api" className="category">Computer Programming</a>
							<a href="/api" className="content" >
								<div className="photo"><img src="#" alt="" id="photo" />photo
								<span>
									<a href="/api">Vin Tool </a>
									<a href="/api">@VinTool </a>
									<span>16h</span>
								</span>

								<p>Lorem ipsum dolor sit amet</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, qui nesciunt nihil expedita laudantium enim ipsa numquam illum nam? Accusantium quas aliquid laudantium maxime consequuntur fugiat iusto vitae deleniti officiis?</p>
									<span className="likes">
										<a href="/api"><FontAwesomeIcon icon={faComment} />12</a>
										<a href="/api"><FontAwesomeIcon icon={faRetweet} />27</a>
										<a href="/api"><FontAwesomeIcon icon={faHeart} />212</a>
										<a href="/api"><FontAwesomeIcon icon={faShare} /></a>
								</span>
								</div>
								</a>
						</div>
					</div>
        </div>
        <div className="column-three">
						<div className="row-search">
              <input type="text" placeholder="Search Twitter" />
					</div>
					<br/>
            <div className="trends">
              <a href="/api" id="trends">Kenya Trends</a>
						<hr />
						<div className="trending-news">
              <div id="trending-news"><span> 1 </span></div>
              <div className="dot"><span> . </span></div>
              <div className="trending-name"><span> Trending </span></div>
              <span id="hash">#Google Devs</span>
              <div><span id="">3665 tweets</span></div>
							<hr />
							</div>
            </div>
            <div className="row-mid">
              Who to follow
              <img src="#" alt="" />
              <span>AliPay</span>
              <span>@alipay</span>
              <button>Follow</button>
            </div>

        </div>
      </div>
    </>
  );
}

export default Home;
