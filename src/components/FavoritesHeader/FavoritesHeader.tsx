import { articlesArray, getArticlesObject, Article } from 'utils/articlesArray'
import '../BottomNavBar/BottomNavBar.scss'
import FavoritesTotal from 'components/FavoritesTotal/FavoritesTotal'

type Props = {
    articlesInFavorites: { [id: number]: number }
    articlesObject?: { [id: number]: Article }
}

const FavoritesHeader = ({
    articlesInFavorites,
    articlesObject = getArticlesObject(articlesArray),
}: Props) => {
    return (
        <div className="favoritesheader">
            <div className="favorites-icon"></div>
            <FavoritesTotal articlesInFavorites={articlesInFavorites} />
        </div>
    )
}

export default FavoritesHeader
