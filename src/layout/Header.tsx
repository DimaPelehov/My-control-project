import { StyledEngineProvider } from '@mui/material/styles'
import BottomNavBar from '../components/BottomNavBar/BottomNavBar'
import TopNavBar from '../components/TopNavBar/TopNavBar'
import HeaderSlideMenu from 'components/HeaderSlideMenu/HeaderSlideMenu'

type Props = { favoritesData: { totalCount: number } }

const Header = ({ favoritesData }: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <TopNavBar />
            <BottomNavBar favoritesData={favoritesData} />
        </StyledEngineProvider>
    )
}

export default Header
