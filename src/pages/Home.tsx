import { Link } from "react-router-dom"
// import kitchenData from "../data/kitchens.json"
import { KitchenList } from "../components/KitchenList"
import { Col, Row } from "react-bootstrap"
import React, { useState } from "react"
import axios from "axios"
import { KitchenState } from "../components/NewKitchenForm"

export function Home() {
    const [formData, setFormData] = useState<KitchenState[]>([]);
    
    React.useEffect(() => {
        axios
          .get("https://still-tundra-93495-217ee8867b82.herokuapp.com/kitchen")
          .then((response) => {
            setFormData(response.data);
            console.log("Call All kitchen", response.data)
          });
      }, []);

    return (
    <>
    <h1>HomemadeGo</h1>
        <Row  md={2} xs={1} lg={3} className="g-3">
            {formData.map(kitchen => (
                <Col key={kitchen.id}>
                    <Link to='/kitchen' state={{kitchenIdStr: kitchen.id}} className="btn btn-defual border w-30 bg-warning  ">
                        <KitchenList {...kitchen} />
                    </Link>
                </Col>
            ))}
        </Row>
    </>
    )
};