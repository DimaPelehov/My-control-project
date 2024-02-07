import SectionPost from 'components/SectionPost/SectionPost'
import SectionSubscribe from 'components/SectionSubscribe/SectionSubscribe'
import SiteContent from 'components/SiteContent/SiteContent'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <SectionPost />
            <SectionSubscribe />
            <SiteContent />
        </>
    )
}

export default Home
