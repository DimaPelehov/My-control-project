import { Container } from '@mui/material'
import './SiteContent.scss'
import SiteContentArticleColumn from 'components/SiteContentArticleColumn/SiteContentArticleColumn'
import SiteContentSidebar from 'components/SiteContentSidebar/SiteContentSidebar'
import SiteContentSidebarAuthor from 'components/SiteContentSidebarAuthor/SiteContentSidebarAuthor'
import SiteContentSidebarSubscribe from 'components/SiteContentSidebarSubscribe/SiteContentSidebarSubscribe'
import SiteContentSidebarLatest from 'components/SiteContentSidebarLatest/SiteContentSidebarLatest'

type Props = {
    addArticleToFavorites: (id: number, count: number) => void
    removeArticleFromFavorites: (id: number) => void
    articlesLikeState: { [id: number]: boolean }
    toggleLikeState: (id: number) => void
}

const SiteContent = ({
    addArticleToFavorites,
    removeArticleFromFavorites,
    articlesLikeState,
    toggleLikeState,
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
                                articlesLikeState={articlesLikeState}
                                toggleLikeState={toggleLikeState}
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
            </Container>
        </div>
    )
}

export default SiteContent
