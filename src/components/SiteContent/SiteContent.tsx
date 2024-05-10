import { Container } from '@mui/material'
import './SiteContent.scss'
import SiteContentArticleColumn from 'components/SiteContentArticleColumn/SiteContentArticleColumn'
import SiteContentSidebar from 'components/SiteContentSidebar/SiteContentSidebar'
import SiteContentSidebarAuthor from 'components/SiteContentSidebarAuthor/SiteContentSidebarAuthor'
import SiteContentSidebarSubscribe from 'components/SiteContentSidebarSubscribe/SiteContentSidebarSubscribe'
import SiteContentSidebarLatest from 'components/SiteContentSidebarLatest/SiteContentSidebarLatest'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addArticleToFavorites: (id: number, count: number) => void
    removeArticleFromFavorites: (id: number) => void
}

const SiteContent = ({
    addArticleToFavorites,
    removeArticleFromFavorites,
}: Props) => {
    return (
        <div className="site-content-margin">
            <Container maxWidth="lg">
                <div className="site-content">
                    {/* articles column */}
                    <div className="site-content-area">
                        <div className="site-post-arhive">
                            <SiteContentArticleColumn
                                addArticleToFavorites={addArticleToFavorites}
                                removeArticleFromFavorites={
                                    removeArticleFromFavorites
                                }
                            />
                        </div>
                        <div className="site-post-navigation">
                            <button className="slide-btn load-more-btn">
                                LOAD MORE
                            </button>
                        </div>
                    </div>
                    {/* sidebar */}
                    <div className="sidebar-column">
                        <SiteContentSidebarAuthor />
                        <SiteContentSidebar />
                        <SiteContentSidebarLatest />
                        <SiteContentSidebarSubscribe />
                        <div className="sidebar-ads">
                            <a href="my resume">
                                <p>Тут я розташую посилання на своє резюме</p>
                            </a>
                        </div>
                    </div>
                </div>
                <Reviews />
            </Container>
        </div>
    )
}

export default SiteContent
