import { useEffect, useRef, useState } from 'react'
import './SiteContentSidebarCarousel.scss'
import { Link } from 'react-router-dom'

type Props = {
    slides: {
        id: number
        title: string
        image: string
        isTrendingNow?: boolean
        hrefAuthor?: string
        authorName?: string
        minuteRead?: number
    }[]
}

const SiteContentSidebarCarousel = ({ slides }: Props) => {
    const rootRef = useRef<HTMLDivElement | null>(null)
    // цей ref відповідає за всю карусель

    const containerRef = useRef<HTMLDivElement | null>(null)
    // containerRef потрібен для того, щоб на div "container" можна було повісити scroll

    const [activeSlide, setActiveSlide] = useState(0)

    useEffect(() => {
        const containerEl = containerRef.current
        // в current знаходиться посилання на div "container"
        const el = rootRef.current

        containerEl?.addEventListener('scroll', () => {
            // на div "container" вішаю подію scroll
            const newIndex = Math.round(
                containerEl.scrollLeft / (el?.clientWidth ?? 0)
            )

            setActiveSlide(newIndex)
        })
    }, [])

    const goToSlide = (index: number) => {
        const containerEl = containerRef.current
        const el = rootRef.current
        setActiveSlide(index)
        containerEl?.scrollTo({
            left: (el?.clientWidth ?? 0) * index,
            behavior: 'smooth',
        })
    }

    const handleClick = (index: number) => () => goToSlide(index)

    return (
        <div ref={rootRef} className="carousel">
            <div className="wrapper">
                <div className="container" ref={containerRef}>
                    {slides
                        .filter((item) => item.isTrendingNow === true)
                        .map(
                            ({
                                id,
                                title,
                                image,
                                hrefAuthor,
                                authorName,
                                minuteRead,
                            }) => (
                                <div className="slide" key={id}>
                                    <Link to={`/articles/${id}`}>
                                        <p
                                            className="title"
                                            dangerouslySetInnerHTML={{
                                                __html: title,
                                            }}
                                        ></p>
                                    </Link>

                                    <ul className="activity">
                                        <li>
                                            <Link to={`/${hrefAuthor}`}>
                                                {authorName}
                                            </Link>
                                        </li>
                                        <li>
                                            <span className="activity-icon read"></span>
                                            {minuteRead} minute read
                                        </li>
                                    </ul>

                                    <Link to={`/articles/${id}`}>
                                        <img src={image} alt={title} />
                                    </Link>
                                </div>
                            )
                        )}
                </div>
            </div>

            <div className="pagination">
                {slides
                    .filter((item) => item.isTrendingNow === true)
                    .map((slides, index) => (
                        // index потрібен для того, щоб при натисканні на відповідну button ми отримували відповідний index слайду
                        <button
                            className={`dot ${
                                activeSlide === index ? 'active' : ''
                            }`}
                            key={index}
                            onClick={handleClick(index)}
                        />
                    ))}
            </div>
        </div>
    )
}

export default SiteContentSidebarCarousel
