import React from 'react';
import '../assets/styles/topbar.css';
import grace from '../assets/images/grace.jpg';
import curly from '../assets/images/curly.jpg';
import me from '../assets/images/me.jpg';
import pup from '../assets/images/pup.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhotoVideo, faPollH, faSmileBeam, faCalendarAlt, faRetweet, faShare, faHeart, faComment, faVideo, faHashtag, faPlus, faHome, faBell, faEllipsisH, faBookmark, faEnvelope, faListAlt, faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
function Home() {
  return (
    <>
      <div className="row">
        <div className="column-one">
					<div className="css-3">
						<nav aria-label="Primary" role="navigation" className="css-3">
							<a href="/home" className="anchor-tab css-3">
								<div className="css-3 anchor-div">
										<div className="css-3">
											<FontAwesomeIcon icon={faHome}
											/>
									</div>
										<div dir="auto" className="css-901oao ">
											<span className="css-901oao">Home</span>
										</div>
								</div>
							</a>
							<a href="/home" className="anchor-tab css-3">
								<div className="css-3 anchor-div">
										<div className="css-3">
											<FontAwesomeIcon icon={faHashtag}
											/>
									</div>
										<div dir="auto" className="css-901oao ">
											<span className="css-901oao">Explore</span>
										</div>
								</div>
							</a>
							<a href="/home" className="anchor-tab css-3">
								<div className="css-3 anchor-div">
										<div className="css-3">
											<FontAwesomeIcon icon={faBell}
											/>
									</div>
										<div dir="auto" className="css-901oao ">
											<span className="css-901oao">Notifications</span>
										</div>
								</div>
							</a>
							<a href="/home" className="anchor-tab css-3">
								<div className="css-3 anchor-div">
										<div className="css-3">
											<FontAwesomeIcon icon={faEnvelope}
											/>
									</div>
										<div dir="auto" className="css-901oao ">
											<span className="css-901oao">Messages</span>
										</div>
								</div>
							</a>
							<a href="/home" className="anchor-tab css-3">
								<div className="css-3 anchor-div">
										<div className="css-3">
											<FontAwesomeIcon icon={faUserCircle}
											/>
									</div>
										<div dir="auto" className="css-901oao ">
											<span className="css-901oao">Profile</span>
										</div>
								</div>
							</a>
							<a href="/home" className="anchor-tab css-3">
								<div className="css-3 anchor-div">
										<div className="css-3">
											<FontAwesomeIcon icon={faEllipsisH}
											/>
									</div>
										<div dir="auto" className="css-901oao ">
											<span className="css-901oao">More</span>
										</div>
								</div>
							</a>
							{/* <div aria-expanded="false" aria-haspopup="true" aria-label="More menu items" role="button" data-focusable="true" tabIndex="0" className="css-18t94o4 css-3 r-1habvwh r-6koalj r-eqz5dr r-16y2uox r-1ny4l3l r-rjfia r-13qz1uu" data-testid="AppTabBar_More_Menu">
								<div className="css-3 r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-xyw6el r-o7ynqc r-6416eg">
									<div className="css-3">
										<svg viewBox="0 0 24 24" className="r-1fmj7o5 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr">
											<g>
												<circle cx="17" cy="12" r="1.5" />
												<circle cx="12" cy="12" r="1.5" />
												<circle cx="7" cy="12" r="1.5" />
												<path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z" />
											</g>
										</svg>
									</div>
									<div dir="auto" className="css-901oao css-bfa6kz r-1fmj7o5 r-1qd0xha r-1b6yd1w r-b88u0q r-ad9z0x r-1joea0r r-88pszg r-bcqeeo r-qvutc0"><span className="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">More</span></div>
								</div>
							</div> */}
						</nav>
					</div>

        </div>
        <div className="column-two">
          <div className="css-3">
            <div id="topbar">
              Home

            </div>
          </div>
          <hr />

          <div className="image">
						<div className="image image-profile">
							<a href="/profile"><img src={grace} alt="" /></a>
						</div>
						<div className="css-3">
							<div className="css-3 happening">
								<span>
										What's happening?</span></div>
              <div className="css-3-others">
								<div className="css-icons">
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
          </div>
          <hr />
					<div className="image">
						<div className="image image-profile">
							<a href="/profile"><img src={ pup } alt="" id="photo" /></a>
							</div>
						<div className="css-3">
							<div className="css-3 happening">
								<a href="/api" id="happening-link">Computer Programming</a>
							</div>

								<div className="doe">
                    <a href="/api">John Doe @JohnDoe 16h</a>
							</div>
						</div>
						<div className="text">
                  <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
              </div>
							<span className="likes">
                    <a href="/api">
                      <FontAwesomeIcon icon={faComment} />
                      12
                    </a>
                    <a href="/api">
                      <FontAwesomeIcon icon={faRetweet} />
                      27
                    </a>
                    <a href="/api">
                      <FontAwesomeIcon icon={faHeart} />
                      212
                    </a>
                    <a href="/api"><FontAwesomeIcon icon={faShare} /></a>
                  </span>
          </div>
          <hr />
					<div className="image">
						<div className="image image-profile">
							<a href="/profile"><img src={ me } alt="" id="photo" /></a>
							</div>
						<div className="css-3">
							<div className="css-3 happening">
								<a href="/api" id="happening-link">Computer Programming</a>
							</div>

								<div className="doe">
                    <a href="/api">John Doe @JohnDoe 16h</a>
							</div>
						</div>
						<div className="text">
                  <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
              </div>
							<span className="likes">
                    <a href="/api">
                      <FontAwesomeIcon icon={faComment} />
                      12
                    </a>
                    <a href="/api">
                      <FontAwesomeIcon icon={faRetweet} />
                      27
                    </a>
                    <a href="/api">
                      <FontAwesomeIcon icon={faHeart} />
                      212
                    </a>
                    <a href="/api"><FontAwesomeIcon icon={faShare} /></a>
                  </span>
          </div>
          <hr />
					<div className="image">
						<div className="image image-profile">
							<a href="/profile"><img src={ curly } alt="" id="photo" /></a>
							</div>
						<div className="css-3">
							<div className="css-3 happening">
								<a href="/api" id="happening-link">Computer Programming</a>
							</div>

								<div className="doe">
                    <a href="/api">John Doe @JohnDoe 16h</a>
							</div>
						</div>
						<div className="text">
                  <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
              </div>
							<span className="likes">
                    <a href="/api">
                      <FontAwesomeIcon icon={faComment} />
                      12
                    </a>
                    <a href="/api">
                      <FontAwesomeIcon icon={faRetweet} />
                      27
                    </a>
                    <a href="/api">
                      <FontAwesomeIcon icon={faHeart} />
                      212
                    </a>
                    <a href="/api"><FontAwesomeIcon icon={faShare} /></a>
                  </span>
          </div>
          <hr />
					<div className="image">
						<div className="image image-profile">
							<a href="/profile"><img src={ pup } alt="" id="photo" /></a>
							</div>
						<div className="css-3">
							<div className="css-3 happening">
								<a href="/api" id="happening-link">Computer Programming</a>
							</div>

								<div className="doe">
                    <a href="/api">John Doe @JohnDoe 16h</a>
							</div>
						</div>
						<div className="text">
                  <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
              </div>
							<span className="likes">
                    <a href="/api">
                      <FontAwesomeIcon icon={faComment} />
                      12
                    </a>
                    <a href="/api">
                      <FontAwesomeIcon icon={faRetweet} />
                      27
                    </a>
                    <a href="/api">
                      <FontAwesomeIcon icon={faHeart} />
                      212
                    </a>
                    <a href="/api"><FontAwesomeIcon icon={faShare} /></a>
                  </span>
          </div>
          <hr />
					<div className="image">
						<div className="image image-profile">
							<a href="/profile"><img src={ grace } alt="" id="photo" /></a>
							</div>
						<div className="css-3">
							<div className="css-3 happening">
								<a href="/api" id="happening-link">Computer Programming</a>
							</div>

								<div className="doe">
                    <a href="/api">John Doe @JohnDoe 16h</a>
							</div>
						</div>
						<div className="text">
                  <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
              </div>
							<span className="likes">
                    <a href="/api">
                      <FontAwesomeIcon icon={faComment} />
                      12
                    </a>
                    <a href="/api">
                      <FontAwesomeIcon icon={faRetweet} />
                      27
                    </a>
                    <a href="/api">
                      <FontAwesomeIcon icon={faHeart} />
                      212
                    </a>
                    <a href="/api"><FontAwesomeIcon icon={faShare} /></a>
                  </span>
          </div>
          <hr />
					<div className="image">
						<div className="image image-profile">
							<a href="/profile"><img src={ me } alt="" id="photo" /></a>
							</div>
						<div className="css-3">
							<div className="css-3 happening">
								<a href="/api" id="happening-link">Computer Programming</a>
							</div>

								<div className="doe">
                    <a href="/api">John Doe @JohnDoe 16h</a>
							</div>
						</div>
						<div className="text">
                  <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
              </div>
							<span className="likes">
                    <a href="/api">
                      <FontAwesomeIcon icon={faComment} />
                      12
                    </a>
                    <a href="/api">
                      <FontAwesomeIcon icon={faRetweet} />
                      27
                    </a>
                    <a href="/api">
                      <FontAwesomeIcon icon={faHeart} />
                      212
                    </a>
                    <a href="/api"><FontAwesomeIcon icon={faShare} /></a>
                  </span>
          </div>
        </div>
        <div className="column-three">
          <div className="row-search">
            <input type="text" placeholder="Search Twitter" />
          </div>
          <br />
          <div className="trends">
            <a href="/api" id="trends">Kenya Trends</a>
            <hr />
            <div className="trending-news">
              {/* <div id="trending-news"><span> 1 </span></div> */}
              <div id="trending-news" className="dot trending-name"><span> 1 . Trending </span></div>
              {/* <div ><span> . </span></div> */}
              {/* <div className="trending-name"><span> Trending </span></div> */}
              <span id="hash">#GoogleDevs</span>
              <div className="trending-name"><span id="">3665 tweets</span></div>
              <hr />
              <div id="trending-news" className="dot trending-name"><span> 2 . Web development . Trending </span></div>
              {/* <div ><span> . </span></div> */}
              {/* <div className="trending-name"><span> Trending </span></div> */}
              <span id="hash">#FlasknewVersion</span>
              <div className="trending-name"><span id="">3665 tweets</span></div>
              <hr />
              <div id="trending-news" className="dot trending-name"><span> 3 . Trending </span></div>
              {/* <div ><span> . </span></div> */}
              {/* <div className="trending-name"><span> Trending </span></div> */}
              <span id="hash">#Bitcoin</span>
              <div className="trending-name"><span id="">3665 tweets</span></div>
              <hr />
              <div id="trending-news" className="dot trending-name"><span> 4 . Artificial Intelligence . Trending </span></div>
              {/* <div ><span> . </span></div> */}
              {/* <div className="trending-name"><span> Trending </span></div> */}
              <span id="hash">#Robotics</span>
              <div className="trending-name"><span id="">3665 tweets</span></div>
              <hr />
              <div id="trending-news" className="dot trending-name"><span> 5 . Trending </span></div>
              {/* <div ><span> . </span></div> */}
              {/* <div className="trending-name"><span> Trending </span></div> */}
              <span id="hash">#Futuristicmoney</span>
              <div className="trending-name"><span id="">3665 tweets</span></div>
              <hr />
            </div>
          </div>
          <div className="row-mid">
            <h2 className="follow">Who to follow</h2>
            <hr />
            <div className="image">
              <div className="image image-profile">
								<img src={me} alt="" />
              </div>
              <div className="name"><span> <a href="/profile">AliPay</a> </span></div>
              <div className="handle"><span>@alipay</span></div>
              <div className="follow-handle"><button>Follow</button></div>
            </div>
						<hr/>
            <div className="image">
              <div className="image image-profile">
								<img src={curly} alt="" />
              </div>
              <div className="name"><span> <a href="/profile">AliPay</a> </span></div>
              <div className="handle"><span>@alipay</span></div>
              <div className="follow-handle"><button>Follow</button></div>
            </div>
						<hr/>
            <div className="image">
              <div className="image image-profile">
								<img src={pup} alt="" />
              </div>
              <div className="name"><span> <a href="/profile">AliPay</a> </span></div>
              <div className="handle"><span>@alipay</span></div>
              <div className="follow-handle"><button>Follow</button></div>
            </div>
						<hr/>
            <div className="image">
              <div className="image image-profile">
								<img src={me} alt="" />
              </div>
              <div className="name"><span> <a href="/profile">AliPay</a> </span></div>
              <div className="handle"><span>@alipay</span></div>
              <div className="follow-handle"><button>Follow</button></div>
            </div>
						<hr/>
            <div className="image">
              <div className="image image-profile">
								<img src={curly} alt="" />
              </div>
              <div className="name"><span> <a href="/profile">AliPay</a> </span></div>
              <div className="handle"><span>@alipay</span></div>
              <div className="follow-handle"><button>Follow</button></div>
						</div>
						<hr/>
            <div className="image">
              <div className="image image-profile">
								<img src={grace} alt="" />
              </div>
              <div className="name"><span> <a href="/profile">AliPay</a> </span></div>
              <div className="handle"><span>@alipay</span></div>
              <div className="follow-handle"><button>Follow</button></div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
