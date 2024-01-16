import { StyledEngineProvider } from '@mui/material/styles'
import BottomNavBar from '../components/BottomNavBar/BottomNavBar'
import TopNavBar from '../components/TopNavBar/TopNavBar'

type Props = {}

const Header = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <TopNavBar />
            <BottomNavBar />
        </StyledEngineProvider>
    )
}

export default Header
