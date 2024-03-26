import './FavoritesPage.scss'
import { Container } from '@mui/material'
import FavoritesArticleList from 'components/FavoritesArticlesList/FavoritesArticleList'
import FavoritesArticlesListItemExtended from 'components/FavoritesArticlesList/FavoritesArticlesListItemExtended'
import FavoritesTotal from 'components/FavoritesTotal/FavoritesTotal'

type Props = {
    articlesInFavorites: { [id: number]: number }
}

const FavoritesPage = ({ articlesInFavorites }: Props) => {
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

                    <FavoritesArticleList
                        articlesInFavorites={articlesInFavorites}
                        FavoritesItem={FavoritesArticlesListItemExtended}
                        // виводимо розширену версію FavoritesArticlesList
                    />
                </div>
            </Container>
        </div>
    )
}

export default FavoritesPage
