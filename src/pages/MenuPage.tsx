import React, { useEffect } from 'react';

const MenuPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="menu-container">
            <div className="menu">
                <h1>Menu</h1>
                <h2 className="menu-subtitle">SNACKS</h2>
                <br />
                <span className="menu-item">frites 8</span>
                <br />
                <span className="menu-item">fried okra 12</span>
                <br />
                <span className="menu-item">savory brussels 15</span>
                <span className="menu-item-description">brussels, sweet onion, bacon</span>
                <br />
                <span className="menu-item">chicken liver mousse 15</span>
                <span className="menu-item-description">brioche, pickled onion, pickled apple, mustard seed</span>
                <br />
                <span className="menu-item">roasted butternut squash 16</span>
                <span className="menu-item-description">pumpkin seed, goat cheese, pomegranate, sage</span>
                <br />
                <h2 className="menu-subtitle">ENTREES</h2>
                <br />
                <span className="menu-item">roasted chicken 28</span>
                <span className="menu-item-description">whole bird, herbs, fingerling potatoes, radicchio</span>
                <br />
                <span className="menu-item">pork chop 30</span>
                <span className="menu-item-description">pork chop, apple, sweet potato, brussels, mustard</span>
                <br />
                <span className="menu-item">steak frites 32</span>
                <span className="menu-item-description">hanger steak, shoestring frites, chimichurri</span>
                <br />
                <span className="menu-item">duck breast 34</span>
                <span className="menu-item-description">duck breast, parsnip, carrot, cranberry</span>
                <br />
                <h2 className="menu-subtitle">BREADS & SWEETS</h2>
                <br />
                <span className="menu-item">croissant selection mkt</span>
                <br />
                <span className="menu-item">baguette 4</span>
                <br />
                <span className="menu-item">biscuits w/ butter & preserves (4) 11</span>
                <br />
                <span className="menu-item">pain au chocolate 6</span>
                <br />
                <span className="menu-item">beignets (8) 9</span>
            </div>
        </div>
    )
}

export default MenuPage;