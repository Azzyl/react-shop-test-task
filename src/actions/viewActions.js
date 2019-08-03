import consts from '../constants'

export const toggleCompaniesView = () => {
  return {
    type: consts.TOGGLE_CATALOGUE_VIEW
  }
}

export const toggleItemModal= (payload) => {
  return {
    type: consts.TOGGLE_ITEM_MODAL,
    payload
  }
}

export const openItemInfo = (payload) => {
  return {
    type: consts.OPEN_ITEM_INFO,
    payload
  }
}
