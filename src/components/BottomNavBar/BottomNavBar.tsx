import AppBar from '@mui/material/AppBar'
// ---
// import Toolbar from '@mui/material/Toolbar'
// import Button from '@mui/material/Button'
// ---
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Menu from 'components/Menu/Menu'
import './BottomNavBar.scss'
import FavoritesHeader from 'components/FavoritesHeader/FavoritesHeader'
import { Link } from 'react-router-dom'

type Props = {
    favoritesData: { totalCount: number }
    changeOverlay: () => void
    openCloseSidebar: () => void
}

const BottomNavBar = ({
    favoritesData,
    changeOverlay,
    openCloseSidebar,
}: Props) => {
    return (
        <>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    boxShadow: 'none',
                    borderBottom: '1px solid #e9ecef',
                }}
            >
                <Container maxWidth="lg">
                    <div className="bottom-navbar-row">
                        <IconButton
                            className="bottom-navbar-menu_btn"
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => {
                                changeOverlay()
                                openCloseSidebar()
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu />
                        <Link to="favorites">
                            <FavoritesHeader favoritesData={favoritesData} />
                        </Link>
                    </div>
                </Container>
            </AppBar>
        </>
    )
}

export default BottomNavBar
