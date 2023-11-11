import classes from "./Cart.module.css"
import { Products } from "../../Products";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import CartItem from "./CartItem";

import {useNavigate} from "react-router-dom"


const Cart = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext);

    const totalCartAmount = getTotalCartAmount()

    const navigate = useNavigate();

    return ( 
        <div className={classes.cart}>
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className={classes.cartItems}>
                {Products.map(product => {
                    if (cartItems[product.id] !== 0){
                       return <CartItem data={product}  key={product.id}/>
                    }
                })}

            </div>
           
            {totalCartAmount > 0 ?<div className={classes.checkout}>
                <p>Subtotal: ${totalCartAmount}</p>
                <button onClick={() => navigate("/")}>Continue Shopping</button>
                <button>Checkout</button>
            </div> : 
            <h1>Your cart is empty</h1>}
        </div>
     );
}
 
export default Cart;