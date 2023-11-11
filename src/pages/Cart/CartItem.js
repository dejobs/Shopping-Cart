import classes from "./Cart.module.css"
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";



const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;

    const {addToCart, removeFromCart, cartItems, cartInputChange} = useContext(ShopContext);

    return ( 

        <div className={classes.cartItem}> 
            <img src={productImage} alt={productImage}  />
        
            <div className={classes.description}>
                <p>
                    <b>{productName}</b>
                </p>
                    <p>${price}</p>

                <button onClick={() => removeFromCart(id)}>-</button>
                <input className={classes.cartInputChange} type="number"  value={cartItems[id]}
                    onChange={(e) => cartInputChange(id, Number(e.target.value))}/>
                <button onClick={() => addToCart(id)}>+</button>
                
            </div>
        </div>
     );
}
 
export default CartItem;