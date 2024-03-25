import { NavLink } from 'react-router-dom'
import './FooterSection.scss'

type Props = { to: string; children: any }

const FooterNavigationItem = ({ to, children }: Props) => {
    return (
        <li>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive
                        ? 'footer-navigation-item-active'
                        : 'footer-navigation-item'
                }
            >
                {children}
            </NavLink>
        </li>
    )
}

export default FooterNavigationItem
