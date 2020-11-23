import React from 'react'
import './collection-preview.style.scss'

import CollectionItems from '../collection-items/CollectionItems';

const CollectionPreview = ({title , items}) => {
    return (
        <div className='collection-preview'>
           <h1 className='title'>{title}</h1>
        <div className='preview'>
        {items.filter((item, i)=> i <4 ).map(({id , ...otherSectionProps}) =>(
            <CollectionItems key={id} {...otherSectionProps} />
        ))}
        </div>
            
        </div>
    )
}

export default CollectionPreview
