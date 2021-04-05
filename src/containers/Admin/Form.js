import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewProduct } from '../../store/admin/actions/adminActions'

const Form = () => {
    const [productName, setProductName] = useState("")
    const [imageLink, setImageLink] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [productID, setProductID] = useState("")

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            name: productName,
            image: imageLink,
            price: parseInt(price),
            quantity: parseInt(quantity),
            productID,
        };
        dispatch(addNewProduct(newProduct));
    };

    return (
        <div>
            <h3>Add products to List</h3>
            <div className="container">
                <div className="row">

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

                            <div className="col">
                                <button className="btn btn-primary btn-block" onClick={(e) => onSubmit(e)} style={{ marginTop: "30px" }}>Submit</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
