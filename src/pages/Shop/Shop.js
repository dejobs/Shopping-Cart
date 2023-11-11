import classes from "./Shop.module.css"
import { Products } from "../../Products";
import ProductItem from "./ProductItem";

const Shop = () => {
    return ( 
        <div className={classes.shop} >
            <div className={classes.shopTitle}>
                <h1>Dejobs Tech Studio</h1>
            </div>
            <div className={classes.products}>
                {Products.map(product => (
                    <ProductItem data={product} key={product.id} />
                ))}
            </div>
        </div>
     );
}
 
export default Shop;