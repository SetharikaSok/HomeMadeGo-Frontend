import { Col, Row } from "react-bootstrap"
import { MenuItem } from "../components/MenuItem"
import { useLocation } from "react-router-dom"
import { useState } from "react";
import { MenuItemState } from "../components/NewItemForm";
import React from "react";
import axios from "axios";
import { useOrderCart } from "../context/OrderCartContext";


const Kitchen: React.FC = () => {
    const [formData, setFormData] = useState<MenuItemState[]>([]);
    const location = useLocation()
    const { kitchenIdStr } = location.state
    const { setKitchenId } = useOrderCart()

    
    
    React.useEffect(() => {
        console.log("KitchnId" + kitchenIdStr);
        setKitchenId(kitchenIdStr)
        axios
          .get(`https://still-tundra-93495-217ee8867b82.herokuapp.com/menuItem/kitchen/${kitchenIdStr}`)
          .then((response) => {
            setFormData(response.data);
            console.log("Call All Menuitem", response.data)
          });
      }, []);
    return (
        <>
            <h1>Kitchen</h1>
            <Row  md={2} xs={1} lg={3} className="g-3">
                {formData.map(item => (
                    <Col key={item.id}>
                        <MenuItem {...item} />
                      </Col>
                ))}
            </Row>
        </>
    )
};

export default Kitchen;

