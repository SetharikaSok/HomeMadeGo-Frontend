import { Link, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUserProfile } from "../redux/actions/profileAction";
import { useOrderCart } from "../context/OrderCartContext";


export function MyAccount() {
    const { cartItems, removeFromCart } = useOrderCart()
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const clearCart = () => {
        // Remove all items from the cart
        cartItems.forEach(item => removeFromCart(item.id));
      };

    const handleLogout = () => {
        // Clear user profile state (Redux example)
        dispatch(clearUserProfile());
    
        // Clear tokens from local storage
        localStorage.removeItem('token'); 

        // Clear the cart
        clearCart();
    
        // Redirect to the login or home page
        navigate('/login'); // Replace with the appropriate route
      };

    return (
        <>
            <h1>My Account</h1>
            <div>
                <Link to="/newKitchenForm" className="btn btn-defual border w-30 bg-secondary mb-3">
                        Create Kitchen
                </Link>
            </div>
            <div>
                <Link to="/newItemForm" className="btn btn-defual border w-30 bg-secondary mb-3">Add Menu</Link>
            </div>
            <div className="btn btn-defual border w-30 bg-primary">
                <button 
                    className="btn" 
                    type="submit" 
                    id="logOut"
                    onClick={handleLogout}
                    >
                        Log Out
                </button> 
            </div>
        </>
    )
};

