import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import avocadotoast from '../assets/images/avocadotoast.jpg'
import bar from '../assets/images/bar.jpg'
import breadbasket from '../assets/images/breadbasket.jpg'
import chefplating from '../assets/images/chefplating.jpg'
import foodontable1 from '../assets/images/foodontable1.jpg'
import girleating from '../assets/images/girleating.jpg'
import platedfood from '../assets/images/platedfood.jpg'

const PhotoCarousel = () => {

    return (
        <CCarousel>
            <CCarouselItem>
                <CImage className="d-block w-100" src={bar} alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={breadbasket} alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={avocadotoast} alt="slide 3" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={girleating} alt="slide 4" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={platedfood} alt="slide 5" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={chefplating} alt="slide 6" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={foodontable1} alt="slide 7" />
            </CCarouselItem>
        </CCarousel>
    )
}

export default PhotoCarousel