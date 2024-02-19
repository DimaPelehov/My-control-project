import { Grid } from '@mui/material'
import { categoryEtiamArr } from 'utils/categoryEtiamRowItemsArr'
import CategoryEtiamRowItem from './CategoryEtiamRowItem'

type Props = {}
const CategoryEtiamRow = (props: Props) => {
    return (
        <Grid container sx={{ borderBottom: '1px solid #e9ecef' }}>
            {categoryEtiamArr.map(
                ({ id, image, hrefArticle, title, views }) => (
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
                )
            )}
        </Grid>
    )
}
export default CategoryEtiamRow
