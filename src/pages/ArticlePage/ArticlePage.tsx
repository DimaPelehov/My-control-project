import { Link, useParams } from 'react-router-dom'
import { Article, articlesArray, getArticlesObject } from 'utils/articlesArray'
import '../ArticlePage/ArticlePage.scss'
import { Breadcrumbs, Container } from '@mui/material'
import SiteContentSidebarAuthor from 'components/SiteContentSidebarAuthor/SiteContentSidebarAuthor'
import SiteContentSidebar from 'components/SiteContentSidebar/SiteContentSidebar'
import SiteContentSidebarLatest from 'components/SiteContentSidebarLatest/SiteContentSidebarLatest'
import SiteContentSidebarSubscribe from 'components/SiteContentSidebarSubscribe/SiteContentSidebarSubscribe'
import { useState } from 'react'
import Reviews from 'components/Reviews/Reviews'
import SectionSubscribe from 'components/SectionSubscribe/SectionSubscribe'
import ElliotArticles from 'components/ElliotArticles/ElliotArticles'
import JoannaArticles from 'components/JoannaArticles/JoannaArticles'
import ArticlePageSlider from 'components/ArticlePageSlider/ArticlePageSlider'

type Props = {
    articlesObject?: { [id: number]: Article }
    addArticleToFavorites: (id: number, count: number) => void
    // toggleLikeState: (id: number) => void
    // articlesLikeState: { [id: number]: boolean }
    articlesAddState: { [id: number]: boolean }
    toggleAddState: (id: number) => void
    // showMoreArticles: number
}

