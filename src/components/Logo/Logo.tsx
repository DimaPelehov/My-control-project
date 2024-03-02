import Typography from '@mui/material/Typography'
import logo from 'assets/Brunch-logo.png'
import '../TopNavBar/TopNavBar.scss'
import { Link } from 'react-router-dom'

type Props = {}

const Logo = (props: Props) => {
    return (
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}
        >
            <Link to="home" className="logo-link">
                <img src={logo} alt="Logo" />
            </Link>
        </Typography>
    )
}

export default Logo
