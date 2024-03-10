import './FavoritesPage.scss'
import { Container } from '@mui/material'
import { articlesArray, getArticlesObject, Article } from 'utils/articlesArray'

type Props = {
    articlesInFavorites: { [id: number]: number }
    articlesObject?: { [id: number]: Article }
}

const FavoritesPage = ({
    articlesInFavorites,
    articlesObject = getArticlesObject(articlesArray),
}: Props) => {
    return (
        <div className="favorites-fon">
            <Container maxWidth="lg">
                <div className="favorites-pages">
                    <h1>Favorites</h1>
                    {Object.keys(articlesInFavorites).map((articleId) => (
                        <div className="favorites-page-item" key={articleId}>
                            <div className="sitecontent-article-img">
                                <a
                                    href={
                                        articlesObject[+articleId].hrefArticle
                                    }
                                >
                                    <img
                                        src={articlesObject[+articleId].image}
                                        alt={articlesObject[+articleId].title}
                                    />
                                </a>
                            </div>
                            <div className="sitecontent-article-content">
                                <div className="section-post-tile-author">
                                    <a
                                        className="author-img"
                                        href={
                                            articlesObject[+articleId]
                                                .hrefAuthor
                                        }
                                    >
                                        <img
                                            src={
                                                articlesObject[+articleId]
                                                    .imageAuthor
                                            }
                                            alt={
                                                articlesObject[+articleId]
                                                    .authorName
                                            }
                                        />
                                    </a>
                                    <div className="section-post-tile-author-info">
                                        <a
                                            href={
                                                articlesObject[+articleId]
                                                    .hrefAuthor
                                            }
                                        >
                                            {
                                                articlesObject[+articleId]
                                                    .authorName
                                            }
                                        </a>
                                        {articlesObject[+articleId].months}
                                        {articlesObject[+articleId].day},
                                        {articlesObject[+articleId].year}
                                    </div>
                                </div>

                                <h2 className="sitecontent-article-column-item-header">
                                    <a
                                        href={
                                            articlesObject[+articleId]
                                                .hrefArticle
                                        }
                                    >
                                        <span className="sectionpost-article-column-item-category">
                                            {
                                                articlesObject[+articleId]
                                                    .category
                                            }
                                        </span>
                                        <span className="sectionpost-article-column-item-title">
                                            {articlesObject[+articleId].title}
                                        </span>
                                    </a>
                                </h2>
                                <ul className="activity">
                                    <li>
                                        <span className="activity-icon views"></span>
                                        {articlesObject[+articleId].views}K
                                        views
                                    </li>
                                    <li>
                                        <span className="activity-icon read"></span>
                                        {articlesObject[+articleId].minuteRead}{' '}
                                        minute read
                                    </li>
                                </ul>
                                <p className="sitecontent-article-text">
                                    {articlesObject[+articleId].text}
                                </p>
                                <div className="section-post-tile-share">
                                    <span>
                                        {articlesObject[+articleId].shares}{' '}
                                        Shares
                                    </span>
                                    <div className="section-post-tile-share-items">
                                        <div className="section-post-tile-share-item ">
                                            <a href="https://uk-ua.facebook.com/">
                                                <span className="si-facebook"></span>
                                            </a>
                                            <span className="section-post-tile-si-count">
                                                {
                                                    articlesObject[+articleId]
                                                        .facebookCount
                                                }
                                            </span>
                                        </div>

                                        <div className="section-post-tile-share-item ">
                                            <a href="https://www.instagram.com/">
                                                <span className="si-instagram"></span>
                                            </a>
                                            <span className="section-post-tile-si-count">
                                                {
                                                    articlesObject[+articleId]
                                                        .instaCount
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default FavoritesPage
