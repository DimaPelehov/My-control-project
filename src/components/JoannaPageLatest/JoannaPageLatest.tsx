import { Grid } from '@mui/material'
import SiteContentSidebarLatestItem from 'components/SiteContentSidebarLatest/SiteContentSidebarLatestItem'
import { articlesArray } from 'utils/articlesArray'

type Props = {}
const JoannaPageLatest = (props: Props) => {
    return (
        <div className="sidebar-latest">
            <div className="sidebar-item-header">
                <h5>LATEST STORIES</h5>
                <div className="horizontal-line"></div>
            </div>
            <Grid container columns={1}>
                {articlesArray
                    .filter((item) => item.isJoannaPageLatest === true)
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
        </div>
    )
}
export default JoannaPageLatest
