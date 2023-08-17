import { Button, Stack } from "react-bootstrap"
import { useOrderCart } from "../context/OrderCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { MenuItemState } from "./NewItemForm";


export function CartItem(props: MenuItemState & { quantity: number}) {
    const { removeFromCart } = useOrderCart()

    return (
        <Stack direction="horizontal" gap={2}>
            <div className="me-auto">
                <div>
                    {props.name}{" "}
                    {props.quantity > 1 && (
                        <span className="text-muted" style={{ fontSize: ".70rem" }}>
                            x{props.quantity}
                        </span>
                    )}
                </div>
                <div className="text-muted" style={{ fontSize: ".80" }}>
                    {formatCurrency(props.price)}
                </div>
            </div>
            <div>
                {formatCurrency(props.price * props.quantity)} 
            </div>
            <Button 
                variant="outline-danger" 
                size="sm" 
                onClick={() => removeFromCart(props.id)}
            >
                &times;
            </Button>
        </Stack>
    )
}