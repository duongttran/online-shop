import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseItem, decreaseItem, removeItem } from '../../store/client/actions/cartActions'

import './Cart.css'

const Cart = () => {

    const { cart: cartList } = useSelector(state => state.cartReducers)

    const dispatch = useDispatch()

    const renderCart = () => {
        return cartList.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td>{(item.productID)}</td>
                    <td>{item.name}</td>
                    <td><img src={item.image} alt={item.name} style={{ maxHeight: "50px" }} /></td>
                    <td>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</td>
                    <td>
                        <button
                            className="btn btn-success"
                            disabled={item.quantity === 1 ? true : false}
                            onClick={() => dispatch(decreaseItem(item))}
                        >-</button>
                        {item.quantity}
                        <button className="btn btn-success"
                            onClick={() => dispatch(increaseItem(item))}
                        >+</button>
                    </td>
                    <td>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price * item.quantity)}</td>
                    <td><button className="btn btn-danger" onClick={() => dispatch(removeItem(item))}>x</button></td>
                </tr>
            )
        })
    }

    return (
        <>
            <i data-toggle="modal" data-target="#exampleModal" style={{ color: "mediumturquoise", fontSize: "40px", cursor: "pointer" }} className="fas fa-shopping-cart"></i>
            {cartList.length > 0 ?
                <span className="cartQuantity">{cartList.length}</span> :
                <span className="cartNoProduct">{cartList.length}</span>}

            {/* <img src="https://www.svgrepo.com/show/58322/shopping-cart.svg" style={{ width: "50px" }} /> */}

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cart</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartList.length > 0 ? renderCart() : <tr style={{ margin: "30px auto" }}><td colSpan="6" className="text-center">There is no product in this cart</td></tr>}
                                </tbody>
                            </table>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-warning" onClick={() => { dispatch(clearAllItems()) }}>Reset</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Cart;