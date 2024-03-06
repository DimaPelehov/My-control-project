import { Container } from '@mui/material'
import './AeneanCategoryPage.scss'
import AeneanCategoryArticles from 'components/AeneanCategoryArticles/AeneanCategoryArticles'
import SiteContentSidebar from 'components/SiteContentSidebar/SiteContentSidebar'

type Props = { addArticleToFavorites: (totalCount: number) => void }

const AeneanCategoryPage = ({ addArticleToFavorites }: Props) => {
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
                            <a href="Aliquam"> Aliquam </a>
                            <a href="Metus"> Metus Vidi </a>
                            <a href="Rhoncus"> Rhoncus </a>
                        </div>
                    </div>
                </Container>
            </div>
            <Container maxWidth="lg">
                <div className="site-content">
                    <div className="site-content-area">
                        <div className="site-post-arhive">
                            <AeneanCategoryArticles
                                addArticleToFavorites={addArticleToFavorites}
                            />
                        </div>
                    </div>
                    <SiteContentSidebar />
                </div>
            </Container>
        </>
    )
}
export default AeneanCategoryPage
