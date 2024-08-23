import { Container } from '@mui/material'
import './ContactForm.scss'
import SiteContentSidebar from 'components/SiteContentSidebar/SiteContentSidebar'
import SiteContentSidebarAuthor from 'components/SiteContentSidebarAuthor/SiteContentSidebarAuthor'
import SiteContentSidebarLatest from 'components/SiteContentSidebarLatest/SiteContentSidebarLatest'
import SiteContentSidebarSubscribe from 'components/SiteContentSidebarSubscribe/SiteContentSidebarSubscribe'
import { useState } from 'react'
import axios from 'axios'

type Props = {}

type ContactFormTypes = { name: string; email: string; message: string }

const ContactForm = (props: Props) => {
    const [formSend, setFormSend] = useState<boolean>(false)
    const [sendData, setSendData] = useState<ContactFormTypes>({
        name: '',
        email: '',
        message: '',
    })

    const [isLoad, setIsLoad] = useState<boolean>(false)

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSendData((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSendData((prevState) => ({
            ...prevState,
            email: e.target.value,
        }))
    }

    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSendData((prevState) => ({
            ...prevState,
            message: e.target.value,
        }))
    }

    const onSend = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const { data } = await axios.post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: sendData.name,
                    email: sendData.email,
                    message: sendData.message,
                }
            )
            setSendData({
                name: data.name,
                email: data.email,
                message: data.message,
            })
            setFormSend(true)
        } catch (e) {
            alert(e)
        }

        // очищення полів після відправки форми
        setSendData({
            name: '',
            email: '',
            message: '',
        })
        // зупиняємо прелоадер
        setIsLoad(false)
    }

    const loading = () => {
        // запускаємо прелоадер
        setIsLoad(true)
    }

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

                                <form
                                    onSubmit={onSend}
                                    className="our-contacts-form"
                                >
                                    <div className="form-field">
                                        <label htmlFor="name-inp">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name-inp"
                                            name="name"
                                            autoComplete="off"
                                            value={sendData.name}
                                            onChange={handleName}
                                            required={true}
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
                                            value={sendData.email}
                                            onChange={handleEmail}
                                            required={true}
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
                                            value={sendData.message}
                                            onChange={handleMessage}
                                            required={true}
                                        />
                                    </div>
                                    <button onClick={loading}>Send</button>
                                    <span
                                        className={`download ${
                                            isLoad ? 'active' : ''
                                        }`}
                                    ></span>

                                    {formSend ? (
                                        <p className="info-sended">
                                            Thank you for your message. It has
                                            been sent.
                                        </p>
                                    ) : null}
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
