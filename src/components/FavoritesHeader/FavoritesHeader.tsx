import { articlesArray, getArticlesObject, Article } from 'utils/articlesArray'
import '../BottomNavBar/BottomNavBar.scss'

type Props = {
    articlesInFavorites: { [id: number]: number }
    articlesObject?: { [id: number]: Article }
}

const FavoritesHeader = ({
    articlesInFavorites,
    articlesObject = getArticlesObject(articlesArray),
}: Props) => {
    console.log(articlesInFavorites)
    // ключами об'єкту articlesInFavorites є id, а значеннями - count(котрий=1)
    return (
        <div className="favoritesheader">
            <div className="favorites-icon"></div>
            <div className="favorites-count">
                {Object.keys(articlesInFavorites).reduce(
                    (sum, articleId) =>
                        sum +
                        // articlesObject[+articleId].count
                        articlesInFavorites[+articleId],
                    // отримуємо сумарну кількість лайкнутих статей
                    0
                )}
            </div>
        </div>
    )
}

export default FavoritesHeader
