import { useAppSelector } from 'store/hooks'
import '../BottomNavBar/BottomNavBar.scss'
import FavoritesTotal from 'components/FavoritesTotal/FavoritesTotal'

type Props = {
    // articlesInFavorites: { [id: number]: number }
}

const FavoritesHeader = (props: Props) => {
    // додавання статей до favorites через redux
    const articlesInFavorites = useAppSelector(
        (state) => state.articlesInFavorites
    )

    return (
        <div className="favoritesheader">
            <div className="favorites-icon"></div>
            <FavoritesTotal articlesInFavorites={articlesInFavorites} />
        </div>
    )
}

export default FavoritesHeader
