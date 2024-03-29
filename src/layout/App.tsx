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
import { omit } from 'lodash'
import AliquamSubcategoryPage from 'pages/AliquamSubcategoryPage/AliquamSubcategoryPage'
import SubscribePage from 'pages/SubscribePage/SubscribePage'
import ElliotAuthorPage from 'pages/ElliotAuthorPage/ElliotAuthorPage'

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

    // видалення статей з сторінки вподобаних

    // варіант 1 - самостійно пишемо всі дії
    // const removeArticleFromFavorites = (id: number) => {
    //     setArticlesInFavorites((prevState) => {
    //         let prevArticlesInFavorites = { ...articlesInFavorites }
    // створюємо копію об'єкта articlesInFavorites
    // delete prevArticlesInFavorites[id]
    // видяляемо з копії об'єкта необхідний елемент
    // return prevArticlesInFavorites
    // повертаємо цю копію об'єкта
    //     })
    // }

    // варіант 2
    const removeArticleFromFavorites = (id: number) => {
        setArticlesInFavorites((prevState) => omit(prevState, id))
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
                    path="/"
                    element={
                        <Home addArticleToFavorites={addArticleToFavorites} />
                    }
                />
                <Route
                    path="favorites"
                    element={
                        <FavoritesPage
                            articlesInFavorites={articlesInFavorites}
                            removeArticleFromFavorites={
                                removeArticleFromFavorites
                            }
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
                    path="aliquam_subcategory"
                    element={
                        <AliquamSubcategoryPage
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
                    element={
                        <JoannaAuthorPage
                            addArticleToFavorites={addArticleToFavorites}
                        />
                    }
                />
                <Route
                    path="elliot_page"
                    element={
                        <ElliotAuthorPage
                            addArticleToFavorites={addArticleToFavorites}
                        />
                    }
                />
                <Route path="contact-form-page" element={<ContactForm />} />
                <Route path="about_me_page" element={<AboutMePage />} />
                <Route path="subscribe_page" element={<SubscribePage />} />
            </Routes>
            {/* <Main addArticleToFavorites={addArticleToFavorites} /> */}
            <Footer />
            {/* затемнення екрану */}
            <div className={overlayVariant}></div>
        </StyledEngineProvider>
    )
}

export default App
