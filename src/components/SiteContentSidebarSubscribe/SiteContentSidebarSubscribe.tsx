import React, { useState } from 'react'
import '../SiteContent/SiteContent.scss'
import axios from 'axios'

type Props = {}

type SiteContentSubscribeFormType = { email: string }

const SiteContentSidebarSubscribe = (props: Props) => {
    const [isFormSend, setIsFormSend] = useState<boolean>(false)
    const [sendData, setSendData] = useState<SiteContentSubscribeFormType>({
        email: '',
    })
    const [isChecked, setIsChecked] = useState<boolean>(false)

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSendData((prevState) => ({ ...prevState, email: e.target.value }))
    }

    const toggleChecked = () => {
        setIsChecked(!isChecked)
    }

    const onSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const { data } = await axios.post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                { email: sendData.email }
            )
            setSendData({ email: data.email })
            setIsFormSend(true)
        } catch (e) {
            alert(e)
        }
        setSendData({ email: '' })
        setIsChecked(false)
    }

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

            <div className="sidebar-subscribe-body">
                <form onSubmit={onSubscribe} className="subscribe-form">
                    <input
                        type="email"
                        name="mail"
                        placeholder="Enter your mail"
                        required={true}
                        value={sendData.email}
                        onChange={handleEmail}
                    />
                    <button
                        className={`subscribe-btn ${
                            isChecked ? '' : 'disabled'
                        }`}
                        disabled={isChecked ? false : true}
                    >
                        Subscribe
                    </button>

                    <div className="sidebar-subscribe-error-message">
                        Не всі поля заповнено
                    </div>
                </form>
            </div>
            <div className="subscribe-privacy">
                <input
                    type="checkbox"
                    id="sidebar-privacy"
                    checked={isChecked}
                    onChange={toggleChecked}
                />
                <label htmlFor="sidebar-privacy">
                    By checking this box, you confirm that you have read and are
                    agreeing to our terms of use regarding the storage of the
                    data submitted through this form.
                </label>
            </div>

            {isFormSend ? (
                <div className="subscribe-message">Дані надіслано</div>
            ) : null}
        </div>
    )
}

export default SiteContentSidebarSubscribe
