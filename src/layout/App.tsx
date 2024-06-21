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
import ArticlePage from 'pages/ArticlePage/ArticlePage'
import MaecenasCategoryPage from 'pages/MaecenasCategoryPage/MaecenasCategoryPage'

type Props = {}

type ArticlesInFavoritesType = { [id: number]: number }

type ArticlesLikeStateType = { [id: number]: boolean }

type ArticlesAddStateType = { [id: number]: boolean }

const App = (props: Props) => {
    // додавання до Favorite
    const [articlesInFavorites, setArticlesInFavorites] =
        useState<ArticlesInFavoritesType>({})

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
        // і прибираємо зміну кольору кнопки "add to favorite"
        setArticlesAddState((prevState) => ({
            ...prevState,
            [id]: false,
        }))
    }

    // виїзд header-sidebar
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

    const openCloseSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    // like
    const [articlesLikeState, setArticlesLikeState] =
        useState<ArticlesLikeStateType>({})

    const toggleLikeState = (id: number) => {
        setArticlesLikeState((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }

    // зміна кольору кнопки "add to favorite" при додаванні статті до улюблених
    const [articlesAddState, setArticlesAddState] =
        useState<ArticlesAddStateType>({})

    const toggleAddState = (id: number) => {
        setArticlesAddState((prevState) => ({
            ...prevState,
            [id]: true,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header
                articlesInFavorites={articlesInFavorites}
                changeOverlay={changeOverlay}
                sidebarOpen={sidebarOpen}
                openCloseSidebar={openCloseSidebar}
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            addArticleToFavorites={addArticleToFavorites}
                            removeArticleFromFavorites={
                                removeArticleFromFavorites
                            }
                            articlesLikeState={articlesLikeState}
                            toggleLikeState={toggleLikeState}
                            articlesAddState={articlesAddState}
                            toggleAddState={toggleAddState}
                        />
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
                            articlesLikeState={articlesLikeState}
                            toggleLikeState={toggleLikeState}
                        />
                    }
                />
                <Route
                    path="aenean_category"
                    element={
                        <AeneanCategoryPage
                            addArticleToFavorites={addArticleToFavorites}
                            articlesLikeState={articlesLikeState}
                            toggleLikeState={toggleLikeState}
                            articlesAddState={articlesAddState}
                            toggleAddState={toggleAddState}
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
                            articlesLikeState={articlesLikeState}
                            toggleLikeState={toggleLikeState}
                            articlesAddState={articlesAddState}
                            toggleAddState={toggleAddState}
                        />
                    }
                />
                <Route
                    path="etiam_category"
                    element={
                        <EtiamCategoryPage
                            addArticleToFavorites={addArticleToFavorites}
                            articlesLikeState={articlesLikeState}
                            toggleLikeState={toggleLikeState}
                            articlesAddState={articlesAddState}
                            toggleAddState={toggleAddState}
                        />
                    }
                />
                <Route
                    path="maecenas_category"
                    element={<MaecenasCategoryPage />}
                />
                <Route
                    path="joanna_page"
                    element={
                        <JoannaAuthorPage
                            addArticleToFavorites={addArticleToFavorites}
                            articlesLikeState={articlesLikeState}
                            toggleLikeState={toggleLikeState}
                            articlesAddState={articlesAddState}
                            toggleAddState={toggleAddState}
                        />
                    }
                />
                <Route
                    path="elliot_page"
                    element={
                        <ElliotAuthorPage
                            addArticleToFavorites={addArticleToFavorites}
                            articlesLikeState={articlesLikeState}
                            toggleLikeState={toggleLikeState}
                            articlesAddState={articlesAddState}
                            toggleAddState={toggleAddState}
                        />
                    }
                />
                <Route path="contact-form-page" element={<ContactForm />} />
                <Route path="about_me_page" element={<AboutMePage />} />
                <Route path="subscribe_page" element={<SubscribePage />} />
                <Route
                    path="/articles/:id"
                    element={
                        <ArticlePage
                            addArticleToFavorites={addArticleToFavorites}
                            articlesLikeState={articlesLikeState}
                            toggleLikeState={toggleLikeState}
                            articlesAddState={articlesAddState}
                            toggleAddState={toggleAddState}
                        />
                    }
                />
            </Routes>
            {/* <Main addArticleToFavorites={addArticleToFavorites} /> */}
            <Footer />
            {/* затемнення екрану */}
            <div className={overlayVariant}></div>
        </StyledEngineProvider>
    )
}

export default App
