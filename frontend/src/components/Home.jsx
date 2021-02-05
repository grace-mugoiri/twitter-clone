import React from 'react';
import '../assets/styles/topbar.css';
// import '../assets/images/GraceMugoiriPic.jpg
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhotoVideo, faPollH, faSmileBeam, faCalendarAlt, faHashtag, faPlus, faHome, faBell, faEllipsisH, faBookmark, faEnvelope, faListAlt, faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
function Home() {
  return (
    <>
      <div className="row">
        <div className="column">
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
														<div><button class="add-tweet-plus">
															<FontAwesomeIcon icon={faPlus} />
														</button></div>

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
        <div className="column">
          <div id="topbar">
            Home
            <div id="profile-tile" />
            <div id="trending-tile" />
            <div id="notice-tile" />
            <div id="follow-tile" />
            <div id="links-tile" />
          </div>
          <hr />

          <div className="image">
            {' '}
            <img src="#" alt="" />
            <div className="css-2">
              {' '}
              What's happening?
              <div className="css-3">
                media
                <FontAwesomeIcon icon={faPhotoVideo} />
                <div className="css-3">
                  gif
                  <FontAwesomeIcon icon={faPhotoVideo} />
                  <div className="css-3">
                    poll
                    <FontAwesomeIcon icon={faPollH} />
                    <div className="css-3">
                      emoji
                      <FontAwesomeIcon icon={faSmileBeam} />
                      <div className="css-3">
                        schedule
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <button>Tweet</button>
                        <h1 className="w3-jumbo"> Twitter Clone </h1>
                        <button className="w3-button w3-pink" style={{ marginRight: '1rem' }} onClick={() => (window.location = '/login')}>Login</button>
                        <button className="w3-button w3-pink" onClick={() => (window.location = '/register')}> Register</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="w3-container w3-blue" style={{ padding: '2rem', marginTop: '2rem' }}>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, qui nesciunt nihil expedita laudantium enim ipsa numquam illum nam? Accusantium quas aliquid laudantium maxime consequuntur fugiat iusto vitae deleniti officiis?</p>
          </div>

          <div className="w3-container w3-blue" style={{ padding: '2rem', marginTop: '2rem' }}>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, qui nesciunt nihil expedita laudantium enim ipsa numquam illum nam? Accusantium quas aliquid laudantium maxime consequuntur fugiat iusto vitae deleniti officiis?</p>
          </div>

          <div className="w3-container w3-blue" style={{ padding: '2rem', marginTop: '2rem' }}>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, qui nesciunt nihil expedita laudantium enim ipsa numquam illum nam? Accusantium quas aliquid laudantium maxime consequuntur fugiat iusto vitae deleniti officiis?</p>
          </div>
        </div>
        <div className="column">
          column three
          <div className="row2">
            <div className="row-in">
              <input type="text" placeholder="Search.." />
            </div>
            <div className="row-in">
              Kenya Trends
              <hr />
              <span><ol>1. Trending</ol></span>
              <span>#GrandVigil</span>
              <span>6119 Tweets</span>
              <hr />
              <span><ol>1. Trending</ol></span>
              <span>#GrandVigil</span>
              <span>6119 Tweets</span>
              <hr />
              <span><ol>1. Trending</ol></span>
              <span>#GrandVigil</span>
              <span>6119 Tweets</span>
              <hr />
              <span><ol>1. Trending</ol></span>
              <span>#GrandVigil</span>
              <span>6119 Tweets</span>
              <hr />
              <span><ol>1. Trending</ol></span>
              <span>#GrandVigil</span>
              <span>6119 Tweets</span>
              <hr />
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
      </div>
    </>
  );
}

export default Home;
