import { TextareaAutosize, Typography } from '@mui/material'
import React, { FormEvent, useEffect, useState } from 'react'
import '../SiteContent/SiteContent.scss'
import { Article, articlesArray, getArticlesObject } from 'utils/articlesArray'

type Props = { articlesObject?: { [id: number]: Article }; id: number }

type Review = {
    name: string
    text: string
    userImg?: string
    email?: string
}

const Reviews = ({
    articlesObject = getArticlesObject(articlesArray),
    id,
}: Props) => {
    const arrReviews: Review[] = articlesObject[id].articleReviews!

    // [
    // {
    //     name: 'Dima',
    //     userImg: '/images/userImage.png',
    //     text: 'It`s website so exciting!',
    // },
    // {
    //     name: 'Dasha',
    //     userImg: '/images/userImage.png',
    //     text: 'All articles very interested.',
    // },
    // ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)

    // оновлення відгуків при переході на сторінку іншої статті
    useEffect(() => {}, [reviews])

    // додавання відгуків
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
        userImg: '/images/userImage.png',
        email: '',
    })

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({ ...prevState, name: e.target.value }))
    }

    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({ ...prevState, text: e.target.value }))
    }

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({ ...prevState, email: e.target.value }))
    }

    const onPostBtn = (e: FormEvent) => {
        e.preventDefault()
        setReviews((prevState) => {
            return [...prevState, newReview]
        })
        setNewReview({ name: '', text: '', email: '' })
    }

    return (
        <>
            <Typography variant="h5" component="h2">
                Leave a reply
            </Typography>
            <div>
                {reviews.map(({ userImg, name, text }, i) => (
                    <div className="review-item" key={i}>
                        <div className="review-img">
                            <img src={userImg} alt="" />
                        </div>
                        <div className="review-content">
                            <p className="review-name">{name} says: </p>
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <hr />
            <form className="review-form" onSubmit={onPostBtn}>
                <h3>
                    Your email address will not be published. Required fields
                    are marked <span style={{ color: 'red' }}>*</span>
                </h3>
                <label htmlFor="comment">Comment</label>
                <TextareaAutosize
                    minRows={5}
                    style={{
                        width: '100%',
                        resize: 'none',
                        marginTop: '10px',
                        outline: 'none',
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '16px',
                        fontWeight: 'bold',
                    }}
                    required={true}
                    id="comment"
                    onChange={handleChangeText}
                    value={newReview.text}
                />
                <div className="review-inputs-group">
                    <div className="review-input">
                        <label htmlFor="name">
                            Name <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            required={true}
                            onChange={handleChangeName}
                            value={newReview.name}
                        />
                    </div>
                    <div className="review-input">
                        <label htmlFor="mail">
                            Email <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            type="email"
                            id="mail"
                            required={true}
                            onChange={handleChangeEmail}
                            value={newReview.email}
                        />
                    </div>
                </div>
                <button className="slide-btn">Post comment</button>
            </form>
        </>
    )
}

export default Reviews
