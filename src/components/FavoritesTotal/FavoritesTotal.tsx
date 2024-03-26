type Props = { articlesInFavorites: { [id: number]: number } }

const FavoritesTotal = ({ articlesInFavorites }: Props) => {
    console.log(articlesInFavorites)
    // ключами об'єкту articlesInFavorites є id, а значеннями - count(котрий=1)
    return (
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
    )
}

export default FavoritesTotal
