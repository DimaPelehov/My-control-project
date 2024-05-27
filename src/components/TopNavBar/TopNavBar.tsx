import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Container from '@mui/material/Container'
import Logo from 'components/Logo/Logo'
import './TopNavBar.scss'
import { Grid } from '@mui/material'
import { Component } from 'react'
import { Link } from 'react-router-dom'

type TopNavBarType = {}

type State = {
    search_visibility: string
}

class TopNavBar extends Component<TopNavBarType, State> {
    state = { search_visibility: 'topnavbar-search-field-unvisible' }

    changeSearchVisible = () => {
        this.setState((prevState) => ({
            search_visibility:
                prevState.search_visibility === 'topnavbar-search-field-visible'
                    ? 'topnavbar-search-field-unvisible'
                    : 'topnavbar-search-field-visible',
        }))
    }

    render() {
        return (
            <AppBar className="top-navbar" position="static">
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item xs={12} sm={6} md={4}>
                            <div className="search-follow-btns">
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="search"
                                    sx={{ mr: 2 }}
                                    onClick={this.changeSearchVisible}
                                >
                                    <SearchIcon />
                                </IconButton>
                                <div className="topnavbar-subscribe-btn">
                                    <Link
                                        to="subscribe_page"
                                        className="topnavbar-subscribe-link"
                                    >
                                        <span className="email-icon"></span>
                                        SUBSCRIBE
                                    </Link>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Logo />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div className="topnavbar-social social-links">
                                <a
                                    href="https://uk-ua.facebook.com/"
                                    className="topnavbar-soc-link"
                                >
                                    <span className="social-icon si-facebook"></span>
                                    <span className="social-count">53</span>
                                </a>
                                <a
                                    href="https://twitter.com/?lang=ru"
                                    className="topnavbar-soc-link"
                                >
                                    <span className="social-icon si-twitter"></span>
                                    <span className="social-count">71K</span>
                                </a>
                                <a
                                    href="https://www.instagram.com/"
                                    className="topnavbar-soc-link"
                                >
                                    <span className="social-icon si-instagram"></span>
                                    <span className="social-count">51</span>
                                </a>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
                <div className={`${this.state.search_visibility}`}>
                    <div className="search-row">
                        <Container maxWidth="lg">
                            <div className="search-form-close_btn">
                                <form action="" className="search-form">
                                    <button></button>
                                    <input
                                        type="search"
                                        placeholder="Enter keyword"
                                        name="search"
                                        autoComplete="off"
                                    />
                                </form>
                                <span
                                    className="search-close-btn"
                                    onClick={this.changeSearchVisible}
                                ></span>
                            </div>
                        </Container>
                    </div>
                </div>
            </AppBar>
        )
    }
}

export default TopNavBar
