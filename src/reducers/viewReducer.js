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
      return {
        ...state,
        isItemModalOpen: !state.isItemModalOpen,
        payload: action.payload
      }
    }

    case consts.OPEN_ITEM_INFO: {
      return {
        ...state,
        id: action.payload
      }
    }

    default: return state
  }
}
