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
import OurContacts from 'pages/OurContacts/OurContacts'
import AboutMePage from 'pages/AboutMePage/AboutMePage'

type Props = {}

type FavoritesDataType = {
    totalCount: number
}

const App = (props: Props) => {
    // збільшення числа лайків
    const [favoritesData, setFavoritesData] = useState<FavoritesDataType>({
        totalCount: 0,
    })

    const addArticleToFavorites = (count: number) => {
        setFavoritesData((prevState) => ({
            // totalCount: prevState.totalCount + count,
            totalCount:
                prevState.totalCount === 0
                    ? prevState.totalCount + count
                    : prevState.totalCount - count,
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
                favoritesData={favoritesData}
                changeOverlay={changeOverlay}
            />
            <Routes>
                <Route
                    path="home"
                    element={
                        <Home addArticleToFavorites={addArticleToFavorites} />
                    }
                />
                <Route path="favorites" element={<FavoritesPage />} />
                <Route
                    path="aenean_category"
                    element={<AeneanCategoryPage />}
                />
                <Route
                    path="vulputate_category"
                    element={<VulputateCategoryPage />}
                />
                <Route path="etiam_category" element={<EtiamCategoryPage />} />
                <Route
                    path="joanna_page"
                    element={<JoannaAuthorPage />}
                ></Route>
                <Route
                    path="our_contacts_page"
                    element={<OurContacts />}
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
