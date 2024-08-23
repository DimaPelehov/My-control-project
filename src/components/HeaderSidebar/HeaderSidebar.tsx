import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

type Props = {
    sidebarOpen: boolean
    openCloseSidebar: () => void
    changeOverlay: () => void
}

type HeaderSidebarFormType = {
    email: string
}

const HeaderSidebar = ({
    sidebarOpen,
    openCloseSidebar,
    changeOverlay,
}: Props) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    const [isFormSend, setIsFormSend] = useState<boolean>(false)

    const [sendData, setSendData] = useState<HeaderSidebarFormType>({
        email: '',
    })

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSendData((prevState) => ({ ...prevState, email: e.target.value }))
    }

    const onSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const { data } = await axios.post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    email: sendData.email,
                }
            )
            setSendData({
                email: data.email,
            })
            setIsFormSend(true)
        } catch (e) {
            alert(e)
        }
        setSendData({
            email: '',
        })
        setIsChecked(false)
    }

    const renderMessage = () => {
        return <div className="subscribe-message">Дані надіслано</div>
    }

    return (
        <div className={`header-sidebar ${sidebarOpen ? 'active' : ''}`}>
            <div className="sidebar-title">
                <Link to="/">BRUNCH</Link>
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

                    <div className="header-sidebar-subscribe-body">
                        <form
                            onSubmit={onSubscribe}
                            className="header-sidebar-subscribe-form"
                        >
                            <div className="form-first-row">
                                <input
                                    type="email"
                                    name="mail"
                                    placeholder="Your mail"
                                    value={sendData.email}
                                    onChange={handleEmail}
                                    required={true}
                                />

                                <button
                                    className={`header-sidebar-subscribe-btn ${
                                        isChecked ? '' : 'disabled'
                                    }`}
                                    disabled={isChecked ? false : true}
                                >
                                    Subscribe
                                </button>

                                <div className="header-sidebar-error">
                                    Не всі поля заповнено
                                </div>
                            </div>
                        </form>

                        {isFormSend ? renderMessage() : ''}

                        <div className="subscribe-privacy">
                            <input
                                type="checkbox"
                                id="header_sidebar-privacy"
                                checked={isChecked}
                                onChange={() => setIsChecked(!isChecked)}
                            />
                            <label htmlFor="header_sidebar-privacy">
                                By checking this box, you confirm that you have
                                read and are agreeing to our terms of use
                                regarding the storage of the data submitted
                                through this form.
                            </label>
                        </div>
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
    )
}

export default HeaderSidebar
