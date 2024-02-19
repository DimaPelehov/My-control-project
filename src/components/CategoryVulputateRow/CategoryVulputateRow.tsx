import { Grid } from '@mui/material'
import { categoryVulputateArr } from 'utils/categoryVulputateRowItemsArr'
import CategoryVulputateRowItem from './CategoryVulputateRowItem'

type Props = {}
const CategoryVulputateRow = (props: Props) => {
    return (
        <Grid container sx={{ borderBottom: '1px solid #e9ecef' }}>
            {categoryVulputateArr.map(
                ({ id, image, hrefArticle, title, views }) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        key={id}
                        sx={{ padding: '0px 16px' }}
                    >
                        <CategoryVulputateRowItem
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
export default CategoryVulputateRow
