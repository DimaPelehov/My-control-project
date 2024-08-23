import { StyledEngineProvider } from '@mui/material/styles'
import BottomNavBar from '../components/BottomNavBar/BottomNavBar'
import TopNavBar from '../components/TopNavBar/TopNavBar'
import '../components/BottomNavBar/BottomNavBar.scss'
import HeaderSidebar from 'components/HeaderSidebar/HeaderSidebar'

type Props = {
    // articlesInFavorites: { [id: number]: number }
    changeOverlay: () => void
    sidebarOpen: boolean
    openCloseSidebar: () => void
}

const Header = ({
    // articlesInFavorites,
    changeOverlay,
    sidebarOpen,
    openCloseSidebar,
}: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <HeaderSidebar
                sidebarOpen={sidebarOpen}
                openCloseSidebar={openCloseSidebar}
                changeOverlay={changeOverlay}
            />
            <TopNavBar />
            <BottomNavBar
                // articlesInFavorites={articlesInFavorites}
                changeOverlay={changeOverlay}
                openCloseSidebar={openCloseSidebar}
            />
        </StyledEngineProvider>
    )
}

export default Header
