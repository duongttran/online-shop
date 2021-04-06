import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { editProduct } from '../../store/admin/actions/adminActions'


function Modal(props) {

    const { item } = props

    const [inputValue, setInputValue] = useState({
        name: '',
        image: '',
        quantity: '',
        price: '',
        productID: ''
    })

    useEffect(() => {
        setInputValue({
            name: item.name,
            image: item.image,
            quantity: item.quantity,
            price: item.price,
            productID: item.productID
        })
    }, [item])

    const dispatch = useDispatch()

    const onUpdate = (e) => {
        e.preventDefault()
        dispatch(editProduct(inputValue))
    }

    const onChangeHandler = (e) => {
        e.preventDefault()
        const { value, name } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        })
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
                                            value={inputValue.productID}
                                            className="form-control"
                                            disabled
                                            onChange={onChangeHandler} />
                                    </div>

                                    <div className="form-group col">
                                        <label>Product Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={inputValue.name}
                                            className="form-control"
                                            onChange={onChangeHandler}
                                        />
                                    </div>

                                    <div className="form-group col">
                                        <label>Image Link</label>
                                        <input
                                            type="text"
                                            name="image"
                                            value={inputValue.image}
                                            className="form-control"
                                            onChange={onChangeHandler}
                                        />
                                    </div>
                                    <div className="form-group col">
                                        <label>Price</label>
                                        <input
                                            type="number"
                                            name="price"
                                            value={inputValue.price}
                                            className="form-control"
                                            onChange={onChangeHandler}
                                        />
                                    </div>

                                    <div className="form-group col">
                                        <label>Quantity</label>
                                        <input
                                            type="number"
                                            name="quantity"
                                            value={inputValue.quantity}
                                            className="form-control"
                                            onChange={onChangeHandler}
                                        />
                                    </div>

                                </div>
                            </form>

                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button className="btn btn-warning" data-dismiss="modal" onClick={onUpdate} >Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
