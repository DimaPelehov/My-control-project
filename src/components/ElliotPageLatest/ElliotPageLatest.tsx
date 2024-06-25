import { Grid } from '@mui/material'
import SiteContentSidebarLatestItem from 'components/SiteContentSidebarLatest/SiteContentSidebarLatestItem'
import { articlesArray } from 'utils/articlesArray'

type Props = {}
const ElliotPageLatest = (props: Props) => {
    return (
        <div className="sidebar-latest">
            <div className="sidebar-item-header">
                <h5>LATEST STORIES</h5>
                <div className="horizontal-line"></div>
            </div>
            <Grid container columns={1}>
                {articlesArray
                    .filter((item) => item.isElliotPageLatest === true)
                    .map(
                        ({
                            id,
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
                                    hrefAuthor={hrefAuthor}
                                    authorName={authorName}
                                    months={months}
                                    day={day}
                                    year={year}
                                    title={title}
                                    image={image}
                                    itemNumber={itemNumber}
                                    id={id}
                                />
                            </Grid>
                        )
                    )}
            </Grid>
        </div>
    )
}
export default ElliotPageLatest
