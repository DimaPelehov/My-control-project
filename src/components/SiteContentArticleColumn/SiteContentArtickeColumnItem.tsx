import { Card, CardContent } from '@mui/material'
import '../SiteContent/SiteContent.scss'
import { Link } from 'react-router-dom'

type SiteContentArtickeColumnItemType = {
    id: number
    image: string
    hrefArticle: string
    hrefAuthor?: string
    imageAuthor?: string
    authorName?: string
    months?: string
    day?: number
    year?: number
    category?: string
    title: string
    views?: string
    minuteRead?: number
    text?: string
    shares?: number
    facebookCount?: number
    instaCount?: number
    addArticleToFavorites: (id: number, count: number) => void
    removeArticleFromFavorites?: (id: number) => void
    count: number
    isLiked?: boolean
    toggleLikeState?: (id: number) => void
}

const SiteContentArtickeColumnItem = ({
    id,
    image,
    hrefAuthor,
    imageAuthor,
    authorName,
    months,
    day,
    year,
    category,
    title,
    views,
    minuteRead,
    text,
    shares,
    facebookCount,
    instaCount,
    addArticleToFavorites,
    removeArticleFromFavorites,
    count,
    isLiked,
    toggleLikeState,
}: SiteContentArtickeColumnItemType) => {
    return (
        <Card className="sitecontent-article-item">
            <CardContent sx={{ padding: '0', display: 'flex', gap: '40px' }}>
                <div className="sitecontent-article-img">
                    <Link to={`/articles/${id}`}>
                        <img src={image} alt={title} />
                    </Link>
                </div>
                <div className="sitecontent-article-content">
                    <div className="sitecontent-article-author-like">
                        <div className="section-post-tile-author">
                            <Link className="author-img" to={`${hrefAuthor}`}>
                                <img src={imageAuthor} alt={authorName} />
                            </Link>
                            <div className="section-post-tile-author-info">
                                <Link to={`${hrefAuthor}`}>{authorName}</Link>
                                {months} {day}, {year}
                            </div>
                        </div>

                        <div
                            className={`like ${isLiked ? 'active' : ''}`}
                            onClick={() => toggleLikeState!(id)}
                        ></div>
                    </div>

                    <h2 className="sitecontent-article-column-item-header">
                        <Link to={`/articles/${id}`}>
                            <span className="sectionpost-article-column-item-category">
                                {category}
                            </span>
                            <span
                                className="sectionpost-article-column-item-title"
                                dangerouslySetInnerHTML={{ __html: title }}
                            ></span>
                        </Link>
                    </h2>
                    <ul className="activity">
                        <li>
                            <span className="activity-icon views"></span>
                            {views}K views
                        </li>
                        <li>
                            <span className="activity-icon read"></span>
                            {minuteRead} minute read
                        </li>
                    </ul>
                    <p className="sitecontent-article-text">{text}</p>
                    <div className="section-post-tile-share">
                        <span>{shares} Shares</span>
                        <div className="section-post-tile-share-items">
                            <div className="section-post-tile-share-item ">
                                <a href="https://uk-ua.facebook.com/">
                                    <span className="si-facebook"></span>
                                </a>
                                <span className="section-post-tile-si-count">
                                    {facebookCount}
                                </span>
                            </div>

                            <div className="section-post-tile-share-item ">
                                <a href="https://www.instagram.com/">
                                    <span className="si-instagram"></span>
                                </a>
                                <span className="section-post-tile-si-count">
                                    {instaCount}
                                </span>
                            </div>
                        </div>
                    </div>

                    <button
                        className="slide-btn sitecontent-article-btn"
                        onClick={() => addArticleToFavorites(id, count)}
                    >
                        Add to favorite
                    </button>
                </div>
            </CardContent>
        </Card>
    )
}

export default SiteContentArtickeColumnItem
