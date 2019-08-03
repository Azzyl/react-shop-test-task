import React from 'react'
import ReactModal from 'react-modal'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleItemModal, openItemInfo } from '../../actions/viewActions'
import { push } from 'connected-react-router'

import '../../assets/styles/modal.scss'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '45vw',
    height: '35vw'
  }
}

ReactModal.setAppElement('#root')

const CustomModal = props => {
  const { payload, isItemModalOpen, toggleItemModal, openItemInfo, openItemPage } = props
  if (payload)
    var { name, price, description, img, id } = payload

  return (
    <ReactModal
      isOpen={isItemModalOpen}
      onRequestClose={() => toggleItemModal()}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className='modal'>
        <span className='modal-name'>
          {name}
        </span>
        <div className='modal-image'>
          <img src={img} alt={'foodImg'}/>
        </div>
        <span className='modal-price'>
          Price: {price} $
        </span>
        <span className='modal-description'>
          {description}
        </span>
      </div>
      <div className='modal-button-container'>
        <button onClick={() => {
          toggleItemModal()
          openItemInfo(id)
          openItemPage()
        }}
                className='modal-button'
        >
          Open item info
        </button>
      </div>
    </ReactModal>
  )
}

export default connect(
  ({ viewReducer }) => {
    return {
      isItemModalOpen: viewReducer.isItemModalOpen,
      payload: viewReducer.payload
    }
  },
  dispatch =>
    bindActionCreators(
      {
        openItemInfo,
        toggleItemModal,
        openItemPage: () => push('/item/')
      },
      dispatch)
)(CustomModal)
