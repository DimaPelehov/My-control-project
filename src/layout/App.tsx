import Header from './Header'
// import Main from './Main'
import Footer from './Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage'
import AeneanCategoryPage from 'pages/AeneanCategoryPage/AeneanCategoryPage'
import VulputateCategoryPage from 'pages/VulputateCategoryPage/VulputateCategoryPage'
import EtiamCategoryPage from 'pages/EtiamCategoryPage/EtiamCategoryPage'
import JoannaAuthorPage from 'pages/JoannaAuthorPage/JoannaAuthorPage'
import '../components/BottomNavBar/BottomNavBar.scss'
import AboutMePage from 'pages/AboutMePage/AboutMePage'
import ContactForm from 'pages/ContactForm/ContactForm'

type Props = {}

// type FavoritesDataType = {
//     totalCount: number
// }

type ArticlesInFavoritesType = { [id: number]: number }

const App = (props: Props) => {
    // збільшення числа лайків

    // const [favoritesData, setFavoritesData] = useState<FavoritesDataType>({
    //     totalCount: 0,
    // })

    const [articlesInFavorites, setArticlesInFavorites] =
        useState<ArticlesInFavoritesType>({})

    // const addArticleToFavorites = (count: number) => {
    //     setFavoritesData((prevState) => ({
    //         // totalCount: prevState.totalCount + count,
    //         totalCount:
    //             prevState.totalCount === 0
    //                 ? prevState.totalCount + count
    //                 : prevState.totalCount - count,
    //     }))
    // }

    const addArticleToFavorites = (id: number, count: number) => {
        setArticlesInFavorites((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    // затемнення екрану
    const [overlayVariant, setOverlayVariant] = useState<string>('overlay-none')

    const changeOverlay = () => {
        setOverlayVariant((prevState) =>
            prevState === 'overlay-none' ? 'overlay' : 'overlay-none'
        )
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header
                articlesInFavorites={articlesInFavorites}
                changeOverlay={changeOverlay}
            />
            <Routes>
                <Route
                    path="home"
                    element={
                        <Home addArticleToFavorites={addArticleToFavorites} />
                    }
                />
                <Route
                    path="favorites"
                    element={
                        <FavoritesPage
                            articlesInFavorites={articlesInFavorites}
                        />
                    }
                />
                <Route
                    path="aenean_category"
                    element={
                        <AeneanCategoryPage
                            addArticleToFavorites={addArticleToFavorites}
                        />
                    }
                />
                <Route
                    path="vulputate_category"
                    element={
                        <VulputateCategoryPage
                            addArticleToFavorites={addArticleToFavorites}
                        />
                    }
                />
                <Route
                    path="etiam_category"
                    element={
                        <EtiamCategoryPage
                            addArticleToFavorites={addArticleToFavorites}
                        />
                    }
                />
                <Route
                    path="joanna_page"
                    element={<JoannaAuthorPage />}
                ></Route>
                <Route
                    path="contact-form-page"
                    element={<ContactForm />}
                ></Route>
                <Route path="about_me_page" element={<AboutMePage />}></Route>
            </Routes>
            {/* <Main addArticleToFavorites={addArticleToFavorites} /> */}
            <Footer />
            {/* затемнення екрану */}
            <div className={overlayVariant}></div>
        </StyledEngineProvider>
    )
}

export default App
