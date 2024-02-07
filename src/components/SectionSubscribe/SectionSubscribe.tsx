import { Container } from '@mui/material'
import './SectionSubscribe.scss'

type Props = {}

const SectionSubscribe = (props: Props) => {
    return (
        <div className="subscribe-section">
            <Container maxWidth="md">
                <div className="subscribe-body">
                    <div className="subscribe-title">
                        <h3>
                            Subscribe to <br />
                            <span>Daily Healthy Brunches</span>
                        </h3>
                    </div>
                    <div className="subscribe-content">
                        <form action="" className="subscribe-form">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                            />
                            <input
                                type="email"
                                name="mail"
                                placeholder="Enter your mail"
                            />
                            <button>Subscribe</button>
                        </form>
                        <div className="subscribe-privacy">
                            <input type="checkbox" id="privacy" />
                            <label htmlFor="privacy">
                                By checking this box, you confirm that you have
                                read and are agreeing to our terms of use
                                regarding the storage of the data submitted
                                through this form.
                            </label>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SectionSubscribe
