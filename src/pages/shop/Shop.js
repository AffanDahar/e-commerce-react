import React, { Component } from 'react'
import ShopData from '../../shop.data'
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

export default class Shop extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             collection : ShopData
        }
    }
    
    render() {
        const {collection} = this.state
        return (
            <div className='shop'>
            {collection.map(({id , ...otherSectionProps}) =>
            (
                <CollectionPreview key={id} {...otherSectionProps}/>
            ) )}
                
            </div>
        )
    }
}
