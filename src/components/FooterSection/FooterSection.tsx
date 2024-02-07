import { Container, Grid } from '@mui/material'
import './FooterSection.scss'
import Logo from 'components/Logo/Logo'

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
                                    53
                                </a>
                                <a
                                    href="https://twitter.com/?lang=ru"
                                    className="topnavbar-soc-link"
                                >
                                    <span className="social-icon si-twitter"></span>
                                    71K
                                </a>
                                <a
                                    href="https://www.instagram.com/"
                                    className="topnavbar-soc-link"
                                >
                                    <span className="social-icon si-instagram"></span>
                                    51
                                </a>
                                <a
                                    href="https://ru.pinterest.com/"
                                    className="topnavbar-soc-link"
                                >
                                    <span className="social-icon si-pinterest"></span>
                                    13K
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
                                <li>
                                    <a href="home">Home</a>
                                </li>
                                <li>
                                    <a href="contact">Contact Form</a>
                                </li>
                                <li>
                                    <a href="sample">Sample Page</a>
                                </li>
                            </ul>
                        </nav>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default FooterSection
