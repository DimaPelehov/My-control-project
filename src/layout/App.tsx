import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

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

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header favoritesData={favoritesData} />
            <Main addArticleToFavorites={addArticleToFavorites} />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
