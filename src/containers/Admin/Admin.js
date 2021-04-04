import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseItem, decreaseItem, removeItem } from '../../store/admin/actions/adminActions'

import { fetchDataRequest } from '../../store/client/actions/clientActions'

import Form from './Form'
import Modal from './Modal'


const Admin = (props) => {

  const [editProduct, setEditProduct] = useState([{}])

  const productList = useSelector(state => state.cRed.products);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDataRequest())
  }, [])

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
            <button className="btn btn-warning" onClick={() => setEditProduct(item)} data-toggle="modal" data-target="#exampleModal"><i className="fas fa-pen"></i></button></td>
        </tr>
      )
    })
  }


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


        <Form />
        <Modal item={editProduct} />

      </div>
    </div>
  )

}

export default Admin