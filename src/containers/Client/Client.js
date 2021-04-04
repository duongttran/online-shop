
import React from 'react'
import Cart from './Cart'
import Product from './Product'

const Client = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row mt-5 mb-5">
                    <h1>Client page</h1>
                    <Cart />
                    <Product />
                </div>
            </div>

        </div>
    )
}


export default Client