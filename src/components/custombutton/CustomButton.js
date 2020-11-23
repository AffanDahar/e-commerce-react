import React from 'react'
import './custombutton.style.scss'
const CustomButton = ({children ,...otherProps}) => {
    return (
        
            <button className='custom-button' {...otherProps}>
              {children}
            </button>
        
    )
}

export default CustomButton
