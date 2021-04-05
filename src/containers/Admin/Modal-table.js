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

    const { item } = props

    const onUpdate = (e) => {
        e.preventDefault()
        const newProductUpdate = {
            name: productName,
            image: imageLink,
            quantity: parseInt(quantity),
            price: parseInt(price),
            productID,
        }
        dispatch(editProduct(newProductUpdate))
        console.log("onUpdate newProductUpdate", newProductUpdate)
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

                            {/* <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input onChange={(e) => setProductID(e.target.value)}
                                            name="productID" placeholder={item.productID}/></td>

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
                                                type="number"
                                                min="0"
                                                onChange={(e) => setPrice(e.target.value)} /></td>
                                        
                                        <td>
                                            <input 
                                            className={classes.smallInput} 
                                            placeholder={item.quantity} 
                                            type="number"
                                            min="0"
                                            onChange={(e) => setQuantity(e.target.value)} /></td>

                                       <td>{item.price * item.quantity}</td> 
                                     <td><button className="btn btn-info" ><i class="fas fa-undo"></i></button></td> 
                                    </tr>
                                </tbody>
                            </table> */}
                            <form className={{ marginTop: "50px" }}>
                                <div className="row">
                                    <div className="form-group col">
                                        <label>Product ID</label>
                                        <input
                                            type="text"
                                            name="productID"
                                            placeholder="Product ID"
                                            className="form-control"
                                            onChange={(e) => setProductID(e.target.value)} />
                                    </div>

                                    <div className="form-group col">
                                        <label>Product Name</label>
                                        <input
                                            type="text"
                                            name="productName"
                                            placeholder="Product Name"
                                            className="form-control"
                                            onChange={(e) => setProductName(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group col">
                                        <label>Image Link</label>
                                        <input
                                            type="text"
                                            name="imageLink"
                                            placeholder="Image Link"
                                            className="form-control"
                                            onChange={(e) => setImageLink(e.target.value)} />
                                    </div>
                                    <div className="form-group col">
                                        <label>Price</label>
                                        <input
                                            type="number"
                                            name="price"
                                            placeholder="Price"
                                            className="form-control"
                                            onChange={(e) => setPrice(e.target.value)} />
                                    </div>

                                    <div className="form-group col">
                                        <label>Quantity</label>
                                        <input
                                            type="number"
                                            name="quantity"
                                            placeholder="Quantity"
                                            className="form-control"
                                            onChange={(e) => setQuantity(e.target.value)} />
                                    </div>

                                </div>
                            </form>

                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-warning" onClick={(e, item) => onUpdate(e, item)} data-dismiss="modal">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
