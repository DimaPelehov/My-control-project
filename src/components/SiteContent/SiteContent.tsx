import { Container } from '@mui/material'
import './SiteContent.scss'
import SiteContentArticleColumn from 'components/SiteContentArticleColumn/SiteContentArticleColumn'
import SiteContentSidebarLatest from 'components/SiteContentSidebarLatest/SiteContentSidebarLatest'

type Props = { addArticleToFavorites: (totalCount: number) => void }

const SiteContent = ({ addArticleToFavorites }: Props) => {
    return (
        <div className="site-content-margin">
            <Container maxWidth="lg">
                <div className="site-content">
                    {/* articles column */}
                    <div className="site-content-area">
                        <div className="site-post-arhive">
                            <SiteContentArticleColumn
                                addArticleToFavorites={addArticleToFavorites}
                            />
                        </div>
                        <div className="site-post-navigation">
                            <button className="slide-btn load-more-btn">
                                LOAD MORE
                            </button>
                        </div>
                    </div>
                    {/* sidebar */}
                    <aside className="site-content-sidebar">
                        <div className=" sidebar-item sidebar-author">
                            <div className="sidebar-item-header">
                                <h5>AUTHOR</h5>
                                <div className="horizontal-line"></div>
                            </div>
                            <div className="sidebar-author-body">
                                <div className="sidebar-author-info">
                                    <a href="joanna-author">
                                        <img
                                            src="images/author-joanna.jpeg"
                                            alt="joanna-author"
                                        />
                                    </a>

                                    <h5>
                                        <a href="joanna-author">
                                            Hello, I`m
                                            <span>Joanna Wellick</span>
                                        </a>
                                    </h5>
                                </div>
                                <p>
                                    Sed cras nec a nulla sapien adipiscing ut
                                    etiam. In sem viverra mollis metus quam
                                    adipiscing…
                                </p>
                            </div>
                        </div>
                        <div className="sidebar-item sidebar-trend ">
                            <div className="sidebar-item-header">
                                <h5>TRENDING NOW</h5>
                                <div className="horizontal-line"></div>
                            </div>
                            <div className="sidebar-trend-body">
                                <h5>
                                    <a href="maecenas tincidunt">
                                        Maecenas Tincidunt Eget <br />
                                        <span>Libero Massa Vitae</span>
                                    </a>
                                </h5>
                                <ul className="activity">
                                    <li>
                                        <a href="joanna-author">
                                            Joanna Wellick
                                        </a>
                                    </li>
                                    <li>
                                        <span className="activity-icon read"></span>
                                        2 minute read
                                    </li>
                                </ul>
                                <div className="sidebar-trend-img">
                                    <a href="maecenas tincidunt">
                                        <img
                                            src="images/image-1.jpg"
                                            alt="maecenas tincidunt"
                                        />
                                    </a>
                                    {/* тимчасова пагінація */}
                                    <div className="test-dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-item sidebar-social">
                            <div className="sidebar-item-header">
                                <h5>SOCIAL LINKS</h5>
                                <div className="horizontal-line"></div>
                            </div>
                            <div className="sidebar-social-items">
                                <div className="sidebar-social-item">
                                    <a href="https://uk-ua.facebook.com/">
                                        <span className="soc-item-icon soc-facebook"></span>
                                        Facebook
                                        <span>53</span>
                                    </a>
                                </div>
                                <div className="sidebar-social-item">
                                    <a href="https://twitter.com/?lang=ru">
                                        <span className="soc-item-icon soc-twitter"></span>
                                        Twitter
                                        <span>34</span>
                                    </a>
                                </div>
                                <div className="sidebar-social-item">
                                    <a href="https://www.instagram.com/">
                                        <span className="soc-item-icon soc-instagram"></span>
                                        Instagram
                                        <span>112</span>
                                    </a>
                                </div>
                                <div className="sidebar-social-item">
                                    <a href="https://ru.pinterest.com/">
                                        <span className="soc-item-icon soc-pinterest"></span>
                                        Pinterest
                                        <span>332</span>
                                    </a>
                                </div>
                                <div className="sidebar-social-item">
                                    <a href="https://www.youtube.com/">
                                        <span className="soc-item-icon soc-youtube"></span>
                                        YouTube
                                        <span>171K</span>
                                    </a>
                                </div>
                                <div className="sidebar-social-item">
                                    <a href="https://soundcloud.com/">
                                        <span className="soc-item-icon soc-soundcloud"></span>
                                        SoundCloud
                                        <span>112</span>
                                    </a>
                                </div>
                                <div className="sidebar-social-item">
                                    <a href="https://www.behance.net/">
                                        <span className="soc-item-icon soc-behance"></span>
                                        Behance
                                        <span>1292</span>
                                    </a>
                                </div>
                                <div className="sidebar-social-item">
                                    <a href="https://vimeo.com/">
                                        <span className="soc-item-icon soc-vimeo"></span>
                                        Vimeo
                                        <span>11</span>
                                    </a>
                                </div>
                                <div className="sidebar-social-item">
                                    <a href="https://web.telegram.org/k/">
                                        <span className="soc-item-icon soc-telegram"></span>
                                        Telegram
                                        <span>112M</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-latest">
                            <div className="sidebar-item-header">
                                <h5>LATEST STORIES</h5>
                                <div className="horizontal-line"></div>
                            </div>
                            <SiteContentSidebarLatest />
                        </div>
                        <div className=" sidebar-item sidebar-subscribe">
                            <div className="sidebar-item-header">
                                <h5>SIGN UP TO UPDATE</h5>
                                <div className="horizontal-line"></div>
                            </div>
                            <div className="sidebar-subscribe-title">
                                <h3>
                                    Subscribe to Our <br />
                                    <span>Newsletter</span>
                                </h3>
                            </div>
                            <div className="sidebar-subscribe-form">
                                <form action="" className="subscribe-form">
                                    <input
                                        type="email"
                                        name="mail"
                                        placeholder="Enter your mail"
                                    />
                                    <button>Subscribe</button>
                                </form>
                            </div>
                            <div className="subscribe-privacy">
                                <input type="checkbox" id="sidebar-privacy" />
                                <label htmlFor="sidebar-privacy">
                                    By checking this box, you confirm that you
                                    have read and are agreeing to our terms of
                                    use regarding the storage of the data
                                    submitted through this form.
                                </label>
                            </div>
                        </div>
                        <div className="sidebar-ads">
                            <a href="my resume">
                                <p>Тут я розташую посилання на своє резюме</p>
                            </a>
                        </div>
                    </aside>
                </div>
            </Container>
        </div>
    )
}

export default SiteContent
