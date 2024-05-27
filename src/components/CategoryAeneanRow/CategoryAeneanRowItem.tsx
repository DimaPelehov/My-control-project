import { Card, CardContent, Typography } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'

type CategoryAeneanRowItemType = {
    id: number
    image: string
    title: string
    views?: string
}

const CategoryAeneanRowItem = ({
    id,
    image,
    title,
    views,
}: CategoryAeneanRowItemType) => {
    return (
        <Card sx={{ borderRadius: '0', boxShadow: 'none' }}>
            <div className="category-img">
                <Link to={`/articles/${id}`}>
                    <img src={image} alt={title} />
                </Link>
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
                    <NavLink
                        to={`/articles/${id}`}
                        dangerouslySetInnerHTML={{ __html: title }}
                        className="menu-category-link"
                    ></NavLink>
                </Typography>
                <ul className="activity">
                    <li>
                        <span className="activity-icon views"></span>
                        {views}K views
                    </li>
                </ul>
            </CardContent>
        </Card>
    )
}

export default CategoryAeneanRowItem
