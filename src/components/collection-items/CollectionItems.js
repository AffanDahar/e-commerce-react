import React from 'react'
import './collection-items.style.scss'
import {connect} from'react-redux'
import CustomButton from '../custombutton/CustomButton';
import { addToCart } from '../../reducers/cart/cartActions';
const CollectionItems = ({item , addToCart}) => {
    const {imageUrl , name , price } = item
    return (
        <div className='collection-item'>
        <div 
        className='image'
        style={{ backgroundImage : `url(${imageUrl})`}}/>
            <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={()=> addToCart(item)}>Add to cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>  ({
    addToCart : (item) => dispatch(addToCart(item))
})

export default connect(null,mapDispatchToProps)(CollectionItems)
