import { Container } from '@mui/material'
import '../JoannaAuthorPage/JoannaAuthorPage.scss'
// import JoannaArticles from 'components/JoannaArticles/JoannaArticles'
import SiteContentSidebar from 'components/SiteContentSidebar/SiteContentSidebar'
import SiteContentSidebarSubscribe from 'components/SiteContentSidebarSubscribe/SiteContentSidebarSubscribe'
// import JoannaPageLatest from 'components/JoannaPageLatest/JoannaPageLatest'
import ElliotArticles from 'components/ElliotArticles/ElliotArticles'
import SiteContentSidebarAuthor from 'components/SiteContentSidebarAuthor/SiteContentSidebarAuthor'
import ElliotPageLatest from 'components/ElliotPageLatest/ElliotPageLatest'

type Props = { addArticleToFavorites: (id: number, count: number) => void }

const ElliotAuthorPage = ({ addArticleToFavorites }: Props) => {
    return (
        <>
            <div className="page-fon">
                <Container maxWidth="lg" sx={{ padding: '64px 0' }}>
                    <div className="author-page-content">
                        <div className="author-page-image">
                            <img src="images/author-eliot.jpeg" alt="" />
                            <div className="author-page-social-links">
                                <a
                                    href="https://uk-ua.facebook.com/"
                                    className="topnavbar-soc-link "
                                >
                                    <span className="social-icon si-facebook"></span>
                                </a>
                                <a
                                    href="https://twitter.com/?lang=ru"
                                    className="topnavbar-soc-link "
                                >
                                    <span className="social-icon si-twitter"></span>
                                </a>
                                <a
                                    href="https://www.instagram.com/"
                                    className="topnavbar-soc-link"
                                >
                                    <span className="social-icon si-instagram"></span>
                                </a>
                            </div>
                        </div>
                        <div className="author-page-info">
                            <h1>Elliot Anderson</h1>
                            <p className="author-page-count">20 posts</p>
                            <p>
                                Bla-bla-bla-bla sit amet consectetur adipisicing
                                elit. Amet nihil quis nisi odio ab porro dolor
                                tempore nemo rem. Deleniti nesciunt, sed numquam
                                ex mollitia amet minima porro unde similique?
                            </p>
                        </div>
                    </div>
                </Container>
            </div>

            <Container maxWidth="lg" sx={{ margin: '64px auto' }}>
                <div className="site-content">
                    <div className="site-content-area">
                        <div className="site-post-arhive">
                            <ElliotArticles
                                addArticleToFavorites={addArticleToFavorites}
                            />
                        </div>
                        <div className="site-post-navigation">
                            <button className="slide-btn load-more-btn">
                                LOAD MORE
                            </button>
                        </div>
                    </div>
                    <div className="sidebar-column">
                        <SiteContentSidebarAuthor />
                        <SiteContentSidebar />
                        <ElliotPageLatest />
                        <SiteContentSidebarSubscribe />
                        <div className="sidebar-ads">
                            <a href="my resume">
                                <p>Тут я розташую посилання на своє резюме</p>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ElliotAuthorPage
