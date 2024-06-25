import { Article } from 'utils/articlesArray'
import 'pages/FavoritesPage/FavoritesPage.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { toggleLikeState } from '../../redux/likeReducer'
import { Link } from 'react-router-dom'

type Props = {
    article: Article
    articleCount: number
    removeArticleFromFavorites: (id: number) => void
    // isLiked?: boolean
    // toggleLikeState: (id: number) => void
}

const FavoritesArticlesListItemExtended = ({
    article,
    removeArticleFromFavorites,
    // isLiked,
    // toggleLikeState,
}: Props) => {
    // реалізація like через redux
    const isLiked = useAppSelector(
        (state) => state.articlesLikeState[article.id]
    )

    const dispatch = useAppDispatch()

    return (
        <div className="favorites-page-item">
            <div className="sitecontent-article-img">
                <Link to={`/articles/${article.id}`}>
                    <img src={article.image} alt={article.title} />
                </Link>
            </div>
            <div className="sitecontent-article-content">
                <div className="favorites-page-author-delete">
                    <div className="section-post-tile-author">
                        <Link to={`/${article.hrefAuthor}`}>
                            <img
                                src={article.imageAuthor}
                                alt={article.authorName}
                            />
                        </Link>
                        <div className="section-post-tile-author-info">
                            <Link to={`/${article.hrefAuthor}`}>
                                {article.authorName}
                            </Link>
                            {article.months}
                            {article.day},{article.year}
                        </div>
                    </div>

                    <div
                        className={`like ${isLiked ? 'active' : ''}`}
                        onClick={() => dispatch(toggleLikeState(article.id))}
                        // onClick={() => toggleLikeState(article.id)}
                    ></div>

                    <IconButton
                        aria-label="delete"
                        onClick={() => removeArticleFromFavorites(article.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </div>

                <h2 className="sitecontent-article-column-item-header">
                    <Link to={`/articles/${article.id}`}>
                        <span className="sectionpost-article-column-item-category">
                            {article.category}
                        </span>
                        <span
                            className="sectionpost-article-column-item-title"
                            dangerouslySetInnerHTML={{ __html: article.title }}
                        ></span>
                    </Link>
                </h2>
                <ul className="activity">
                    <li>
                        <span className="activity-icon views"></span>
                        {article.views}K views
                    </li>
                    <li>
                        <span className="activity-icon read"></span>
                        {article.minuteRead} minute read
                    </li>
                </ul>
                <p className="sitecontent-article-text">{article.text}</p>
                <div className="section-post-tile-share">
                    <span>{article.shares} Shares</span>
                    <div className="section-post-tile-share-items">
                        <div className="section-post-tile-share-item ">
                            <a href="https://uk-ua.facebook.com/">
                                <span className="si-facebook"></span>
                            </a>
                            <span className="section-post-tile-si-count">
                                {article.facebookCount}
                            </span>
                        </div>

                        <div className="section-post-tile-share-item ">
                            <a href="https://www.instagram.com/">
                                <span className="si-instagram"></span>
                            </a>
                            <span className="section-post-tile-si-count">
                                {article.instaCount}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoritesArticlesListItemExtended
