import SectionPost from 'components/SectionPost/SectionPost'
import SectionSubscribe from 'components/SectionSubscribe/SectionSubscribe'
import SiteContent from 'components/SiteContent/SiteContent'

type Props = {
    addArticleToFavorites: (id: number, count: number) => void
    removeArticleFromFavorites: (id: number) => void
    articlesLikeState: { [id: number]: boolean }
    toggleLikeState: (id: number) => void
    articlesAddState: { [id: number]: boolean }
    toggleAddState: (id: number) => void
}

const Home = ({
    addArticleToFavorites,
    removeArticleFromFavorites,
    articlesLikeState,
    toggleLikeState,
    articlesAddState,
    toggleAddState,
}: Props) => {
    return (
        <>
            <SectionPost />
            <SectionSubscribe />
            <SiteContent
                addArticleToFavorites={addArticleToFavorites}
                removeArticleFromFavorites={removeArticleFromFavorites}
                articlesLikeState={articlesLikeState}
                toggleLikeState={toggleLikeState}
                articlesAddState={articlesAddState}
                toggleAddState={toggleAddState}
            />
        </>
    )
}

export default Home
