import { Offcanvas, Stack } from "react-bootstrap"
import { useOrderCart } from "../context/OrderCartContext"
import { CartItem } from "./CartItem"
import { Link, useNavigate} from "react-router-dom"
import { formatCurrency } from "../utilities/formatCurrency";
import axios from "axios";
import { UserProfile } from "../redux/actions/profileAction";
import { useSelector } from "react-redux";



type OrderCartProps = {
    isOpen: boolean
  };

export function OrderCart({ isOpen }: OrderCartProps) {

    const { closeCart, cartItems, getKitchenId, removeFromCart } = useOrderCart()

    const stateUserProfile = useSelector((state: any) => state.userProfile) as UserProfile;

    const navigate = useNavigate();

    
    const handlePlaceOrder = async (token: string) => {
        const orderData = {
            totalAmount: cartItems.reduce((total, cartItems) => {
                return total + cartItems.price * cartItems.quantity
            }, 0),
            kitchenId: getKitchenId,
            menuItems: cartItems.map(item => ({
                menuItemId: item.id,
                quantity: item.quantity
            }))
          };
        console.log('Order data:', orderData);

        try {
            const customHeaders = {
                'token': token,
            };

            const response = await axios.post(
                "https://still-tundra-93495-217ee8867b82.herokuapp.com/order",
                orderData,
                { headers: customHeaders }
            );
            // console.log('New Order is successfully created! Response:', response.data);

            if (response.status === 200) {
                // Clear the cart after placing the order
                clearCart();

            
                console.log(response.data)
                const orderIdStr = response.data["order"]["id"]
                const orderDateStr = response.data["order"]["orderDate"]
                const totalAmountNum = response.data["order"]["totalAmount"]
                // Navigate to the checkout route
                navigate('/checkOut', {state:{kitchenName: "Kitchen A", orderId: orderIdStr, orderDate: orderDateStr, totalAmount: totalAmountNum }});
            }
            else {
                console.log("Order is failed to create.")
            }
        } catch (err) {
            console.error('Submision is failed:', err);
            alert("Please log in to place an order.")
        }
    };   

    const clearCart = () => {
        // Remove all items from the cart
        cartItems.forEach(item => removeFromCart(item.id));
      };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handlePlaceOrder(stateUserProfile.webtoken);
        
        console.log('You Placed an Order.');

    };



    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Link to="/" className=" w-50 text-black-50">Back to Home</Link>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem name={""} description={""} category={""} imgUrl={""} file={null} key={item.id} {...item} />
                    ))}
                    
                    <div className="ms-auto fw-bold fs-5">
                        Total{" "}
                        {formatCurrency(
                            cartItems.reduce((total, cartItem) => {
                                return total + cartItem.price * cartItem.quantity
                            }, 0)
                        )}
                    </div>
                    <div className="btn btn-warning mb-2">
                        <form action="" onSubmit={handleSubmit}>
                            <button 
                                className="btn" 
                                type="submit" 
                                id="order">
                                    Place Order
                                </button> 
                        </form>
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}




