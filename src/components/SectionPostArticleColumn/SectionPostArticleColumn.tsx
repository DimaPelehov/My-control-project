import { Grid } from '@mui/material'
// import '../SectionPost/SectionPost.scss'
import SectionPostArticleColumnItem from './SectionPostArticleColumnItem'
import { sectionColumnItemsArr } from 'utils/sectionPostColumnItemsArr'

type Props = {}

const SectionPostArticleColumn = (props: Props) => {
    return (
        <Grid container columns={1}>
            {sectionColumnItemsArr.map(
                ({
                    id,
                    image,
                    category,
                    title,
                    hrefArticle,
                    hrefAuthor,
                    views,
                    shares,
                    authorName,
                }) => (
                    <Grid item xs={1} key={id}>
                        <SectionPostArticleColumnItem
                            image={image}
                            category={category}
                            title={title}
                            hrefArticle={hrefArticle}
                            hrefAuthor={hrefAuthor}
                            views={views}
                            shares={shares}
                            authorName={authorName}
                        />
                    </Grid>
                )
            )}
        </Grid>
    )
}

export default SectionPostArticleColumn
