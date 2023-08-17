import { Offcanvas, Stack } from "react-bootstrap"
import { useOrderCart } from "../context/OrderCartContext"
import { CartItem } from "./CartItem"
import { Link, useLocation } from "react-router-dom"
import { formatCurrency } from "../utilities/formatCurrency";
import axios from "axios";
import { useState } from "react";
import { UserProfile } from "../redux/actions/profileAction";
import { useSelector } from "react-redux";


type OrderCartProps = {
    isOpen: boolean
  };

type OrderState = {
    id: string
    totalAmount: number 
    orderDate: string
};

export function OrderCart({ isOpen }: OrderCartProps) {
    const { closeCart, cartItems, getKitchenId } = useOrderCart()
  
    const stateUserProfile = useSelector((state: any) => state.userProfile) as UserProfile;
    
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
            console.log(orderData)
            // console.log('Successful registered. Response:', response.data);
            if (response.status === 200) {
                console.log(" New Order is successfully created!")
            }
            else {
                console.log("Order is failed to create.")
            }
        //   setErrors(null); // Clear any previous errors if login succeeds
        } catch (err) {
            console.error('Submision is failed:');
        }
    };

    // const validateForm = (): boolean => {
    //     throw new Error("Function not implemented.");
    // }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // throw new Error("Function not implemented.");

        console.log('You Placed an Order.');
        
        // if (validateForm()) {
            handlePlaceOrder(stateUserProfile.webtoken);
            // console.log('Order data:', orderData);
            // }

        
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
                    <div className="btn btn-primary mb-2">
                        <form action="" onSubmit={handleSubmit}>
                            <button className="btn" type="submit" id="order">Place Order</button> 
                            <Link to="/checkOut" className="btn btn-defual border w-100 bg-secondary">Place Order</Link>  
                        </form>
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}


