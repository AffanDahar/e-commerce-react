import React from 'react'
import './checkout-items.style.scss'
import {connect} from 'react-redux'
import { clearItem, addToCart, removeFromCart } from '../../reducers/cart/cartActions';
const CheckoutItems = ({cartItem , clearItem ,  addToCart , removeFromCart}) => {
    const {imageUrl , name , price , quantity} = cartItem
    return (
        <div className='checkout-item'>
        <div className='image-container'>
         <img src={imageUrl} alt=''/>
        </div>
        <div className='name'>{name}</div>
        <div className='quantity'>
        <div className='arrow' onClick={() => removeFromCart(cartItem)}> &#10094;</div>
         <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addToCart(cartItem)}>&#10095;</div>
        </div>
        <div className='price'>$ {price}</div>
        <div className='remove-button' onClick={()=> clearItem(cartItem)}>&#10006;</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    clearItem : item => dispatch(clearItem(item)),
    addToCart : item => dispatch(addToCart(item)),
    removeFromCart : item => dispatch(removeFromCart(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItems)
