import {useContext} from "react";
import classes from "./Shop.module.css";
import {ShopContext} from "../../context/ShopContext"



const ProductItem = (props) => {
    const {id, productName, price, productImage } = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemAmount =cartItems[id]
    
    return ( 
        <div className={classes.product}>
            <img src={productImage} alt="" />
            <div className={classes.description}>
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
           </div> 
           <button onClick={() => addToCart(id)}  
           className={classes.addToCartBttn}>Add to cart{cartItemAmount > 0 && <> ({cartItemAmount})</> }</button>
        </div>
     );
}
 
export default ProductItem;