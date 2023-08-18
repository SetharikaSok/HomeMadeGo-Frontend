import React from 'react';
import { useLocation } from 'react-router-dom';
import { formatCurrency } from '../utilities/formatCurrency';

export function CheckOut() {
    
    const location = useLocation();

    return (
            <body>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                        <div className="card-body">
                            <h1 className="card-title text-center">Order Confirmation
                                <svg 
                                    width="60px" 
                                    height="60px" 
                                    viewBox="0 0 64 64" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    enableBackground="new 0 0 64 64">
                                        <path d="M32,2C15.431,2,2,15.432,2,32c0,16.568,13.432,30,30,30c16.568,0,30-13.432,30-30C62,15.432,48.568,2,32,2z M25.025,50 l-0.02-0.02L24.988,50L11,35.6l7.029-7.164l6.977,7.184l21-21.619L53,21.199L25.025,50z" 
                                        fill="#43a047"/>
                                </svg>
                            </h1>
                            <p className="card-text text-center">Thank you for your order! Here are the details:</p>
                            
                            <div className="mb-4">
                            <strong>Order Number: {location.state.orderId}</strong>
                            </div>
                            <div className="mb-4">
                            <strong>Placed at: {location.state.orderDate}</strong>
                            </div>
                            <div className="mb-4">
                            <strong>Total Amount due at pickup is: {formatCurrency(location.state.totalAmount)}</strong> 
                            </div>
                            <p className="mt-4 text-center">For any questions or issues, please contact our support.</p>
                            <div className="text-center">
                            <a href="/" className="btn btn-primary">Back to Home</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </body>
    )
};