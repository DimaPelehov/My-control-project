import { Container } from '@mui/material'
import '../AeneanCategoryPage/AeneanCategoryPage.scss'
import SiteContentSidebar from 'components/SiteContentSidebar/SiteContentSidebar'
import VulputateCategoryArticles from 'components/VulputateCategoryArticles/VulputateCategoryArticles'

type Props = { addArticleToFavorites: (totalCount: number) => void }

const VulputateCategoryPage = ({ addArticleToFavorites }: Props) => {
    return (
        <>
            <div className="category-page-fon">
                <Container maxWidth="lg">
                    <p className="category-subtitle">Browsing Category</p>
                    <h1>Vulputate</h1>
                    <p className="article-count">10 posts</p>
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
            <Container maxWidth="lg">
                <div className="site-content">
                    <div className="site-content-area">
                        <div className="site-post-arhive">
                            <VulputateCategoryArticles
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

export default VulputateCategoryPage
