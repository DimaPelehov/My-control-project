import { Grid } from '@mui/material'
import { siteContentArticlesArr } from 'utils/siteContentColumnItemsArr'
import SiteContentArtickeColumnItem from './SiteContentArtickeColumnItem'

type Props = {}

const SiteContentArticleColumn = (props: Props) => {
    return (
        <Grid container columns={1}>
            {siteContentArticlesArr.map(
                ({
                    id,
                    image,
                    hrefArticle,
                    hrefAuthor,
                    imageAuthor,
                    authorName,
                    months,
                    day,
                    year,
                    category,
                    title,
                    views,
                    minuteRead,
                    text,
                    shares,
                    facebookCount,
                    instaCount,
                }) => (
                    <Grid item xs={1} key={id}>
                        <SiteContentArtickeColumnItem
                            image={image}
                            hrefArticle={hrefArticle}
                            hrefAuthor={hrefAuthor}
                            imageAuthor={imageAuthor}
                            authorName={authorName}
                            months={months}
                            day={day}
                            year={year}
                            category={category}
                            title={title}
                            views={views}
                            minuteRead={minuteRead}
                            text={text}
                            shares={shares}
                            facebookCount={facebookCount}
                            instaCount={instaCount}
                        />
                    </Grid>
                )
            )}
        </Grid>
    )
}

export default SiteContentArticleColumn
