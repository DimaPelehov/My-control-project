import { Container } from '@mui/material'
import './SectionSubscribe.scss'
import { useState } from 'react'
import axios from 'axios'

type Props = {}

type SecSubscrFormType = { name: string; email: string }

const SectionSubscribe = (props: Props) => {
    const [formSend, setFormSend] = useState<boolean>(false)
    const [sendData, setSendData] = useState<SecSubscrFormType>({
        name: '',
        email: '',
    })
    const [isLoad, setIsLoad] = useState<boolean>(false)
    const [isChecked, setIsChecked] = useState<boolean>(false)

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

    const onSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                { name: sendData.name, email: sendData.email }
            )
            setSendData({
                name: data.name,
                email: data.email,
            })
            setFormSend(true)
        } catch (e) {
            alert(e)
        }
        setSendData({
            name: '',
            email: '',
        })
        setIsLoad(false)
        setIsChecked(false)
    }

    const renderMessage = () => {
        return <div className="subscribe-message">Ваші дані надіслано!</div>
    }

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
                        <form onSubmit={onSubscribe} className="subscribe-form">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={sendData.name}
                                onChange={handleName}
                                required={true}
                            />
                            <input
                                type="email"
                                name="mail"
                                placeholder="Enter your mail"
                                value={sendData.email}
                                onChange={handleEmail}
                                required={true}
                            />
                            <button
                                className={`subscribe-btn ${
                                    isChecked ? '' : 'disabled'
                                }`}
                                onClick={() => {
                                    setIsLoad(true)
                                }}
                                disabled={isChecked ? false : true}
                            >
                                Subscribe
                            </button>

                            <div className="error-message">
                                Не всі поля заповнені
                            </div>

                            <span
                                className={`download ${isLoad ? 'active' : ''}`}
                            ></span>
                        </form>

                        {formSend ? renderMessage() : null}

                        <div className="subscribe-privacy">
                            <input
                                type="checkbox"
                                id="privacy"
                                checked={isChecked}
                                onChange={() => {
                                    setIsChecked(!isChecked)
                                }}
                            />
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
