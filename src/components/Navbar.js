import { Link } from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import classes from "./Navbar.module.css"

const Navbar = () => {

    return ( 
        <div className={classes.navbar}>
            <div className={classes.links}>
                <Link to="/">Shop</Link>
                <Link to="/cart"><ShoppingCart size={32} /></Link>
            </div>
        </div>
     );
}
 
export default Navbar;