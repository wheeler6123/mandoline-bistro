import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CarouselImages } from "../assets/images/CarouselImages";


const ResponsiveCarousel: React.FC = () => {

    return (
        <Carousel 
            className="crsl" 
            autoPlay={true} 
            infiniteLoop={true} 
            interval={2000} 
            transitionTime={1500} 
            showArrows={true} 
            showIndicators={false} 
            showThumbs={false} 
            showStatus={false}
            stopOnHover={false}
            swipeable={true}
            emulateTouch={true}
            dynamicHeight={false}
        >
                {CarouselImages.map((image) => (<img key={image.id} src={image.src} alt={image.alt} />))}
        </Carousel>
    )
}

export default ResponsiveCarousel