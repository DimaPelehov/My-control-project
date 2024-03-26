import { articlesArray, getArticlesObject, Article } from 'utils/articlesArray'
import FavoritesArticlesListItem from './FavoritesArticlesListItem'

type Props = {
    articlesInFavorites: { [id: number]: number }
    articlesObject?: { [id: number]: Article }
    FavoritesItem?: any
}

const FavoritesArticleList = ({
    articlesInFavorites,
    articlesObject = getArticlesObject(articlesArray),
    FavoritesItem = FavoritesArticlesListItem,
    // за замовчуванням FavoritesItem рендерить FavoritesArticlesListItem
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
                />
            ))}
        </>
    )
}

export default FavoritesArticleList
