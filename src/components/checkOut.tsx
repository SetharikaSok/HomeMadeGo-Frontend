import { Link } from "react-router-dom";

export function CheckOut() {
    return (
        <>
            <h1>Thank you for your order.
                <svg 
                    width="60px" 
                    height="60px" 
                    viewBox="0 0 64 64" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    enable-background="new 0 0 64 64">
                        <path d="M32,2C15.431,2,2,15.432,2,32c0,16.568,13.432,30,30,30c16.568,0,30-13.432,30-30C62,15.432,48.568,2,32,2z M25.025,50 l-0.02-0.02L24.988,50L11,35.6l7.029-7.164l6.977,7.184l21-21.619L53,21.199L25.025,50z" 
                        fill="#43a047"/>
                </svg>
            </h1>
            <p>Your order is on the way.</p>

            {/* <div className="conatiner col-12 my-5 br-2 rounded ">
                <div className="row">
                    <div className="col-8">
                        <h4>Billing Address</h4>
                        <form>
                            <div className="row">
                                <div className="col-6">
                                    <label className="form-label" htmlFor="firstname">First Name</label>
                                    <input type="text" id="firstname" className="form-control"></input>
                                </div>
                                <div className="col-6">
                                    <label className="form-label" htmlFor="lastname">Last Name</label>
                                    <input type="text" id="lastname" className="form-control"></input>
                                </div>
                                <div className="col-12">
                                    <label className="form-label" htmlFor="email">Email</label>
                                    <input type="text" id="email" className="form-control"></input>
                                </div>
                                <div className="col-12">
                                    <label className="form-label" htmlFor="address">Address</label>
                                    <input type="text" id="address" className="form-control"></input>
                                </div>
                                <div className="col-5">
                                    <label className="form-label" htmlFor="country">Country</label>
                                    <select className="form-select" id="country">
                                        <option>Choose</option>
                                        <option>USA</option>
                                        <option>Cambodia</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <label className="form-label" htmlFor="state">Country</label>
                                    <select className="form-select" id="state">
                                        <option>Choose</option>
                                        <option>Atlanta</option>
                                        <option></option>
                                    </select>
                                </div>
                                <div className="col-3">
                                    <label className="form-label" htmlFor="zip">Zip</label>
                                    <input 
                                        className="form-control"
                                        type="number"
                                        id="zip"
                                    />
                                </div>
                              
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">Shippping address is the same as my billing address</label>
                                </div>
                                
                                <h4>Payment</h4>
                                <div className="formcheck">
                                    <input className="form-check-input" type="radio"/>
                                    <label className="form-check-label">Credit Card</label>
                                </div>
                                <div className="formcheck">
                                    <input className="form-check-input" type="radio"/>
                                    <label className="form-check-label">Debit Card</label>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <label className="form-label">Name on Card</label>
                                        <input className="form-control" id="cardname" type="text"/>
                                        <small className="text_muted">Fulll name as displayed on card</small>
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label">Credit Card Number</label>
                                        <input className="form-control" id="creditcardnumber" type="text"/>
                                    </div>
                                    <div className="col-3">
                                        <label className="form-label">Expiration</label>
                                        <input className="form-control" id="expiration" type="text"/>
                                    </div>
                                    <div className="col-3">
                                        <label className="form-label">CVV</label>
                                        <input className="form-control" id="cvv" type="text"/>
                                    </div>
                                </div>
                                
                                <button type="submit" className="btn btn-primary btn-block mb-5">Continue To Checkout</button>
                                
                            </div>
                        </form>
                    </div>
                    <div className="col-4">
                        <h4 className="d-flex justify-content-between align-item-center">
                            <span className="text-muted">Your Cart</span>
                            <span className="badge bg-secondary rounded-pill">4</span>
                        </h4>
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between">
                                <div>
                                    <h6>Product 1</h6>
                                    <span className="text-muted">Brief Description</span>
                                </div>
                                <span className="text-muted">$5.00</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <div>
                                    <h6>Product 2</h6>
                                    <span className="text-muted">Brief Description</span>
                                </div>
                                <span className="text-muted">$6.00</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <div>
                                    <h6>Product 3</h6>
                                    <span className="text-muted">Brief Description</span>
                                </div>
                                <span className="text-muted">$8.00</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <div>
                                    <h6>Product 4</h6>
                                    <span className="text-muted">Brief Description</span>
                                </div>
                                <span className="text-muted">$10.00</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <div>
                                    <h6>Total</h6>
                                    <span className="text-muted"></span>
                                </div>
                                <span className="text-muted">$10.00</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </>
    )
};