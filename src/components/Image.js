import React, {useState, useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"
import useHover from "../hooks/useHover"

function Image({className, img}) {
    const [hovered, ref] = useHover()

    /*grabed the toggleFavourite function from Context.js and gave it an image ID as a parameter to change it's value to true when clicked  */
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)
    
    // to favourite an image by chanign the icon 
    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    
    // some method is used to add an image to the cart 
    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }

    return (
        <div 
            className={`${className} image-container`}
            ref={ref}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image