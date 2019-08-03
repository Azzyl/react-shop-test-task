import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { bindActionCreators } from 'redux'
import { resetNotificationFlags } from '../../actions/basketActions'

import '../../assets/styles/notification.scss'

const Notifications = props => {

  if (props.itemAdded || props.itemRemoved) {

    setTimeout(() => props.resetNotificationFlags(), 2000)

    return (
      <div className={classNames('notification', {
        'notification-added': props.itemAdded,
        'notification-removed': props.itemRemoved
      })}
           onClick={() => props.resetNotificationFlags()}
      >
        <span className={classNames('notification-text', { 'added': props.itemAdded, 'removed': props.itemRemoved })}>
        {props.goodName} was {props.itemAdded ? 'added to basket' : 'removed from basket'}
        </span>
      </div>)

  } else
    return <div>
    </div>
}

export default connect(
  ({ basketReducer }) => {
    return {
      itemRemoved: basketReducer.itemRemoved,
      itemAdded: basketReducer.itemAdded,
      goodName: basketReducer.goodName
    }
  },
  dispatch =>
    bindActionCreators({
        resetNotificationFlags
      },
      dispatch
    ))(Notifications)
