
import React from 'react'
import Cart from './Cart'
import Product from './Product'

const Client = (props) => {
    return (
            <div className="container">
                <div className="row mt-5 mb-5">
                    <h1 style={{textAlign: "center", margin: "0 auto 50px"}}>Client page</h1>
                    <Cart />
                    <Product />
                </div>
            </div>
    )
}


export default Client