import { createContext, ReactNode, useContext, useState } from "react";
import { OrderCart } from "../components/OrderCart";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { MenuItemState } from "../components/NewItemForm";

type OrderCartProviderProps = {
    children: ReactNode
}

export type CartItemProp = {
    id: string
    quantity: number
    price: number
}

type OrderCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: string) => number
    increaseCartQuantity: (cartItem: MenuItemState) => void
    decreaseCartQuantity: (id: string) => void
    removeFromCart: (id: string) => void
    cartQuantity: number
    cartItems: CartItemProp[],
    setKitchenId: (id: string) => void,
    getKitchenId: string
}

const OrderCartContext = createContext({} as OrderCartContext)

export function useOrderCart() {
    return useContext(OrderCartContext)
}

export function OrderCartProvider({ children}: OrderCartProviderProps) {
    const [isOpen, setIsOpen] = useState(false)

    const [cartItems, setCartItems] = useLocalStorage<CartItemProp[]>(
        "order-cart",
        []
    )

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    )

    const [kitchenIdStr, setKitchenIdStr] = useLocalStorage<string>(
        "kitchenIdaaaa",
        ""
    )

    const getKitchenId = kitchenIdStr

    const openCart = () => setIsOpen(true)

    const closeCart = () => setIsOpen(false)

    function getItemQuantity(id: string) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(cartItem: MenuItemState) {
        setCartItems(currentItems => {

            if (currentItems.find(item => item.id === cartItem.id) == null) {
                return [...currentItems, {...cartItem, quantity: 1 }]
            } else {
                return currentItems.map(item => {
                    if (item.id === cartItem.id) {
                        return {...cartItem, quantity: item.quantity + 1, price: item.price}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: string) {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter(item => item.id !== id)    
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }
 
    function removeFromCart(id: string) {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

    function setKitchenId(id: string) {
        setKitchenIdStr(id)
        console.log("Hook  setkitchenid" + id)
    }

    return (
        <OrderCartContext.Provider
        value={{ 
            getItemQuantity,
            increaseCartQuantity, 
            decreaseCartQuantity, 
            removeFromCart,
            openCart,
            closeCart,
            cartItems,
            cartQuantity,
            setKitchenId,
            getKitchenId
        }}
        >
            {children}
            <OrderCart isOpen={isOpen} />
        </OrderCartContext.Provider>
    )
}
