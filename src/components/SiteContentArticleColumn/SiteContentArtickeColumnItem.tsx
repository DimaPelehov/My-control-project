import { Card, CardContent } from '@mui/material'
import '../SiteContent/SiteContent.scss'
import { useState } from 'react'

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
    count: number
}

const SiteContentArtickeColumnItem = ({
    id,
    image,
    hrefArticle,
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
    count,
}: SiteContentArtickeColumnItemType) => {
    // зміна кольору лайк
    const [likeVariant, setLikeVariant] = useState<string>('like')

    const changeColorLike = () => {
        setLikeVariant((prevState) =>
            prevState === 'like' ? 'like-active' : 'like'
        )
    }

    return (
        <Card className="sitecontent-article-item">
            <CardContent sx={{ padding: '0', display: 'flex', gap: '40px' }}>
                <div className="sitecontent-article-img">
                    <a href={hrefArticle}>
                        <img src={image} alt={title} />
                    </a>
                </div>
                <div className="sitecontent-article-content">
                    <div className="sitecontent-article-author-like">
                        <div className="section-post-tile-author">
                            <a className="author-img" href={hrefAuthor}>
                                <img src={imageAuthor} alt={authorName} />
                            </a>
                            <div className="section-post-tile-author-info">
                                <a href={hrefAuthor}>{authorName}</a>
                                {months} {day}, {year}
                            </div>
                        </div>

                        <div
                            className={likeVariant}
                            onClick={() => {
                                addArticleToFavorites(id, count)
                                changeColorLike()
                            }}
                        ></div>
                    </div>

                    <h2 className="sitecontent-article-column-item-header">
                        <a href={hrefArticle}>
                            <span className="sectionpost-article-column-item-category">
                                {category}
                            </span>
                            <span className="sectionpost-article-column-item-title">
                                {title}
                            </span>
                        </a>
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
                </div>
            </CardContent>
        </Card>
    )
}

export default SiteContentArtickeColumnItem
