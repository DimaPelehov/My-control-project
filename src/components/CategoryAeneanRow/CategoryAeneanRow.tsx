import { Grid } from '@mui/material'
import { categoryAeneanArr } from 'utils/categoryAeneanRowItemsArr'
import CategoryAeneanRowItem from './CategoryAeneanRowItem'

type Props = {}

const CategoryAeneanRow = (props: Props) => {
    return (
        <Grid container sx={{ borderBottom: '1px solid #e9ecef' }}>
            {categoryAeneanArr.map(
                ({ id, image, hrefArticle, title, views }) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        key={id}
                        sx={{ padding: '0px 16px' }}
                    >
                        <CategoryAeneanRowItem
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

export default CategoryAeneanRow
