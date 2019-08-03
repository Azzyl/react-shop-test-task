import consts from '../constants'

export const initBasketState = {
  basket: {},
  itemAdded: false,
  itemRemoved: false,
}

export default (state = initBasketState, action) => {
  switch (action.type) {

    case consts.BASKET_ADD_ITEM: {
      return {
        ...state,
        itemAdded: true,
        goodName: action.payload.name,
        itemRemoved: false,
        basket: {
          ...state.basket,
          [action.payload.id]: (state.basket[action.payload.id] || 0) + 1
        }
      }
    }

    case consts.BASKET_REMOVE_ITEM: {

      let basketNew = {
        ...state.basket,
        [action.payload.id]: state.basket[action.payload.id] - 1
      }

      Object.keys(basketNew).forEach(key => basketNew[key] === 0 && delete basketNew[key])
      return {
        ...state,
        itemAdded: false,
        itemRemoved: !basketNew[action.payload.id],
        goodName: !basketNew[action.payload.id] && action.payload.name,
        basket: basketNew
      }
    }

    case consts.BASKET_SET_ITEMS_AMOUNT: {
      let basketNew = {
        ...state.basket,
        [action.payload.id]: action.payload.amount
      }

      Object.keys(basketNew).forEach(key => basketNew[key] === 0 && delete basketNew[key])
      return {
        ...state,
        itemAdded: false,
        itemRemoved: !basketNew[action.payload.id],
        goodName: !basketNew[action.payload.id] && action.payload.name,
        basket: basketNew
      }
    }

    case consts.RESET_NOTIFICATION_FLAGS: {
      return {
        ...state,
        itemAdded: false,
        itemRemoved: false
      }
    }

    default: return state
  }
}
