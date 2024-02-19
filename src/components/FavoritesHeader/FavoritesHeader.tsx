import '../BottomNavBar/BottomNavBar.scss'

type Props = { favoritesData: { totalCount: number } }

const FavoritesHeader = ({ favoritesData }: Props) => {
    return (
        <div className="favoritesheader">
            <div className="favorites-icon"></div>
            <div className="favorites-count">{favoritesData.totalCount}</div>
        </div>
    )
}

export default FavoritesHeader
