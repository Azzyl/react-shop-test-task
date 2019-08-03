import React from 'react'
import { connect } from 'react-redux'
import { getGood } from '../../apiSample'

import '../../assets/styles/itemInfo.scss'
import { bindActionCreators } from 'redux'
import { addItem } from '../../actions/basketActions'

const ItemInfo = props => {
  const { id, addItem } = props
  const item = getGood({ id })
  return (<div className='item'>
    <div className='item-meta'>
    <span className='item-label'>
      Name
    </span>
      <span className='item-value'>
      {item.name}
    </span>
      <span className='item-label'>
      Price
    </span>
      <span className='item-value'>
      {item.price} $
    </span>
      <span className='item-label'>
      Description
    </span>
      <span className='item-value'>
      {item.description}
    </span>
      <button
        onClick={() => addItem({id, name: item.name})}
        className='item-button'
      >Add item</button>
    </div>
    <div className='item-image'>
      <img src={item.img}/>
    </div>
  </div>)
}

export default connect(
  ({ viewReducer }) => {
    return {
      id: viewReducer.id
    }
  }
  ,
  dispatch =>
    bindActionCreators({
        addItem
      }, dispatch
    )
)(ItemInfo)
