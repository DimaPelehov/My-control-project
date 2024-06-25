import { Component } from 'react'
import '../SectionPost/SectionPost.scss'
import { Card, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'

type SectionPostArticleColumnItemType = {
    image: string
    category?: string
    title: string
    hrefAuthor?: string
    views?: string
    shares?: number
    authorName?: string
    id: number
}

type State = {}

class SectionPostArticleColumnItem extends Component<
    SectionPostArticleColumnItemType,
    State
> {
    render() {
        const {
            image,
            category,
            title,
            hrefAuthor,
            views,
            shares,
            authorName,
            id,
        } = this.props
        return (
            <Card className="sectionpost-article-column-item">
                <CardContent
                    sx={{ padding: '0 ', display: 'flex', gap: '20px' }}
                >
                    <div className="sectionpost-article-column-item-img">
                        <Link to={`/articles/${id}`}>
                            <img src={image} alt={title} />
                        </Link>
                    </div>

                    <div className="sectionpost-article-column-item-content">
                        <h2 className="sectionpost-article-column-item-header">
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
                                <Link to={`/${hrefAuthor}`}>{authorName}</Link>
                            </li>
                            <li>
                                <span className="activity-icon views"></span>
                                {views}K views
                            </li>
                            <li>
                                <span className="activity-icon shares"></span>
                                {shares} shares
                            </li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        )
    }
}

export default SectionPostArticleColumnItem