const ArticlePage = ({
    articlesObject = getArticlesObject(articlesArray),
    addArticleToFavorites,
    // toggleLikeState,
    // articlesLikeState,
    articlesAddState,
    toggleAddState,
    // showMoreArticles,
}: Props) => {
    const { id } = useParams()
    // useParams дозволяє витягти усю необхідну інформацію щодо статті з id

    const breadcrumbs = [
        <Link to="/">Home</Link>,
        <Link to={`/${articlesObject[+id!].hrefCategory}`}>
            {articlesObject[+id!].category}
        </Link>,
    ]

    // збільшення 1 малюнку
    const [firstImgZoom, setFirstImgZoom] = useState<boolean>(false)

    const changeFirstImgZoom = () => {
        setFirstImgZoom(!firstImgZoom)
    }

    // збільшення галереї
    const [galeryZoom, setGaleryZoom] = useState<boolean>(false)

    const changeGaleryZoom = () => {
        setGaleryZoom(!galeryZoom)
    }

    // реалізація роботи кнопки Load More
    const [showMoreArticlePageArticles, setShowMoreArticlePageArticles] =
        useState<number>(12)

    const loadMoreArticlePageArticles = () => {
        setShowMoreArticlePageArticles((prevState) => prevState + 5)
    }

    return (
        <>
            <div className="article-page-img">
                <img
                    src={articlesObject[+id!].image}
                    alt={articlesObject[+id!].title}
                />
            </div>
            <Container
                maxWidth="lg"
                sx={{ display: 'flex', gap: '60px', marginBottom: '64px' }}
            >
                <div className="article-page-content">
                    <Breadcrumbs
                        aria-label="breadcrumbs"
                        separator=">"
                        className="breadcrumbs"
                    >
                        {breadcrumbs}
                    </Breadcrumbs>

                    <h1
                        dangerouslySetInnerHTML={{
                            __html: articlesObject[+id!].title,
                        }}
                    ></h1>

                    <ul className="activity">
                        <li>
                            <span className="activity-icon views"></span>
                            {articlesObject[+id!].views}K views
                        </li>
                        <li>
                            <span className="activity-icon shares"></span>
                            {articlesObject[+id!].shares} shares
                        </li>
                    </ul>

                    <div className="section-post-tile-details">
                        <div className="section-post-tile-author">
                            <Link to={`/${articlesObject[+id!].hrefAuthor}`}>
                                <img
                                    src={articlesObject[+id!].imageAuthor}
                                    alt={articlesObject[+id!].authorName}
                                />
                            </Link>

                            <div className="section-post-tile-author-info">
                                <Link
                                    to={`/${articlesObject[+id!].hrefAuthor}`}
                                >
                                    {articlesObject[+id!].authorName}
                                </Link>
                                {articlesObject[+id!].months}
                                {articlesObject[+id!].day},
                                {articlesObject[+id!].year}
                            </div>
                        </div>

                        <div className="section-post-tile-share">
                            <span>{articlesObject[+id!].shares} Shares</span>

                            <div className="section-post-tile-share-items">
                                <div className="section-post-tile-share-item ">
                                    <a href="https://uk-ua.facebook.com/">
                                        <span className="si-facebook"></span>
                                    </a>
                                    <span className="section-post-tile-si-count">
                                        {articlesObject[+id!].facebookCount}
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
                                        {articlesObject[+id!].instaCount}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="article-page-content-body">
                        <div className="tile-share-sticky-wrap">
                            <div className="tile-share-sticky">
                                <span>
                                    {articlesObject[+id!].shares} Shares
                                </span>
                                <div className="tile-share-sticky-items">
                                    <div className="tile-share-item">
                                        <a href="https://uk-ua.facebook.com/">
                                            <span className="social-icon si-facebook"></span>
                                        </a>
                                        <span className="tile-share-sticky-si-count">
                                            {articlesObject[+id!].facebookCount}
                                        </span>
                                    </div>
                                    <div className="tile-share-item">
                                        <a href="https://twitter.com/?lang=ru">
                                            <span className=" social-icon si-twitter"></span>
                                        </a>
                                    </div>
                                    <div className="tile-share-item">
                                        <a href="https://www.instagram.com/">
                                            <span className=" social-icon si-instagram"></span>
                                        </a>
                                        <span className="tile-share-sticky-si-count">
                                            {articlesObject[+id!].instaCount}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="article-page-content-text">
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. At atque ipsam laudantium
                                reiciendis itaque quae molestias quod quam
                                repellat esse? Quisquam quidem quia ullam magnam
                                perferendis quaerat eligendi incidunt esse!
                            </p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Distinctio dolores, possimus
                                voluptatum esse omnis similique commodi sit at
                                blanditiis ipsa, illo dolore error iusto
                                corporis! Natus quae repudiandae consectetur
                                commodi. Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Nihil, praesentium. Assumenda
                                quae necessitatibus a eius, earum laudantium
                                ipsum nam consequatur! Soluta illo harum earum
                                facilis molestias dolorem, accusamus nostrum
                                odio.
                            </p>
                            <h3>
                                Tincidunt veni tellus orci aenean consectetuer
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Placeat minima cum qui ducimus
                                eius atque delectus alias impedit recusandae
                                officia expedita amet quibusdam, veniam ea quia
                                sequi illo voluptatibus nam?
                            </p>

                            <figure className="first-img">
                                <img
                                    src={
                                        articlesObject[+id!].firstArticlePageImg
                                    }
                                    alt="firstArticlePageImg"
                                    onClick={changeFirstImgZoom}
                                />

                                <figcaption>
                                    Nulla nec quis sit quisque
                                </figcaption>
                                <a
                                    href="https://ru.pinterest.com/"
                                    className="link-in-img"
                                >
                                    <span></span>
                                </a>
                            </figure>

                            <p
                                style={{
                                    fontFamily: 'Cormorant Garamond, serif',
                                    fontSize: '24px',
                                }}
                            >
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Eos atque beatae, aut in
                                deserunt unde maxime rerum provident molestias
                                dolor reprehenderit
                            </p>

                            {/* галерея */}
                            <div className="img-gallery">
                                <figure className="img-gallery-item">
                                    <img
                                        src="/images/site-cont-article-col-img3.jpg"
                                        alt="img1"
                                        onClick={changeGaleryZoom}
                                    />
                                    <figcaption>
                                        Quis in sapien tempus
                                    </figcaption>
                                    <a
                                        href="https://ru.pinterest.com/"
                                        className="link-in-img"
                                    >
                                        <span></span>
                                    </a>
                                </figure>

                                <figure className="img-gallery-item">
                                    <img
                                        src="/images/site-cont-article-col-img4.jpg"
                                        alt="img2"
                                        onClick={changeGaleryZoom}
                                    />
                                    <figcaption>Semper condim entum</figcaption>
                                    <a
                                        href="https://ru.pinterest.com/"
                                        className="link-in-img"
                                    >
                                        <span></span>
                                    </a>
                                </figure>

                                <figure className="img-gallery-item">
                                    <img
                                        src="/images/site-cont-article-col-img5.jpg"
                                        alt="img3"
                                        onClick={changeGaleryZoom}
                                    />
                                    <figcaption>
                                        Vici consequat justo
                                    </figcaption>
                                    <a
                                        href="https://ru.pinterest.com/"
                                        className="link-in-img"
                                    >
                                        <span></span>
                                    </a>
                                </figure>
                            </div>

                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Amet accusamus impedit
                                accusantium magni nemo eum dicta. At repudiandae
                                aliquid optio reiciendis, itaque dignissimos
                                reprehenderit iste consectetur enim iusto nisi!
                                Quasi.
                            </p>
                        </div>
                    </section>
                    <div className="share-btns">
                        <span>{articlesObject[+id!].shares} Shares</span>
                        <div className="share-btns-items">
                            <div className="share-btns-item ">
                                <a href="https://uk-ua.facebook.com/">
                                    <span className="si-facebook share-icon"></span>
                                    <span className="share-name">Facebook</span>
                                    <span className="share-btns-count">
                                        {articlesObject[+id!].facebookCount}
                                    </span>
                                </a>
                            </div>
                            <div className="share-btns-item ">
                                <a href="https://twitter.com/?lang=ru">
                                    <span className="si-twitter share-icon"></span>
                                    <span className="share-name">Twitter</span>
                                </a>
                            </div>
                            <div className="share-btns-item ">
                                <a href="https://www.instagram.com/">
                                    <span className="si-instagram share-icon"></span>
                                    <span className="share-name">
                                        Instagram
                                    </span>
                                    <span className="share-btns-count">
                                        {articlesObject[+id!].instaCount}
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="post-author">
                        <div className="post-author-info">
                            <Link to={`/${articlesObject[+id!].hrefAuthor}`}>
                                <img
                                    src={articlesObject[+id!].imageAuthor}
                                    alt={articlesObject[+id!].authorName}
                                />
                            </Link>

                            <div className="post-author-name">
                                <p>Post written by :</p>
                                <Link
                                    to={`/${articlesObject[+id!].hrefAuthor}`}
                                >
                                    {articlesObject[+id!].authorName}
                                </Link>
                            </div>
                        </div>

                        <p className="post-author-description">
                            {articlesObject[+id!].authorDescription}
                        </p>

                        <div className="post-author-follow">
                            <h5>
                                Follow <span className="arrow-right"></span>
                            </h5>
                            <div className="post-author-follow-icons">
                                <a href="https://uk-ua.facebook.com/">
                                    <span className="si-facebook share-icon"></span>
                                </a>
                                <a href="https://twitter.com/?lang=ru">
                                    <span className="si-twitter share-icon"></span>
                                </a>
                                <a href="https://www.instagram.com/">
                                    <span className="si-instagram share-icon"></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="article-page-reviews">
                        <Reviews id={articlesObject[+id!].id} />
                    </div>

                    <div className="article-page-subscribe">
                        <SectionSubscribe />
                    </div>

                    <div className="sidebar-item-header">
                        <h5>YOU MAY ALSO LIKE</h5>
                        <div className="horizontal-line"></div>
                    </div>

                    <div className="article-page-also">
                        {articlesObject[+id!].authorName ===
                        'Joanna Wellick' ? (
                            <JoannaArticles
                                addArticleToFavorites={addArticleToFavorites}
                                // articlesLikeState={articlesLikeState}
                                // toggleLikeState={toggleLikeState}
                                articlesAddState={articlesAddState}
                                toggleAddState={toggleAddState}
                                showMoreJoannaArticles={
                                    showMoreArticlePageArticles
                                }
                            />
                        ) : (
                            <ElliotArticles
                                addArticleToFavorites={addArticleToFavorites}
                                // articlesLikeState={articlesLikeState}
                                // toggleLikeState={toggleLikeState}
                                articlesAddState={articlesAddState}
                                toggleAddState={toggleAddState}
                                showMoreElliotArticles={
                                    showMoreArticlePageArticles
                                }
                            />
                        )}
                    </div>

                    <div className="site-post-navigation">
                        {showMoreArticlePageArticles >=
                        articlesArray.filter(
                            (item) => item.isJoannaArticle === true
                        ).length ? null : (
                            <button
                                className="slide-btn load-more-btn"
                                onClick={loadMoreArticlePageArticles}
                            >
                                LOAD MORE
                            </button>
                        )}
                    </div>
                </div>

                <div className="sidebar-column">
                    <SiteContentSidebarAuthor />
                    <SiteContentSidebar />
                    <SiteContentSidebarLatest />
                    <SiteContentSidebarSubscribe />
                    <div className="sidebar-ads">
                        <a href="my resume">
                            <p>Тут я розташую посилання на своє резюме</p>
                        </a>
                    </div>
                </div>
            </Container>

            {/* збільшення 1 картинки */}
            <div className={`img-zoom ${firstImgZoom ? 'active' : ''}`}>
                <button
                    className="btn-close"
                    onClick={changeFirstImgZoom}
                ></button>
                <img src={articlesObject[+id!].firstArticlePageImg} alt="" />
            </div>

            {/* збільшення галереї */}
            <div className={`img-zoom ${galeryZoom ? 'active' : ''}`}>
                <button
                    className="btn-close"
                    onClick={changeGaleryZoom}
                ></button>
                <ArticlePageSlider />
            </div>
        </>
    )
}

export default ArticlePage
