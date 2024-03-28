import { Container } from '@mui/material'
import './SubscribePage.scss'

type Props = {}

const SubscribePage = (props: Props) => {
    return (
        <div className="page-fon">
            <Container
                maxWidth="lg"
                sx={{
                    padding: '64px 0px',
                }}
            >
                <div className="subscribe-wrap">
                    <h1>_Super Company</h1>
                    <div className="subscribe-wrap-content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Laborum, repudiandae provident?
                        <form className="subscribe-wrap-form">
                            <label htmlFor="MAIL">Email Adress</label>
                            <input
                                type="email"
                                name="mail"
                                id="MAIL"
                                autoComplete="off"
                            />
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SubscribePage
