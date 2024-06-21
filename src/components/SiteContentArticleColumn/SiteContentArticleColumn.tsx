import { Grid } from '@mui/material'
import { articlesArray } from 'utils/articlesArray'
import SiteContentArtickeColumnItem from './SiteContentArtickeColumnItem'

type Props = {
    addArticleToFavorites: (id: number, count: number) => void
    removeArticleFromFavorites: (id: number) => void
    articlesLikeState: { [id: number]: boolean }
    toggleLikeState: (id: number) => void
    articlesAddState: { [id: number]: boolean }
    toggleAddState: (id: number) => void
}

const SiteContentArticleColumn = ({
    addArticleToFavorites,
    removeArticleFromFavorites,
    articlesLikeState,
    toggleLikeState,
    articlesAddState,
    toggleAddState,
}: Props) => {
    return (
        <Grid container columns={1}>
            {articlesArray
                .filter((item) => item.isBasic === true)
                .map(
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
                        count,
                    }) => (
                        <Grid item xs={1} key={id}>
                            <SiteContentArtickeColumnItem
                                id={id}
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
                                addArticleToFavorites={addArticleToFavorites}
                                removeArticleFromFavorites={
                                    removeArticleFromFavorites
                                }
                                count={count}
                                isLiked={articlesLikeState[id]}
                                toggleLikeState={toggleLikeState}
                                isAdd={articlesAddState[id]}
                                toggleAddState={toggleAddState}
                            />
                        </Grid>
                    )
                )}
        </Grid>
    )
}

export default SiteContentArticleColumn
