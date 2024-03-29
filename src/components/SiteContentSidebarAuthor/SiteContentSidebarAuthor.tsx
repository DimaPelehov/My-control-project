import { Link } from 'react-router-dom'
import '../SiteContent/SiteContent.scss'

type Props = {}

const SiteContentSidebarAuthor = (props: Props) => {
    return (
        <div className=" sidebar-item sidebar-author">
            <div className="sidebar-item-header">
                <h5>AUTHOR</h5>
                <div className="horizontal-line"></div>
            </div>
            <div className="sidebar-author-body">
                <div className="sidebar-author-info">
                    <Link to="joanna_page">
                        <img
                            src="images/author-joanna.jpeg"
                            alt="joanna-author"
                        />
                    </Link>

                    <h5>
                        <Link to="joanna_page">
                            Hello, I`m
                            <span>Joanna Wellick</span>
                        </Link>
                    </h5>
                </div>
                <p>
                    Sed cras nec a nulla sapien adipiscing ut etiam. In sem
                    viverra mollis metus quam adipiscing…
                </p>
            </div>
        </div>
    )
}

export default SiteContentSidebarAuthor
