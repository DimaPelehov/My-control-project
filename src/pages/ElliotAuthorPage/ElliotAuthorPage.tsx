import { Container } from '@mui/material'
import '../JoannaAuthorPage/JoannaAuthorPage.scss'
import SiteContentSidebar from 'components/SiteContentSidebar/SiteContentSidebar'
import SiteContentSidebarSubscribe from 'components/SiteContentSidebarSubscribe/SiteContentSidebarSubscribe'
import ElliotArticles from 'components/ElliotArticles/ElliotArticles'
import SiteContentSidebarAuthor from 'components/SiteContentSidebarAuthor/SiteContentSidebarAuthor'
import ElliotPageLatest from 'components/ElliotPageLatest/ElliotPageLatest'
import { articlesArray } from 'utils/articlesArray'
import { useState } from 'react'

type Props = {
    // addArticleToFavorites: (id: number, count: number) => void
    // toggleLikeState: (id: number) => void
    // articlesLikeState: { [id: number]: boolean }
    articlesAddState: { [id: number]: boolean }
    toggleAddState: (id: number) => void
}

const ElliotAuthorPage = ({
    // addArticleToFavorites,
    // toggleLikeState,
    // articlesLikeState,
    articlesAddState,
    toggleAddState,
}: Props) => {
    // реалізація роботи кнопки Load More
    const [showMoreElliotArticles, setShowMoreElliotArticles] =
        useState<number>(12)

    const loadMoreElliotArticles = () => {
        setShowMoreElliotArticles((prevState) => prevState + 5)
    }

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
                            <p className="author-page-count">
                                {
                                    articlesArray.filter(
                                        (item) => item.isElliotArticle === true
                                    ).length
                                }{' '}
                                posts
                            </p>
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
                                // addArticleToFavorites={addArticleToFavorites}
                                // articlesLikeState={articlesLikeState}
                                // toggleLikeState={toggleLikeState}
                                articlesAddState={articlesAddState}
                                toggleAddState={toggleAddState}
                                showMoreElliotArticles={showMoreElliotArticles}
                            />
                        </div>

                        <div className="site-post-navigation">
                            {showMoreElliotArticles >=
                            articlesArray.filter(
                                (item) => item.isJoannaArticle === true
                            ).length ? null : (
                                <button
                                    className="slide-btn load-more-btn"
                                    onClick={loadMoreElliotArticles}
                                >
                                    LOAD MORE
                                </button>
                            )}
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
