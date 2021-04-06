import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

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

                            <form className={{ marginTop: "50px" }}>
                                <div className="row">
                                    <div className="form-group col">
                                        <label>Product ID</label>
                                        <input
                                            type="text"
                                            name="productID"
                                            placeholder={item.productID}
                                            className="form-control"
                                            onChange={(e) => setProductID(e.target.value)} />
                                    </div>

                                    <div className="form-group col">
                                        <label>Product Name</label>
                                        <input
                                            type="text"
                                            name="productName"
                                            placeholder={item.name}
                                            className="form-control"
                                            onChange={(e) => setProductName(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group col">
                                        <label>Image Link</label>
                                        <input
                                            type="text"
                                            name="imageLink"
                                            placeholder={item.image}
                                            className="form-control"
                                            onChange={(e) => setImageLink(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group col">
                                        <label>Price</label>
                                        <input
                                            type="number"
                                            name="price"
                                            placeholder={item.price}
                                            className="form-control"
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group col">
                                        <label>Quantity</label>
                                        <input
                                            type="number"
                                            name="quantity"
                                            placeholder={item.quantity}
                                            className="form-control"
                                            onChange={(e) => setQuantity(e.target.value)}
                                        />
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
