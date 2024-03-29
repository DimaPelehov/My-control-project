import '../SiteContent/SiteContent.scss'

type Props = {}

const SiteContentSidebarSubscribe = (props: Props) => {
    return (
        <div className=" sidebar-item sidebar-subscribe">
            <div className="sidebar-item-header">
                <h5>SIGN UP TO UPDATE</h5>
                <div className="horizontal-line"></div>
            </div>
            <div className="sidebar-subscribe-title">
                <h3>
                    Subscribe to Our <br />
                    <span>Newsletter</span>
                </h3>
            </div>
            <div className="sidebar-subscribe-form">
                <form action="" className="subscribe-form">
                    <input
                        type="email"
                        name="mail"
                        placeholder="Enter your mail"
                    />
                    <button>Subscribe</button>
                </form>
            </div>
            <div className="subscribe-privacy">
                <input type="checkbox" id="sidebar-privacy" />
                <label htmlFor="sidebar-privacy">
                    By checking this box, you confirm that you have read and are
                    agreeing to our terms of use regarding the storage of the
                    data submitted through this form.
                </label>
            </div>
        </div>
    )
}

export default SiteContentSidebarSubscribe
