import { Container } from '@mui/material'
import '../AeneanCategoryPage/AeneanCategoryPage.scss'
import SiteContentSidebar from 'components/SiteContentSidebar/SiteContentSidebar'
import EtiamCategoryArticles from 'components/EtiamCategoryArticles/EtiamCategoryArticles'
import SiteContentSidebarAuthor from 'components/SiteContentSidebarAuthor/SiteContentSidebarAuthor'
import SiteContentSidebarLatest from 'components/SiteContentSidebarLatest/SiteContentSidebarLatest'
import SiteContentSidebarSubscribe from 'components/SiteContentSidebarSubscribe/SiteContentSidebarSubscribe'

type Props = { addArticleToFavorites: (id: number, count: number) => void }

const EtiamCategoryPage = ({ addArticleToFavorites }: Props) => {
    return (
        <>
            <div className="category-page-fon">
                <Container maxWidth="lg">
                    <p className="category-subtitle">Browsing Category</p>
                    <h1>Etiam</h1>
                    <p className="article-count">11 posts</p>
                    <div className="category-description">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Architecto dolor quidem ipsa dolore ut in
                            repellendus non, totam consequuntur nam magni facere
                            hic commodi vero vitae recusandae alias quos quia.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facere quos possimus quae, magnam, ipsam error
                            fugit nisi debitis culpa molestiae eum
                        </p>
                    </div>
                </Container>
            </div>
            <Container maxWidth="lg" sx={{ margin: '64px auto' }}>
                <div className="site-content">
                    <div className="site-content-area">
                        <div className="site-post-arhive">
                            <EtiamCategoryArticles
                                addArticleToFavorites={addArticleToFavorites}
                            />
                        </div>
                    </div>
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
        </>
    )
}

export default EtiamCategoryPage
