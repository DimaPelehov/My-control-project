import { Grid } from '@mui/material'
import CategoryEtiamRowItem from './CategoryEtiamRowItem'
import { articlesArray } from 'utils/articlesArray'

type Props = {}
const CategoryEtiamRow = (props: Props) => {
    return (
        <Grid container sx={{ borderBottom: '1px solid #e9ecef' }}>
            {articlesArray
                .filter((item) => item.isMenuCategoryEtiam === true)
                .map(({ id, image, hrefArticle, title, views }) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        key={id}
                        sx={{ padding: '0px 16px' }}
                    >
                        <CategoryEtiamRowItem
                            id={id}
                            image={image}
                            hrefArticle={hrefArticle}
                            title={title}
                            views={views}
                        />
                    </Grid>
                ))}
        </Grid>
    )
}
export default CategoryEtiamRow
