// import AppBar from '@mui/material/AppBar'
// ---
// import Toolbar from '@mui/material/Toolbar'
// import Button from '@mui/material/Button'
// ---
// import IconButton from '@mui/material/IconButton'
// import MenuIcon from '@mui/icons-material/Menu'
// import Container from '@mui/material/Container'
// import Menu from 'components/Menu/Menu'
// import './BottomNavBar.scss'
// import FavoritesHeader from 'components/FavoritesHeader/FavoritesHeader'

// type Props = {}

// const BottomNavBar = (props: Props) => {
//     return (
//         <>
//             <AppBar
//                 position="static"
//                 sx={{
//                     backgroundColor: 'white',
//                     color: 'black',
//                     boxShadow: 'none',
//                     borderBottom: '1px solid #e9ecef',
//                 }}
//             >
//                 <Container maxWidth="lg">
//                     <div className="bottom-navbar-row">
//                         <IconButton
//                             className="bottom-navbar-menu_btn"
//                             size="large"
//                             edge="start"
//                             color="inherit"
//                             aria-label="menu"
//                             sx={{ mr: 2 }}
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Menu />
//                         <FavoritesHeader />
//                     </div>
//                 </Container>
//             </AppBar>
//         </>
//     )
// }

// export default BottomNavBar
// ---------------------------------------------

import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Menu from 'components/Menu/Menu'
import FavoritesHeader from 'components/FavoritesHeader/FavoritesHeader'
import { Container } from '@mui/material'

type Props = { favoritesData: { totalCount: number } }

const BottomNavBar = ({ favoritesData }: Props) => {
    const drawerWidth = 240

    interface AppBarProps extends MuiAppBarProps {
        open?: boolean
    }

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })<AppBarProps>(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }))

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }))

    const theme = useTheme()
    const [open, setOpen] = React.useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
        <Box sx={{ display: 'flex' }}>
            {/* <CssBaseline /> */}
            <AppBar
                position="static"
                open={open}
                sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    boxShadow: 'none',
                    borderBottom: '1px solid #e9ecef',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar className="bottom-navbar-row ">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu />
                        <FavoritesHeader favoritesData={favoritesData} />
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                {/* шапка виїжджаючого меню */}
                <DrawerHeader>
                    <div>Brunch</div>
                    {/* кнопка закривання */}
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                    {/* ----- */}
                </DrawerHeader>
                {/* ----- */}
                <Divider />
                <div>Icons</div>
                <Divider />
                <div>subscribe</div>
            </Drawer>
        </Box>
    )
}

export default BottomNavBar
