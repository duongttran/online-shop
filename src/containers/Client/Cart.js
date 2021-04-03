import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearAllItems, increaseItem, decreaseItem, removeItem } from '../../store/client/actions/cartActions'

const Cart = (props) => {

    const { cart: cartList } = useSelector(state => state.cartReducers)
    console.log('cartList', cartList)

    const dispatch = useDispatch()

    const renderCart = () => {
        return cartList.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td>{(item.productID)}</td>
                    <td>{item.name}</td>
                    <td><img src={item.image} alt={item.name} style={{ maxHeight: "50px" }} /></td>
                    <td>{item.price}</td>
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
                    <td>{item.price * item.quantity}</td>
                    <td><button className="btn btn-danger" onClick={() => dispatch(removeItem(item))}>x</button></td>
                </tr>
            )
        })
    }

    // const selectedProducts = cartList.map((item, idx) => {
    //     return (
    //         <tr key={idx}>
    //             <td>{(item.productID.split(" ")[1])}</td>
    //             <td>{item.name}</td>
    //             <td><img src={item.image} alt={item.name} style={{ maxHeight: "50px" }} /></td>
    //             <td>{item.price}</td>
    //             <td>
    //                 <button className="btn btn-success">-</button>
    //                 {item.quantity}
    //                 <button className="btn btn-success">+</button>
    //             </td>
    //             <td>{item.price * item.quantity}</td>
    //             <td><button className="btn btn-danger">x</button></td>
    //         </tr>
    //     )
    // })

    return (
        <>
            {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Shopping Cart</button>  */}
            <i data-toggle="modal" data-target="#exampleModal" style={{ color: "gold", fontSize: "40px", cursor: "pointer" }} className="fas fa-shopping-cart"></i>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
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
                                    {renderCart()}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-warning" onClick={() => { dispatch(clearAllItems()) }}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

// const mapStateToProps = state => {
//     return {
//         cartList: state.cartReducers.cart
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onAddItem: (product, id) => dispatch(addItem(product, id))
//     }
// } 

export default Cart;