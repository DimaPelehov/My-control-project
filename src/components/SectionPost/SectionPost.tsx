import SectionPostArticleColumn from 'components/SectionPostArticleColumn/SectionPostArticleColumn'
import './SectionPost.scss'
import { Container } from '@mui/material'

type Props = {}

const SectionPost = (props: Props) => {
    return (
        <Container maxWidth="lg" sx={{ padding: '64px 0px' }}>
            <div className="section-post-tiles">
                {/* big column */}
                <div className="sec-post-tiles-big_column">
                    <article className="section-post-tile">
                        <div className="section-post-tile-img">
                            <a href="Maecenas Tincidunt Eget Libero Massa Vitae">
                                <img
                                    src="/images/image-1.jpg"
                                    alt=" first article"
                                />
                            </a>
                        </div>
                        <div className="section-post-tile-content">
                            <a
                                className="sec-post-tile-category-link"
                                href="category-etiam"
                            >
                                Etiam
                            </a>
                            <a
                                className="section-post-tile-title"
                                href="Maecenas Tincidunt Eget Libero Massa Vitae"
                            >
                                Maecenas Tincidunt Eget Libero Massa
                                <br />
                                <span>Vitae</span>
                            </a>
                            <ul className="activity">
                                <li>
                                    <span className="activity-icon views"></span>
                                    2.8K views
                                </li>
                                <li>
                                    <span className="activity-icon shares"></span>
                                    757 shares
                                </li>
                            </ul>
                            <p className="section-post-tile-exerpt">
                                Aenean eleifend ante maecenas pulvinar montes
                                lorem et pede dis dolor pretium donec dictum.…
                            </p>
                            <div className="section-post-tile-details">
                                <div className="section-post-tile-author">
                                    <a
                                        className="author-img"
                                        href="joanna-author"
                                    >
                                        <img
                                            src="/images/author-joanna.jpeg"
                                            alt="Joanna"
                                        />
                                    </a>
                                    <div className="section-post-tile-author-info">
                                        <a href="joanna-author">
                                            Joanna Wellick
                                        </a>
                                        December 12, 2024
                                    </div>
                                </div>
                                <div className="section-post-tile-share">
                                    <span>757 Shares</span>
                                    <div className="section-post-tile-share-items">
                                        <div className="section-post-tile-share-item ">
                                            <a href="https://uk-ua.facebook.com/">
                                                <span className="si-facebook"></span>
                                            </a>
                                            <span className="section-post-tile-si-count">
                                                53
                                            </span>
                                        </div>
                                        <div className="section-post-tile-share-item ">
                                            <a href="https://twitter.com/?lang=ru">
                                                <span className="si-twitter"></span>
                                            </a>
                                        </div>
                                        <div className="section-post-tile-share-item ">
                                            <a href="https://www.instagram.com/">
                                                <span className="si-instagram"></span>
                                            </a>
                                            <span className="section-post-tile-si-count">
                                                51
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                {/* small column */}
                <div className="sec-post-tiles-small_column">
                    <SectionPostArticleColumn />
                </div>
            </div>
        </Container>
    )
}

export default SectionPost
