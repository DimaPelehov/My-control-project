import CategoryAeneanRow from 'components/CategoryAeneanRow/CategoryAeneanRow'
import '../BottomNavBar/BottomNavBar.scss'
import CategoryVulputateRow from 'components/CategoryVulputateRow/CategoryVulputateRow'
import CategoryEtiamRow from 'components/CategoryEtiamRow/CategoryEtiamRow'
import { NavLink } from 'react-router-dom'

type Props = {}

const Menu = (props: Props) => {
    return (
        <ul className="bottom-navbar-menu">
            {/* Demos */}
            <li className="bottom-navbar-menu_list">
                <button className="bottom-navbar-menu_btn">
                    <span>Demos</span>
                </button>
                {/* submenu 1 */}
                <ul className="bottom-navbar-submenu bt-submenu-one">
                    <li>
                        <NavLink to="lifestyle">
                            Lifestyle <span>test</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="wallspaper">
                            Wallspaper <span>interior</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="travel">
                            Travel <span>perfect</span>
                        </NavLink>
                    </li>
                </ul>
            </li>
            {/* Home */}
            <li className="bottom-navbar-menu_list">
                <button className="bottom-navbar-menu_btn">
                    <span>Home</span>
                </button>
                {/* submenu 1 */}
                <ul className="bottom-navbar-submenu bt-submenu-one">
                    <li>
                        <button className="bottom-navbar-submenu_btn">
                            Featured Posts
                        </button>
                        {/* submenu 2 */}
                        <ul className="bottom-navbar-submenu bt-submenu-two">
                            <li>
                                <NavLink to="1">One</NavLink>
                            </li>
                            <li>
                                <NavLink to="2">Two</NavLink>
                            </li>
                            <li>
                                <NavLink to="3">Three</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button className="bottom-navbar-submenu_btn">
                            Ads <span className="red-span">hot</span>
                        </button>
                        {/* submenu 2 */}
                        <ul className="bottom-navbar-submenu bt-submenu-two">
                            <li>
                                <NavLink to="4">It`s</NavLink>
                            </li>
                            <li>
                                <NavLink to="5">just</NavLink>
                            </li>
                            <li>
                                <NavLink to="6">text</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="latest">
                            Latest Products
                            <span className="blue-span">new</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="expert">Expert</NavLink>
                    </li>
                </ul>
            </li>
            {/* Authors */}
            <li className="bottom-navbar-menu_list">
                <button className="bottom-navbar-menu_btn">
                    <span>Authors</span>
                </button>
                <ul className="bottom-navbar-submenu bt-submenu-one">
                    <li>
                        <NavLink to="joanna_page">Joanna Wellick</NavLink>
                    </li>
                    <li>
                        <NavLink to="elliot_page">Elliot Anderson</NavLink>
                    </li>
                </ul>
            </li>
            {/* Features */}
            <li className="bottom-navbar-menu_list">
                <button className="bottom-navbar-menu_btn">
                    <span>Features</span>
                </button>
                <ul className="bottom-navbar-submenu bt-submenu-one">
                    <li>
                        <NavLink to="contact-form-page">Contact Form</NavLink>
                    </li>
                </ul>
            </li>
            {/* Categories */}
            <li className="bottom-navbar-menu_list">
                <button className="bottom-navbar-menu_btn">
                    <span>Categories</span>
                </button>
                {/* categories div */}
                <div className="categories">
                    <ul className="categories-names">
                        <li>
                            <NavLink to="aenean_category">
                                Aenean Eleifend
                            </NavLink>
                            <div className="categories-content cat-aenean">
                                <CategoryAeneanRow />
                            </div>
                        </li>
                        <li>
                            <NavLink to="vulputate_category">Vulputate</NavLink>
                            <div className=" categories-content cat-vulputate">
                                <CategoryVulputateRow />
                            </div>
                        </li>
                        <li>
                            <NavLink to="etiam_category">Etiam</NavLink>
                            <div className=" categories-content cat-etiam ">
                                <CategoryEtiamRow />
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
            {/* Articles */}
            <li className="bottom-navbar-menu_list">
                <button className="bottom-navbar-menu_btn">
                    <span>Articles</span>
                </button>
                {/* submenu 1 */}
                <ul className="bottom-navbar-submenu bt-submenu-one">
                    <li>
                        <NavLink to="account">My account</NavLink>
                    </li>
                    <li>
                        <NavLink to="checkout">Checkout</NavLink>
                    </li>
                    <li>
                        <NavLink to="favorites">Favorites</NavLink>
                    </li>
                </ul>
            </li>
            {/* Buy Now */}
            <li className="bottom-navbar-menu_list">
                <button className="bottom-navbar-menu_btn">
                    <NavLink to="buy-now">
                        <span>Buy Now</span>
                    </NavLink>
                </button>
            </li>
        </ul>
    )
}

export default Menu
