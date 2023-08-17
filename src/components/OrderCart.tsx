import { Offcanvas, Stack } from "react-bootstrap"
import { useOrderCart } from "../context/OrderCartContext"
import { CartItem } from "./CartItem"
import { Link } from "react-router-dom"
import { formatCurrency } from "../utilities/formatCurrency";





type OrderCartProps = {
    isOpen: boolean
  };

export function OrderCart({ isOpen }: OrderCartProps) {
    const { closeCart, cartItems} = useOrderCart()
    // console.log(cartItems)
    // const [menuItems, setMenuItems] = useState<Item[]>([]);

    // useEffect(() => {
    //     // Fetch all menu items from the backend API
    //     axios.get("https://still-tundra-93495-217ee8867b82.herokuapp.com/menuItem")
    //         .then(response => {
    //             setMenuItems(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching menu items:', error);
    //         });
    // }, []);
    // cartItems.map(item => {
    //     if (typeof item === CartItemProp){

    //     }
    //     setTotal(total+ parseInt(item.quantity+""));
    // })

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
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
                    <div>
                        <Link to="/checkOut" className="btn btn-defual border w-100 bg-secondary">Place Order</Link>
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}