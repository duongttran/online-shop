import React, { useEffect } from 'react'
import classes from './Product.module.css'

import { fetchDataRequest } from '../../store/client/actions/clientActions'
import { useSelector, useDispatch } from 'react-redux'

import { addItem, getDataRequest } from '../../store/client/actions/cartActions'

const Product = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDataRequest())
    dispatch(getDataRequest())
  }, [])

  const productList = useSelector(state => state.cRed.products);

  const displayProduct = () => {
    return productList.map((item, idx) => {
      return (
        <div className="col-4 text-center mb-4">
          <div className={classes.productBox} key={'item' + idx}>
            <h3>{item.name}</h3>
            <img className={classes.productImage} src={item.image} />
            <h5>Price: {item.price}</h5>
            <p>Quantity: {item.quantity}</p>
            <button className="btn btn-danger btn-block" onClick={() => dispatch(addItem(item))}>Add to Cart</button>
          </div>
        </div>
      )
    });
  }

  return (
    <div className="container">
      <div className="row">
        {displayProduct()}
      </div>
    </div>
  )
}

export default Product