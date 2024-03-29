import { Container } from '@mui/material'
import './ContactForm.scss'
import SiteContentSidebar from 'components/SiteContentSidebar/SiteContentSidebar'
import SiteContentSidebarAuthor from 'components/SiteContentSidebarAuthor/SiteContentSidebarAuthor'
import SiteContentSidebarLatest from 'components/SiteContentSidebarLatest/SiteContentSidebarLatest'
import SiteContentSidebarSubscribe from 'components/SiteContentSidebarSubscribe/SiteContentSidebarSubscribe'

type Props = {}

const ContactForm = (props: Props) => {
    return (
        <div className="our-contacts-page">
            <Container maxWidth="lg">
                <div className="our-contacts-body">
                    <div className="our-contacts-content">
                        <section className="our-contacts-cont_header">
                            <h1>Contact Form</h1>
                        </section>
                        <div className="our-contacts-cont_body">
                            <div className="our-contacts-row">
                                <div className="our-contacts-row-title">
                                    <h3>Contact Form 7 Integration</h3>
                                </div>
                                <div className="our-contacts-row-body">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Nobis, neque hic
                                        perspiciatis
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Inventore quidem
                                        reprehenderit harum incidunt cum
                                        quisquam iusto. Temporibus optio volu
                                    </p>
                                </div>
                            </div>

                            <hr />
                            <div className="our-contacts-row">
                                <div className="our-contacts-row-title">
                                    <h3>Get in Touch</h3>
                                </div>
                                <form action="" className="our-contacts-form">
                                    <div className="form-field">
                                        <label htmlFor="name-inp">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name-inp"
                                            name="name"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="mail-inp">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="mail-inp"
                                            name="mail"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="message">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={10}
                                        />
                                    </div>
                                    <button>Send</button>
                                    <span className="download"></span>
                                    <p className="info-sended">
                                        Thank you for your message. It has been
                                        sent.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-column">
                        <SiteContentSidebarAuthor />
                        <SiteContentSidebar />
                        <SiteContentSidebarLatest />
                        <SiteContentSidebarSubscribe />
                        <div className="sidebar-ads">
                            <a href="my resume">
                                <p>Тут я розташую посилання на своє резюме</p>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ContactForm
