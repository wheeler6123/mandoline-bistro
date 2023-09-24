import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CarouselImages } from "../assets/images/CarouselImages";


const ResponsiveCarousel = () => {

    return (
        <Carousel className="crsl" autoPlay infiniteLoop transitionTime={1000} showArrows={false} showIndicators={false} showThumbs={false}>
            {CarouselImages.map((image) => (<img key={image.id} src={image.src} alt="carousel slide" />))}
        </Carousel>
    )
}

export default ResponsiveCarousel