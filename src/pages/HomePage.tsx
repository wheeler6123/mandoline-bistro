import React, { useEffect } from 'react';
import ResponsiveCarousel from "../components/ResponsiveCarousel";
import restaurantvert from "../assets/images/restaurantvertRS.webp";


const HomePage: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="home-page-body" id="top">
            <ResponsiveCarousel />
            <div className="home-about-container" id="about">
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
            <div className="contact-container" id="contact">
                <div className="contact-details">
                    <div className="contact-details-text">
                        <p>location</p>
                        <p>114 W. Houston St.</p>
                        <p>Philadelphia, PA 19130</p>
                        <br />
                        <br />
                        <p>contact</p>
                        <p>(215)856-3654</p>
                        <p>hello@madoline.com</p>
                        <br />
                        <br />
                        <p>hours</p>
                        <p>Monday</p>
                        <p>Closed</p>
                        <p>Tuesday - Thurday</p>
                        <p>11am - 10pm</p>
                        <p>Friday - Saturday</p>
                        <p>10am - 11pm</p>
                        <p>Sunday</p>
                        <p>10am - 8pm</p>
                    </div>
                </div>
                <div className="contact-form-container">
                    <form action="submit" className="contact-form">
                        <h2>contact us</h2>
                        <div className="contact-name">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="contact-email">
                            <label htmlFor="email">Email:</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="contact-message">
                            <label htmlFor="message">Message:</label>
                            <textarea name="message" id="message" cols={30} rows={10}></textarea>
                        </div>
                        <div className="contact-submit">
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HomePage