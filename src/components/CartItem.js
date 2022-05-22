import React, {useState, useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"
import useHover from "../hooks/useHover"

function CartItem({item}) {
    const [hovered, ref] = useHover()
    const {removeFromCart} = useContext(Context)
    

    // Change the trash icon to a filled-in trash icon when hovering over it
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    
    return (
        <div className="cart-item">
            <i 
                className={iconClassName} 
                onClick={() => removeFromCart(item.id)}
                ref={ref}
            >
            </i>
            
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}


// is used to check if the props are valid or not 
CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem