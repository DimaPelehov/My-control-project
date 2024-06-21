import { Grid } from '@mui/material'
import { articlesArray } from 'utils/articlesArray'
import SiteContentArtickeColumnItem from '../SiteContentArticleColumn/SiteContentArtickeColumnItem'

type Props = {
    addArticleToFavorites: (id: number, count: number) => void
    toggleLikeState: (id: number) => void
    articlesLikeState: { [id: number]: boolean }
    articlesAddState: { [id: number]: boolean }
    toggleAddState: (id: number) => void
}

const AeneanCategoryArticles = ({
    addArticleToFavorites,
    toggleLikeState,
    articlesLikeState,
    articlesAddState,
    toggleAddState,
}: Props) => {
    return (
        <Grid container columns={1}>
            {articlesArray
                .filter((item) => item.isAenean === true)
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
                                count={count}
                                toggleLikeState={toggleLikeState}
                                isLiked={articlesLikeState[id]}
                                isAdd={articlesAddState[id]}
                                toggleAddState={toggleAddState}
                            />
                        </Grid>
                    )
                )}
        </Grid>
    )
}

export default AeneanCategoryArticles
