import { Grid } from '@mui/material'
import CategoryAeneanRowItem from './CategoryAeneanRowItem'
import { articlesArray } from 'utils/articlesArray'

type Props = {}

const CategoryAeneanRow = (props: Props) => {
    return (
        <Grid container sx={{ borderBottom: '1px solid #e9ecef' }}>
            {articlesArray
                .filter((item) => item.isMenuCategoryAenenan === true)
                .map(({ id, image, title, views }) => (
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
                            title={title}
                            views={views}
                        />
                    </Grid>
                ))}
        </Grid>
    )
}

export default CategoryAeneanRow
