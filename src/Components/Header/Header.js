import './Header.css' // import the css file for the Header component
import { FaShoppingCart } from "react-icons/fa";

const Header = (props) => { // declare the functional component named Header, it receives props
 return (
    <header>
      <div className="nav">
        <h1><a href="/">Shopping Cart</a></h1>
        <div className="cart-icon">
            <FaShoppingCart size="30px" />
            <span>{props.cartTotal}</span>
        </div>
      </div>
    </header>
 )
}

export default Header // export the Header component as the default export