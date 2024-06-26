import { Grid } from '@mui/material'
import CategoryVulputateRowItem from './CategoryVulputateRowItem'
import { articlesArray } from 'utils/articlesArray'

type Props = {}
const CategoryVulputateRow = (props: Props) => {
    return (
        <Grid container sx={{ borderBottom: '1px solid #e9ecef' }}>
            {articlesArray
                .filter((item) => item.isMenuCategoryVulputate === true)
                .map(({ id, image, title, views }) => (
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
                            title={title}
                            views={views}
                        />
                    </Grid>
                ))}
        </Grid>
    )
}
export default CategoryVulputateRow
