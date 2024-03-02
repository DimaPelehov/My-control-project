import { Grid } from '@mui/material'
// import { siteContentSidebarLatestArr } from 'utils/siteContentSidebarLatestItemsArr'
import SiteContentSidebarLatestItem from './SiteContentSidebarLatestItem'
import { articlesArray } from 'utils/articlesArray'

type Props = {}

const SiteContentSidebarLatest = (props: Props) => {
    return (
        <Grid container columns={1}>
            {articlesArray
                .filter((item) => item.isLatest === true)
                .map(
                    ({
                        id,
                        hrefArticle,
                        hrefAuthor,
                        authorName,
                        months,
                        day,
                        year,
                        title,
                        image,
                        itemNumber,
                    }) => (
                        <Grid item xs={1} key={id}>
                            <SiteContentSidebarLatestItem
                                hrefArticle={hrefArticle}
                                hrefAuthor={hrefAuthor}
                                authorName={authorName}
                                months={months}
                                day={day}
                                year={year}
                                title={title}
                                image={image}
                                itemNumber={itemNumber}
                            />
                        </Grid>
                    )
                )}
        </Grid>
    )
}

export default SiteContentSidebarLatest
