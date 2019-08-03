import consts from '../constants'

const initViewState = {
  listView: true,
  isItemModalOpen: false,
  notifications: []
}

export default (state= initViewState, action) => {
  switch (action.type) {
    case consts.TOGGLE_CATALOGUE_VIEW: {
      return {
        ...state,
        listView: !state.listView
      }
    }

    case consts.TOGGLE_ITEM_MODAL: {
      console.log(action.payload)
      return {
        ...state,
        isItemModalOpen: !state.isItemModalOpen,
        payload: action.payload
      }
    }

    default: return state
  }
}
