import { Container } from '@mui/material'
import './SiteContent.scss'
import SiteContentArticleColumn from 'components/SiteContentArticleColumn/SiteContentArticleColumn'
import SiteContentSidebar from 'components/SiteContentSidebar/SiteContentSidebar'
// import SiteContentSidebarLatest from 'components/SiteContentSidebarLatest/SiteContentSidebarLatest'

type Props = { addArticleToFavorites: (id: number, count: number) => void }

const SiteContent = ({ addArticleToFavorites }: Props) => {
    return (
        <div className="site-content-margin">
            <Container maxWidth="lg">
                <div className="site-content">
                    {/* articles column */}
                    <div className="site-content-area">
                        <div className="site-post-arhive">
                            <SiteContentArticleColumn
                                addArticleToFavorites={addArticleToFavorites}
                            />
                        </div>
                        <div className="site-post-navigation">
                            <button className="slide-btn load-more-btn">
                                LOAD MORE
                            </button>
                        </div>
                    </div>
                    {/* sidebar */}
                    <SiteContentSidebar />
                </div>
            </Container>
        </div>
    )
}

export default SiteContent
