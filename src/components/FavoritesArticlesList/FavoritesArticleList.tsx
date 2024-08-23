import { articlesArray, getArticlesObject, Article } from 'utils/articlesArray'
import FavoritesArticlesListItem from './FavoritesArticlesListItem'

type Props = {
    articlesInFavorites: { [id: number]: number }
    articlesObject?: { [id: number]: Article }
    FavoritesItem?: any
    // removeArticleFromFavorites?: (id: number) => void
    // toggleLikeState?: (id: number) => void
    // articlesLikeState?: { [id: number]: boolean }
    setArticlesAddState: (e: any) => void
}

const FavoritesArticleList = ({
    articlesInFavorites,
    articlesObject = getArticlesObject(articlesArray),
    FavoritesItem = FavoritesArticlesListItem,
    // за замовчуванням FavoritesItem рендерить FavoritesArticlesListItem
    // toggleLikeState,
    // articlesLikeState,
    setArticlesAddState,
}: Props) => {
    return (
        <>
            {Object.keys(articlesInFavorites).map((articleId) => (
                <FavoritesItem
                    key={articleId}
                    article={articlesObject[+articleId]}
                    // article  - це об'єкт Article з об'єкту articlesObject
                    articleCount={articlesInFavorites[+articleId]}
                    // articleCount - кількість  (котра  = count:1)
                    // isLiked={articlesLikeState![+articleId]}
                    // toggleLikeState={toggleLikeState}
                    setArticlesAddState={setArticlesAddState}
                />
            ))}
        </>
    )
}

export default FavoritesArticleList
