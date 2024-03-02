import { StyledEngineProvider } from '@mui/material/styles'
import BottomNavBar from '../components/BottomNavBar/BottomNavBar'
import TopNavBar from '../components/TopNavBar/TopNavBar'
import '../components/BottomNavBar/BottomNavBar.scss'
import { useState } from 'react'

type Props = {
    favoritesData: { totalCount: number }
    changeOverlay: () => void
}

const Header = ({ favoritesData, changeOverlay }: Props) => {
    // виїзд бокового меню
    const [sidebarOpen, setSidebarOpen] = useState<boolean>()

    const openCloseSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <StyledEngineProvider injectFirst>
            <div className={`header-sidebar ${sidebarOpen ? 'active' : ''}`}>
                <div className="sidebar-title">
                    <a href="home">BRUNCH</a>
                    <button
                        onClick={() => {
                            changeOverlay()
                            openCloseSidebar()
                        }}
                    ></button>
                </div>
                <aside className="sidebar-content">
                    {/* social links */}
                    <div className="sidebar-social social-links">
                        <a
                            href="https://uk-ua.facebook.com/"
                            className="topnavbar-soc-link"
                        >
                            <span className="social-icon si-facebook"></span>
                            <span className="social-name">Facebook</span>
                            <span className="social-count">53</span>
                        </a>
                        <a
                            href="https://twitter.com/?lang=ru"
                            className="topnavbar-soc-link"
                        >
                            <span className="social-icon si-twitter"></span>
                            <span className="social-name">Twitter</span>
                            <span className="social-count">71K</span>
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            className="topnavbar-soc-link"
                        >
                            <span className="social-icon si-instagram"></span>
                            <span className="social-name">Instagram</span>
                            <span className="social-count">51</span>
                        </a>
                        <a
                            href="https://ru.pinterest.com/"
                            className="topnavbar-soc-link"
                        >
                            <span className="social-icon soc-pinterest"></span>
                            <span className="social-name">Pinterest</span>
                            <span className="social-count">332</span>
                        </a>
                        <a
                            href="https://www.youtube.com/"
                            className="topnavbar-soc-link"
                        >
                            <span className="social-icon soc-youtube"></span>
                            <span className="social-name">YouTube</span>
                            <span className="social-count">171K</span>
                        </a>
                        <a
                            href="https://soundcloud.com/"
                            className="topnavbar-soc-link"
                        >
                            <span className="social-icon soc-soundcloud"></span>
                            <span className="social-name">SoundCloud</span>
                            <span className="social-count">112</span>
                        </a>
                    </div>
                    {/* subscribe */}
                    <div className="sidebar-subscribe">
                        <div className="sidebar-item-header">
                            <h5>SUBSCRIBE</h5>
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
                            <input
                                type="checkbox"
                                id="header_sidebar-privacy"
                            />
                            <label htmlFor="header_sidebar-privacy">
                                By checking this box, you confirm that you have
                                read and are agreeing to our terms of use
                                regarding the storage of the data submitted
                                through this form.
                            </label>
                        </div>
                    </div>
                    {/* ads */}
                    <div className="sidebar-ads">
                        <a href="my resume">
                            <p>Тут я розташую посилання на своє резюме</p>
                        </a>
                    </div>
                </aside>
            </div>
            <TopNavBar />
            <BottomNavBar
                favoritesData={favoritesData}
                changeOverlay={changeOverlay}
                openCloseSidebar={openCloseSidebar}
            />
        </StyledEngineProvider>
    )
}

export default Header
