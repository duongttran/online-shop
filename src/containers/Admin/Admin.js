import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseItem, decreaseItem, removeItem, addNewProduct } from '../../store/admin/actions/adminActions'

import { fetchDataRequest } from '../../store/client/actions/clientActions'

import Modal from './Modal'


const Admin = (props) => {

  const [productName, setProductName] = useState("")
  const [imageLink, setImageLink] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  const [productID, setProductID] = useState("")

  const [editProduct, setEditProduct] = useState({})

  const productList = useSelector(state => state.cRed.products);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDataRequest())
  }, [])

  const renderModal = () => {

    return <Modal />
  }

  const renderProductList = () => {
    return productList.map((item, idx) => {
      return (
        <tr key={idx}>
          <td>{(item.productID)}</td>
          <td>{item.name}</td>
          <td><img src={item.image} alt={item.name} style={{ maxHeight: "50px" }} /></td>
          <td>{item.price}</td>
          <td>
            <button
              className="btn btn-success"
              disabled={item.quantity === 1 ? true : false} onClick={() => dispatch(decreaseItem(item))}>-</button>
            {item.quantity}
            <button className="btn btn-success" onClick={() => dispatch(increaseItem(item))}>+</button>
          </td>
          <td>{item.price * item.quantity}</td>
          <td>
            <button className="btn btn-danger" onClick={() => dispatch(removeItem(item))}>x</button>
            <button className="btn btn-warning" onClick={renderModal(item)}><i className="fas fa-pen"></i></button></td>
        </tr>
      )
    })
  }



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

    <div className="container">
      <div className="row mt-5 mb-5">

        <h1 className="">Admin page</h1>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {renderProductList()}
          </tbody>
        </table>

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
            {/* <button className="btn btn-primary" onClick={(e) => onSubmit(e)}>Submit</button> */}
            <button className="btn btn-primary" onClick={(e) => onSubmit(e)}>Submit</button>
            {renderModal()}
          </div>
        </form>




      </div>
    </div>
  )

}

export default Admin