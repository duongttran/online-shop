import React, { useEffect } from 'react'
import classes from './Product.module.css'

import { fetchDataRequest } from '../../store/client/actions/clientActions'
import { useSelector, useDispatch } from 'react-redux'

import { addItem, getDataRequest } from '../../store/client/actions/cartActions'
import Spinner from '../../components/Spinner/Spinner'



const Product = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDataRequest())
    dispatch(getDataRequest())
  }, [])

  const productList = useSelector(state => state.cRed.products);
  const loadingProduct = useSelector(state => state.cRed.loading);
  const loadingCart = useSelector(state => state.cartReducers.loading)
  console.log(loadingCart)

  const displayProduct = () => {
    return productList.map((item, idx) => {
      return (
        <div className="col-4 text-center mb-4" key={'item' + idx}>
          <div className={classes.productBox} >
            <h3>{item.name}</h3>
            <img className={classes.productImage} src={item.image} alt={item.name} />
            <h5>Price: {item.price}</h5>
            <p>Quantity: {item.quantity}</p>
            <button
              className="btn btn-danger btn-block"
              onClick={() => dispatch(addItem(item))}
              disabled={loadingCart}>


              <span>{loadingCart ? "Adding..." : "Add To Cart"}</span>

            </button>
          </div>
        </div>
      )
    });
  }

  return (
    <div className="container">
      <div className="row">
        {!loadingProduct && !loadingCart ? displayProduct() : <Spinner />}

      </div>
    </div>
  )

}

export default Product