import '../BottomNavBar/BottomNavBar.scss'

type Props = {}

const Menu = (props: Props) => {
    return (
        <ul className="bottom-navbar-menu">
            <li className="bottom-navbar-menu_list">
                <a href="demos" className="bottom-navbar-menu_link">
                    <span>Demos</span>
                </a>
                {/* submenu 1 */}
                <ul className="bottom-navbar-submenu bt-submenu-one">
                    <li>
                        <a href="lifestyle">
                            Lifestyle <span>test</span>
                        </a>
                    </li>
                    <li>
                        <a href="wallspaper">
                            Wallspaper <span>interior</span>
                        </a>
                    </li>
                    <li>
                        <a href="travel">
                            Travel <span>perfect</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li className="bottom-navbar-menu_list">
                <a href="home" className="bottom-navbar-menu_link">
                    <span>Home</span>
                </a>
                {/* submenu 1 */}
                <ul className="bottom-navbar-submenu bt-submenu-one">
                    <li>
                        <a
                            href="featured"
                            className="bottom-navbar-submenu_link"
                        >
                            Featured Posts
                        </a>
                        {/* submenu 2 */}
                        <ul className="bottom-navbar-submenu bt-submenu-two">
                            <li>
                                <a href="1">One</a>
                            </li>
                            <li>
                                <a href="2">Two</a>
                            </li>
                            <li>
                                <a href="3">Three</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="ads" className="bottom-navbar-submenu_link">
                            Ads <span className="red-span">hot</span>
                        </a>
                        {/* submenu 2 */}
                        <ul className="bottom-navbar-submenu bt-submenu-two">
                            <li>
                                <a href="4">It`s</a>
                            </li>
                            <li>
                                <a href="5">just</a>
                            </li>
                            <li>
                                <a href="6">text</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="latest">
                            Latest Products
                            <span className="blue-span">new</span>
                        </a>
                    </li>
                    <li>
                        <a href="expert">Expert</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="post" className="bottom-navbar-menu_link">
                    <span>Post</span>
                </a>
            </li>
            <li>
                <a href="features" className="bottom-navbar-menu_link">
                    <span>Features</span>
                </a>
            </li>
            <li>
                <a href="categories" className="bottom-navbar-menu_link">
                    <span>Categories</span>
                </a>
            </li>
            <li className="bottom-navbar-menu_list">
                <a href="shop" className="bottom-navbar-menu_link">
                    <span>Shop</span>
                </a>
                {/* submenu 1 */}
                <ul className="bottom-navbar-submenu bt-submenu-one">
                    <li>
                        <a href="account">My account</a>
                    </li>
                    <li>
                        <a href="checkout">Checkout</a>
                    </li>
                    <li>
                        <a href="cart">Cart</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="buynow">
                    <span>Buy Now</span>
                </a>
            </li>
        </ul>
    )
}

export default Menu