import React from 'react'
import './checkout.style.scss'
import {connect} from 'react-redux'
import CheckoutItems from '../../components/checkoutitem/CheckoutItems';
import { selectCartItems, selectCartTotal } from '../../reducers/cart/cartSelector';


const Checkout = ({cartItems , total}) => {
    return (
        <div className='checkout-page'>
        <div className='checkout-header'>
        <div className='header-block'>
            <span>Product</span>
        </div>
        <div className='header-block'>
            <span>Name</span>
        </div>
        <div className='header-block'>
            <span>Quantity</span>
        </div>
        <div className='header-block'>
            <span>Price</span>
        </div>
        <div className='header-block'>
            <span>Remove</span>
        </div>

        </div>
          {cartItems.map(cartItem => (
              <CheckoutItems key={cartItem.id} cartItem={cartItem}/>
          ))}

          <div className='total'>
         {total}
          </div>
            
        </div>
    )
}


const   mapStateToProps = (state) => ({
    cartItems : selectCartItems(state),
    total : selectCartTotal(state)
})
export default connect(mapStateToProps)(Checkout)
