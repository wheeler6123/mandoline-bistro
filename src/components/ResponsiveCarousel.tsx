import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CarouselImages } from "../assets/images/CarouselImages";


const ResponsiveCarousel: React.FC = () => {

    return (
        <Carousel className="crsl" autoPlay infiniteLoop interval={2000} transitionTime={1000} showArrows={false} showIndicators={false} showThumbs={false} showStatus={false}>
            {CarouselImages.map((image) => (<img key={image.id} src={image.src} alt="carousel slide" />))}
        </Carousel>
    )
}

export default ResponsiveCarousel