import SectionPost from 'components/SectionPost/SectionPost'
import SectionSubscribe from 'components/SectionSubscribe/SectionSubscribe'
import SiteContent from 'components/SiteContent/SiteContent'

type Props = {
    addArticleToFavorites: (id: number, count: number) => void
}

const Home = ({ addArticleToFavorites }: Props) => {
    return (
        <>
            <SectionPost />
            <SectionSubscribe />
            <SiteContent addArticleToFavorites={addArticleToFavorites} />
        </>
    )
}

export default Home
