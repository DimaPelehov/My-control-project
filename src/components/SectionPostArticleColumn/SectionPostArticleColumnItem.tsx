import { Component } from 'react'
import '../SectionPost/SectionPost.scss'
import { Card, CardContent } from '@mui/material'

type SectionPostArticleColumnItemType = {
    image: string
    category?: string
    title: string
    hrefArticle: string
    hrefAuthor?: string
    views?: string
    shares?: number
    authorName?: string
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
            hrefArticle,
            hrefAuthor,
            views,
            shares,
            authorName,
        } = this.props
        return (
            <Card className="sectionpost-article-column-item">
                <CardContent
                    sx={{ padding: '0 ', display: 'flex', gap: '20px' }}
                >
                    <div className="sectionpost-article-column-item-img">
                        <a href={hrefArticle}>
                            <img src={image} alt={title} />
                        </a>
                    </div>
                    <div className="sectionpost-article-column-item-content">
                        <h2 className="sectionpost-article-column-item-header">
                            <a href={hrefArticle}>
                                <span className="sectionpost-article-column-item-category">
                                    {category}
                                </span>
                                <span
                                    className="sectionpost-article-column-item-title"
                                    dangerouslySetInnerHTML={{ __html: title }}
                                ></span>
                            </a>
                        </h2>
                        <ul className="activity">
                            <li>
                                <a href={hrefAuthor}>{authorName}</a>
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

// const SectionPostArticleColumnItem = (
//     props: SectionPostArticleColumnItemType
// ) => {}

export default SectionPostArticleColumnItem
