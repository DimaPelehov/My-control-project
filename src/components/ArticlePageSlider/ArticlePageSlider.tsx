import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../ArticlePageSlider/ArticlePageSlider.scss'

type Props = {}

const ArticlePageSlider = (props: Props) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <Slider {...settings}>
            <div className="slider-item">
                <img src="/images/site-cont-article-col-img3.jpg" alt="" />
                <p>Quis in sapien tempus</p>
            </div>
            <div className="slider-item">
                <img src="/images/site-cont-article-col-img4.jpg" alt="" />
                <p>Semper condim entum</p>
            </div>
            <div className="slider-item">
                <img src="/images/site-cont-article-col-img5.jpg" alt="" />
                <p> Vici consequat justo</p>
            </div>
        </Slider>
    )
}

export default ArticlePageSlider
