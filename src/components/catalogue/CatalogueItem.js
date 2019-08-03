import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../actions/basketActions'
import { toggleItemModal } from '../../actions/viewActions'
import { bindActionCreators } from 'redux'

import classNames from 'classnames'

const CatalogueItem = props => {

    const { name, img, price, description, addItem, toggleItemModal, id, listView } = props
    return (
      <>
        <div className={classNames({ 'catalogues-list-item': listView, 'catalogues-grid-item': !listView })}>
        <div
          onClick={() => toggleItemModal({name,price,description,img})}
          className={classNames({ 'catalogues-list-item-inner': listView, 'catalogues-grid-item-inner': !listView })}
        >
          <div className={classNames({'catalogues-image-list': listView, 'catalogues-image-grid': !listView})}>
            <img src={img} alt={'beerImage'}/>
          </div>
            <div className={`catalogues-${listView?'list':'grid'}-item-field-block`}>
              <span className='catalogues-grid-item-field-label'>
                Name
              </span>
              <span className='catalogues-grid-item-field-value'>
                {name}
              </span>
            </div>
          <div className='catalogues-grid-item-field-block'>
              <span className='catalogues-grid-item-field-label'>
                Price
              </span>
              <span className='catalogues-grid-item-field-value'>
                {price} $
              </span>
            </div>
        </div>
          <button
            onClick={() => addItem({ id, name })}
            className='catalogues-button'
          >Add to basket
          </button>
        </div>

      </>
    )
}

export default connect(
  ({ viewReducer }) => {
    return {
      listView: viewReducer.listView
    }
  },
  dispatch =>
    bindActionCreators(
      {
        addItem,
        toggleItemModal
      },
      dispatch)
)(CatalogueItem)

