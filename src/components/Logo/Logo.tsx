import Typography from '@mui/material/Typography'
import logo from 'assets/Brunch-logo.png'
import '../TopNavBar/TopNavBar.scss'

type Props = {}

const Logo = (props: Props) => {
    return (
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}
        >
            <a href="Home" className="logo-link">
                <img src={logo} alt="Logo" />{' '}
            </a>
        </Typography>
    )
}

export default Logo
