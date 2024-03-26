import { Article } from 'utils/articlesArray'

type Props = { article: Article; articleCount: number }
// тобто article у нас - це об'єкт Article з об'єкту articlesObject, а articleCount - кількість  (котра  = count:1)

const FavoritesArticlesListItem = ({ article, articleCount }: Props) => {
    return (
        <div>
            {article.title}:{articleCount}
        </div>
    )
}

export default FavoritesArticlesListItem
