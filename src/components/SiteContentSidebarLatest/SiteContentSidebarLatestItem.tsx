import { Card, CardContent } from '@mui/material'
import '../SiteContent/SiteContent.scss'
import { Link } from 'react-router-dom'

type SiteContentSidebarLatestItemType = {
    hrefAuthor?: string
    authorName?: string
    months?: string
    day?: number
    year?: number
    title: string
    image: string
    itemNumber?: string
    id: number
}

const SiteContentSidebarLatestItem = ({
    hrefAuthor,
    authorName,
    months,
    day,
    year,
    title,
    image,
    itemNumber,
    id,
}: SiteContentSidebarLatestItemType) => {
    return (
        <Card className="sidebar-latest-item">
            <CardContent sx={{ padding: '0' }}>
                <Link to={`/articles/${id}`}>
                    <div className="sidebar-latest-content">
                        <div className="sidebar-latest-content-header">
                            <div
                                className="latest-current"
                                data-content={itemNumber}
                            ></div>
                            <div className="section-post-tile-author-info">
                                <Link to={`/${hrefAuthor}`}>{authorName}</Link>
                                {months} {day}, {year}
                            </div>
                        </div>
                        <div
                            className="sidebar-latest-content-body"
                            dangerouslySetInnerHTML={{ __html: title }}
                        ></div>
                    </div>
                    <div className="sidebar-latest-img">
                        <img src={image} alt={title} />
                    </div>
                </Link>
            </CardContent>
        </Card>
    )
}

export default SiteContentSidebarLatestItem
