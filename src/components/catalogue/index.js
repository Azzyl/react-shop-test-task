import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CatalogueItem from './CatalogueItem'
import { addItem } from '../../actions/basketActions'
import { toggleCompaniesView } from '../../actions/viewActions'
import { getGoods } from '../../apiSample'

import '../../assets/styles/catalogue.scss'
import classNames from 'classnames'
import { Reorder, GridOn } from '@material-ui/icons'

const Catalogue = props => {
  const goods = getGoods()
  return (
    <>
      <div
        className={classNames('catalogues', { 'catalogues-list': props.listView, 'catalogues-grid': !props.listView })}>
        {goods.map(item =>
          <CatalogueItem
            key={item.id}
            {...item}
          />
        )}
      </div>

      <div
        onClick={() => props.toggleCompaniesView()}
      >{props.listView ? <GridOn
          className='toggle'
        /> :
        <Reorder
          className='toggle'
        />}</div>
    </>
  )
}

export default connect(
  ({ basketReducer, viewReducer }) => {
    return {
      basket: basketReducer.basket,
      listView: viewReducer.listView
    }
  },
  dispatch =>
    bindActionCreators(
      {
        addItem,
        toggleCompaniesView
      },
      dispatch
    ))(Catalogue)
