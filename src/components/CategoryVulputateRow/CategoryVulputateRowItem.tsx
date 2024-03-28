import { Card, CardContent, Typography } from '@mui/material'

type CategoryVulputateRowItemType = {
    id: number
    image: string
    hrefArticle: string
    title: string
    views?: string
}

const CategoryVulputateRowItem = ({
    id,
    image,
    hrefArticle,
    title,
    views,
}: CategoryVulputateRowItemType) => {
    return (
        <Card sx={{ borderRadius: '0', boxShadow: 'none' }}>
            <div className="category-img">
                <a href={hrefArticle}>
                    <img src={image} alt={title} />
                </a>
            </div>
            <CardContent sx={{ padding: '16px 0 24px' }}>
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: '18px',
                        fontFamily: 'Cormorant Garamond, serif',
                        fontWeight: '800',
                    }}
                >
                    <a
                        href={hrefArticle}
                        dangerouslySetInnerHTML={{ __html: title }}
                        className="menu-category-link"
                    ></a>
                </Typography>
                <ul className="activity">
                    <li>
                        <span className="activity-icon views"></span>
                        {views} K views
                    </li>
                </ul>
            </CardContent>
        </Card>
    )
}

export default CategoryVulputateRowItem
