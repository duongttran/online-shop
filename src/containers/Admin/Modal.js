import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import classes from './Modal.module.css'
import { editProduct } from '../../store/admin/actions/adminActions'



function Modal(props) {
    const [productName, setProductName] = useState("")
    const [imageLink, setImageLink] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [productID, setProductID] = useState("")

    const dispatch = useDispatch()

    console.log('editProduct from Modal', props.item)
    const { item } = props

    const onUpdate = (e) => {
        e.preventDefault()
        const newProductUpdate = {
            name: productName,
            image: imageLink,
            price: parseInt(price),
            quantity: parseInt(quantity),
            productID,
        }
        console.log(newProductUpdate)
        dispatch(editProduct(newProductUpdate))
    }

    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit a product</h5>
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
                                        {/* <th scope="col">Actions</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input placeholder={(item.productID)}
                                            onChange={(e) => setProductID(e.target.value)}
                                            name="productID" /></td>
                                        <td><input className={classes.input}
                                            onChange={(e) => setProductName(e.target.value)}
                                            name="productName"
                                            placeholder={(item.name)} /></td>
                                        <td>
                                            <img src={item.image} alt={item.name} style={{ maxHeight: "50px" }} />
                                            <input name="imageLink" onChange={(e) => setImageLink(e.target.value)} />
                                        </td>
                                        <td>
                                            <input
                                                placeholder={item.price}
                                                onChange={(e) => setPrice(e.target.value)} /></td>
                                        {/* <td>
                                            <button
                                                className="btn btn-success"
                                                disabled={item.quantity === 1 ? true : false}

                                            >-</button>
                                            {item.quantity}
                                            <button className="btn btn-success"

                                            >+</button>
                                        </td> */}
                                        <td><input placeholder={item.quantity} className={classes.smallInput} onChange={(e) => setQuantity(e.target.value)} /></td>
                                        <td>{item.price * item.quantity}</td>
                                        {/* <td><button className="btn btn-info" ><i class="fas fa-undo"></i></button></td> */}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-warning" onClick={(e) => onUpdate(e)}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
