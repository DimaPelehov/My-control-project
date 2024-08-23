import { Container } from '@mui/material'
import './SubscribePage.scss'
import { useState } from 'react'
import axios from 'axios'

type Props = {}

type SubscribeType = { email: string }

const SubscribePage = (props: Props) => {
    const [emailSend, setEmailSend] = useState<boolean>(false)

    const [subscribeData, setSubscribeData] = useState<SubscribeType>({
        email: '',
    })

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubscribeData((prevState) => ({
            ...prevState,
            email: e.target.value,
        }))
    }

    // ========= 1 варіант роботи з сервером =============
    // const onSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()

    //     axios
    //         .post(
    //             'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
    //             { email: subscribeData.email }
    //         )
    //         .then((response) => response.data)
    //         .then(({ email }) => {
    //             setSubscribeData({
    //                 email,
    //             })
    //             setEmailSend(true)
    //         })
    // }

    // ========== 2 варіант роботи з сервером =============
    const onSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    email: subscribeData.email,
                }
            )
            setSubscribeData({
                email: data.email,
            })
            setEmailSend(true)
        } catch (e) {
            alert(e)
        }
    }

    const renderForm = () => {
        return (
            <>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum, repudiandae provident?
                <form className="subscribe-wrap-form" onSubmit={onSubscribe}>
                    <label htmlFor="MAIL">Email Adress</label>
                    <input
                        type="email"
                        name="mail"
                        id="MAIL"
                        autoComplete="off"
                        value={subscribeData.email}
                        onChange={handleEmail}
                        required={true}
                    />
                    <button type="submit">Subscribe</button>
                </form>
            </>
        )
    }

    const renderMessage = () => {
        return (
            <>
                <p>Вашу поштову скриньку {subscribeData.email} надіслано!</p>
            </>
        )
    }

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
                        {emailSend ? renderMessage() : renderForm()}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SubscribePage
