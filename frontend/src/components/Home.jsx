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
            <a href="/api/tweets" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <div className="css-3">
              <a href="/api/tweets" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faHome} /><span>Home</span>
              </a>
              <div className="css-3">
                <a href="/api/tweets" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faHashtag} /><span>Explore</span>
                </a>
                <div className="css-3">
                  <a href="/api/tweets" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faBell} /><span>Notifications</span>
                  </a>
                  <div className="css-3">
                    <a href="/api/tweets" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faEnvelope} /><span>Messages</span>
                    </a>
                    <div className="css-3">
                      <a href="/api/tweets" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faBookmark} /><span>Bookmark</span>
                      </a>
                      <div className="css-3">
                        <a href="/api/tweets" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faListAlt} /><span>List</span>
                        </a>
                        <div className="css-3">
                          <a href="/api/tweets" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faUserCircle} /><span>Profile</span>
                          </a>
                          <div className="css-3">
                            <a href="/api/tweets" target="_blank" rel="noopener noreferrer">
                              <FontAwesomeIcon icon={faEllipsisH} /><span>More</span>
                            </a>
                            {/* <div>
						<button className="add-tweet-plus">
							<FontAwesomeIcon icon={faPlus} />
						</button>
					</div> */}

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
