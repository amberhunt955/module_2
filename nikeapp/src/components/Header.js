import { ProductContext } from "../App";
import { useContext } from "react";

function Header() {
    const ProductContextValue = useContext(ProductContext);
    // console.log(ProductContextValue);
    const {cart} = ProductContextValue;
    
    return (
        <header>
            <h1>Nike Store</h1>
            <p>Shopping Cart: {cart.length > 0 ? cart.length : "Empty"} </p>
        </header>
    )
}

export default Header;