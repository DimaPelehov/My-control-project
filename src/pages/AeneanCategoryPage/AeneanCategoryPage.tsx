import { Container } from '@mui/material'
import './AeneanCategoryPage.scss'
import AeneanCategoryArticles from 'components/AeneanCategoryArticles/AeneanCategoryArticles'
import SiteContentSidebar from 'components/SiteContentSidebar/SiteContentSidebar'
import { Link } from 'react-router-dom'
import SiteContentSidebarAuthor from 'components/SiteContentSidebarAuthor/SiteContentSidebarAuthor'
import SiteContentSidebarLatest from 'components/SiteContentSidebarLatest/SiteContentSidebarLatest'
import SiteContentSidebarSubscribe from 'components/SiteContentSidebarSubscribe/SiteContentSidebarSubscribe'

type Props = {
    addArticleToFavorites: (id: number, count: number) => void
    // toggleLikeState: (id: number) => void
    // articlesLikeState: { [id: number]: boolean }
    articlesAddState: { [id: number]: boolean }
    toggleAddState: (id: number) => void
}

const AeneanCategoryPage = ({
    addArticleToFavorites,
    // toggleLikeState,
    // articlesLikeState,
    articlesAddState,
    toggleAddState,
}: Props) => {
    return (
        <>
            <div className="category-page-fon">
                <Container maxWidth="lg">
                    <p className="category-subtitle">Browsing Category</p>
                    <h1>Aenean Eleifend</h1>
                    <p className="article-count">9 posts</p>
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
                    <div className="subcategories">
                        <p className="category-subtitle">Subcategories</p>
                        <div className="subcategories-items">
                            <Link to="aliquam_subcategory"> Aliquam </Link>
                            <a href="Metus"> Metus Vidi </a>
                            <a href="Rhoncus"> Rhoncus </a>
                        </div>
                    </div>
                </Container>
            </div>
            <Container maxWidth="lg" sx={{ margin: '64px auto' }}>
                <div className="site-content">
                    <div className="site-content-area">
                        <div className="site-post-arhive">
                            <AeneanCategoryArticles
                                addArticleToFavorites={addArticleToFavorites}
                                // articlesLikeState={articlesLikeState}
                                // toggleLikeState={toggleLikeState}
                                articlesAddState={articlesAddState}
                                toggleAddState={toggleAddState}
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
export default AeneanCategoryPage
