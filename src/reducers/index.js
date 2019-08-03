import { combineReducers } from 'redux'
import basketReducer from './basketReducer'
import viewReducer from './viewReducer'

export default combineReducers({
  basketReducer,
  viewReducer
})
