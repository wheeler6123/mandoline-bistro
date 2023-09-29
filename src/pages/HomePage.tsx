import ResponsiveCarousel from "../components/ResponsiveCarousel";
import restaurantvert from "../assets/images/restaurantvertRS.webp";


const HomePage = () => {

    return (
        <div className="home-page-body">
            <ResponsiveCarousel />
            <div className="home-about-container">
                <img src={restaurantvert} alt="restaurant interior" className="about-img" />
                <div className="about-text">
                    <h2>about our home</h2>
                    <p>
                        Welcome to Mandoline, a hidden gem nestled in the heart of historic Brentwood neighborhood. Step into our welcoming bistro, reminiscent of a visit to a dear friend's home filled with the smell of freshly baked bread. Here, we offer not only a delightful dining experience but also showcase an exquisite selection of pastries and breads that are sure to captivate your senses.
                        <br />
                        <br />
                        Unwind at our intimate bar, where you can savor carefully curated spirits and explore our thoughtfully crafted wine list. For those who prefer the outdoors, our cozy covered patio provides a perfect retreat for both lounging and savoring delectable bites.
                        <br />
                        <br />
                        Planning a special event? Our charming bungalow accommodates up to 50 seated guests or 75 for standing receptions, making it an ideal venue for private gatherings. Inquire today about hosting your memorable occasion at Mandoline.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomePage