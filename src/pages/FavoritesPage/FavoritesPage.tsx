import './FavoritesPage.scss'
import { Container } from '@mui/material'
import FavoritesArticleList from 'components/FavoritesArticlesList/FavoritesArticleList'
import FavoritesArticlesListItemExtended from 'components/FavoritesArticlesList/FavoritesArticlesListItemExtended'
import FavoritesTotal from 'components/FavoritesTotal/FavoritesTotal'

type Props = {
    articlesInFavorites: { [id: number]: number }
    removeArticleFromFavorites: (id: number) => void
    // toggleLikeState: (id: number) => void
    // articlesLikeState: { [id: number]: boolean }
}

const FavoritesPage = ({
    articlesInFavorites,
    removeArticleFromFavorites,
    // toggleLikeState,
    // articlesLikeState,
}: Props) => {
    return (
        <div className="favorites-fon">
            <Container maxWidth="lg">
                <div className="favorites-pages">
                    <h1 className="favorites-pages-count">
                        Favorites:
                        <FavoritesTotal
                            articlesInFavorites={articlesInFavorites}
                        />
                        article(s)
                    </h1>

                    {Object.keys(articlesInFavorites).length > 0 ? (
                        <FavoritesArticleList
                            articlesInFavorites={articlesInFavorites}
                            FavoritesItem={FavoritesArticlesListItemExtended}
                            // виводимо розширену версію FavoritesArticlesList
                            removeArticleFromFavorites={
                                removeArticleFromFavorites
                            }
                            // articlesLikeState={articlesLikeState}
                            // toggleLikeState={toggleLikeState}
                        />
                    ) : (
                        <div>
                            <p>У вас немає вподобаних статей</p>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default FavoritesPage
