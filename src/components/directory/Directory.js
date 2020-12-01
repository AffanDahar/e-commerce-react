import React from 'react'

  import './directorydata.style.scss'
import MenuItem from '../menuitem/menuitems';
import {connect} from 'react-redux'
import {  selectDirectorySections } from '../../reducers/directory/directorySelect';
import { createStructuredSelector } from 'reselect';
const Directory = ({sections}) => {

  console.log(sections)
  return (
    <div className='directory-menu'>
      {sections.map(({id , ...otherSectionProps}) => (
     <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector ({
  sections : selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
