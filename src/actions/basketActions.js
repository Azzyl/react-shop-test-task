import consts from '../constants'

export const addItem = (payload) => {
  return dispatch => {
    dispatch({
      type: consts.BASKET_ADD_ITEM,
      payload
    })
  }
}

export const removeItem = (payload) => {
  return dispatch => {
    dispatch({
      type: consts.BASKET_REMOVE_ITEM,
      payload
    })
  }
}

export const setItemsAmount = (payload) => {
  return dispatch => {
    dispatch({
      type: consts.BASKET_SET_ITEMS_AMOUNT,
      payload
    })
  }
}

export const resetNotificationFlags = (payload) => {
  return dispatch => {
    dispatch({
      type: consts.RESET_NOTIFICATION_FLAGS,
      payload
    })
  }
}
