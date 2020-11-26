import React from 'react'
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import { selectCollectionsForPreview } from '../../reducers/shop/shopSelect';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import './collection-overview.style.scss'
const CollectionOverview = ({collection}) => {
    return (
        <div className='collection-overview'>
            {collection.map(({id , ...otherSectionProps}) =>
            (
                <CollectionPreview key={id} {...otherSectionProps}/>
            ) )}
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    collection : selectCollectionsForPreview
})



export default connect(mapStateToProps)(CollectionOverview)
