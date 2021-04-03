import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseItem, decreaseItem } from '../../store/admin/actions/adminActions'

const Admin = (props) => {

  const productList = useSelector(state => state.cRed.products);
  const dispatch = useDispatch()

  const renderCart = () => {
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
            <button className="btn btn-danger">x</button>
            <button className="btn btn-warning"><i class="fas fa-pen"></i></button></td>

        </tr>
      )
    })
  }

  return (
    <div className="container">
      <div className="row">
        Admin page
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
            {renderCart()}
          </tbody>
        </table>

        <h3>Edit Product List</h3>
        <form>
          <input type="text" name="id" />
        </form>
      </div>
    </div>
  )

}

export default Admin