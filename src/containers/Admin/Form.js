import React, { useState, useEffect } from 'react'
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
            <h3>Add Product to List</h3>
            <form>
                <div className="form-group">
                    <label>Product Name</label>
                    <input
                        type="text"
                        name="productName"
                        placeholder="Product Name"
                        onChange={(e) => setProductName(e.target.value)} />
                    <input
                        type="text"
                        name="imageLink"
                        placeholder="Image Link"
                        onChange={(e) => setImageLink(e.target.value)} />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        onChange={(e) => setPrice(e.target.value)} />
                    <input
                        type="number"
                        name="quantity"
                        placeholder="Quantity"
                        onChange={(e) => setQuantity(e.target.value)} />
                    <input
                        type="text"
                        name="productID"
                        placeholder="Product ID"
                        onChange={(e) => setProductID(e.target.value)} />

                    <button className="btn btn-primary" onClick={(e) => onSubmit(e)}>Submit</button>

                </div>
            </form>




        </div>
    )
}

export default Form
