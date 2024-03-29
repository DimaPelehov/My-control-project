import { Container, Grid } from '@mui/material'
import './FooterSection.scss'
import Logo from 'components/Logo/Logo'
import FooterNavigationItem from './FooterNavigationItem'

type Props = {}

const FooterSection = (props: Props) => {
    return (
        <div className="footer-bg">
            <Container maxWidth="lg" sx={{ padding: '64px 0px' }}>
                <Grid container>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className="footer-social-copyright">
                            <div className="footer-social-links">
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
                                <a
                                    href="https://ru.pinterest.com/"
                                    className="topnavbar-soc-link"
                                >
                                    <span className="social-icon si-pinterest"></span>
                                    <span className="social-count">13K</span>
                                </a>
                            </div>
                            <div className="footer-copyright">
                                Designed by
                                <a href="https://codesupply.co/">
                                    Code Supply Co.
                                </a>
                                <br />
                                Developed by
                                <a href="my resume">Dmytro Radochyn</a>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Logo />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <nav className="footer-navigation">
                            <ul>
                                <FooterNavigationItem to="/">
                                    Home
                                </FooterNavigationItem>
                                <FooterNavigationItem to="/contact-form-page">
                                    Contact Form
                                </FooterNavigationItem>
                                <FooterNavigationItem to="/about_me_page">
                                    About Me
                                </FooterNavigationItem>
                            </ul>
                        </nav>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default FooterSection
