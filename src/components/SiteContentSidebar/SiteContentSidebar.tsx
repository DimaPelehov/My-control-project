// import { Link } from 'react-router-dom'
import '../SiteContent/SiteContent.scss'
import SiteContentSidebarCarousel from 'components/SiteContentSidebarCarousel/SiteContentSidebarCarousel'
import { articlesArray } from 'utils/articlesArray'

type Props = {}

const SiteContentSidebar = (props: Props) => {
    return (
        <aside className="site-content-sidebar">
            <div className="sidebar-item sidebar-trend ">
                <div className="sidebar-item-header">
                    <h5>TRENDING NOW</h5>
                    <div className="horizontal-line"></div>
                </div>

                <SiteContentSidebarCarousel slides={articlesArray} />
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
        </aside>
    )
}

export default SiteContentSidebar
