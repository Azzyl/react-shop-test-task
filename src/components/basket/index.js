import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addItem, removeItem, setItemsAmount } from '../../actions/basketActions'
import equal from 'deep-equal'

import { getGood } from '../../apiSample'
import '../../assets/styles/basket.scss'
import {ArrowUpward, ArrowDownward, Delete} from '@material-ui/icons'

class Basket extends Component {

  state = {
    inputValues: this.props.basket
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { basket: prevBasket } = prevProps
    const { basket: newBasket } = this.props
    if (!equal(prevBasket, newBasket)) {
      this.setState({
        ...this.state,
        inputValues: newBasket
      })
    }
  }

  // handleInput = key => e => {
  //   this.setState({
  //     ...this.state,
  //     inputValues: {
  //       ...this.state.inputValues,
  //       [key]: +e.target.value
  //     }
  //   })
  //   this.props.setItemsAmount({ id: key, amount: +this.state.inputValues[key] })
  // }

  render() {
    const { basket } = this.props
    const goods = Object.keys(basket).map(id =>
      getGood({ id })
    )

    const total = goods
      .map(good => good.price * basket[good.id]).length &&
      goods
        .map(good => good.price * basket[good.id])
        .reduce((acc, cur) => acc + cur)

    return (
      <div className='basket'>
        {Object.keys(basket).length ?
          <>
          <div className='basket-header'>
          <span className='basket-header-name'>
            Basket
          </span>
          <div className='basket-header-total'>
            <span className='basket-header-total-label'>Total</span>
            <span className='basket-header-total-value'>{total} $</span>
          </div>
          </div>
          {Object.keys(basket).map(item =>
          <div key={item} className='basket-item'>
            <div className='basket-item-info'>
            <span className='basket-item-info-label'>
              Position name
            </span>
            <span className='basket-item-info-value'>
               {goods.find(good => good.id === item).name}
            </span>
            <span className='basket-item-info-label'>
              Price
            </span>
            <span className='basket-item-info-value'>
              {goods.find(good => good.id === item).price} $
            </span>
            </div>
            <div className='basket-item-control'>
              <div className='basket-item-control-amount'>
              <ArrowUpward
                className='basket-item-control-icon'
                onClick={() => this.props.addItem({ id: item })}
              />
              <span className='basket-item-control-amount-value'>
                {basket[item]}
              </span>
              <ArrowDownward
                className='basket-item-control-icon'
                onClick={() => this.props.removeItem({ id: item, name: goods.find(good => good.id === item).name })}
              />
              </div>
              <div className='basket-item-control-delete'>
              <Delete
                className='basket-item-control-icon'
                onClick={() => this.props.setItemsAmount({ id: item, amount: 0, name: goods.find(good => good.id === item).name })}
              />
              </div>
            </div>
          </div>
        )}</> :
        <span>
          The basket is empty
        </span>
        }
      </div>
    )
  }
}

export default connect(
  ({ basketReducer }) => {
    return {
      basket: basketReducer.basket
    }
  },
  dispatch =>
    bindActionCreators(
      {
        addItem,
        removeItem,
        setItemsAmount
      },
      dispatch
    ))(Basket)
