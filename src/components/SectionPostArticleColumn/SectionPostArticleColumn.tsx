import { Grid } from '@mui/material'
import SectionPostArticleColumnItem from './SectionPostArticleColumnItem'
import { articlesArray } from 'utils/articlesArray'

type Props = {}

const SectionPostArticleColumn = (props: Props) => {
    return (
        <Grid container columns={1}>
            {articlesArray
                .filter((item) => item.isSectionPostColumn === true)
                .map(
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
                                id={id}
                            />
                        </Grid>
                    )
                )}
        </Grid>
    )
}

export default SectionPostArticleColumn
