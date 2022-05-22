import React, {useState, useContext} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const { cartItems, emptyCart } = useContext(Context)
    
    // to calculate the total price of the cart
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    

    /* 
Clicking the "Place Order" button should: Change the text to "Ordering...", Log "Order placed!" to the console, Empty out the cart
    
    */
    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>


            {
                // Only render the "Place Order" button if there are items in the cart
                cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={placeOrder}>{buttonText}</button>
                </div> :
                <p>You have no items in your cart.</p>
            }
        </main>
    )
}

export default Cart