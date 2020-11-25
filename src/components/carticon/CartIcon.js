import React from 'react'
import './cart-icon.style.scss'
import {ReactComponent as Logo} from '../../assests/shopping-bag.svg'
import {connect} from'react-redux'
import { showCart } from '../../reducers/cart/cartActions';
import { selectCartItemsCount } from '../../reducers/cart/cartSelector';

function CartIcon({ showCart , itemCount}) {
    return (
        <div className='cart-icon' onClick={()=> showCart()}>
            <Logo className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    itemCount : selectCartItemsCount(state)
  });

const mapDispatchToProps = (dispatch) => ({
    showCart : () => dispatch(showCart())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)
