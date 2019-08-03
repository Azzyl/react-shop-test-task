import React from 'react'
import ReactModal from 'react-modal'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleItemModal } from '../../actions/viewActions'

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

// ReactModal.setAppElement('#root')

const CustomModal = props => {
// class CustomModal extends React.Component {
  const { payload, isItemModalOpen, toggleItemModal } = props
  console.log('----from props', payload)
  const { name, price, description, img } = payload

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
    </ReactModal>
  )
}

export default connect(
  ({ viewReducer }) => {
    console.log('view', viewReducer)
    return {
      isItemModalOpen: viewReducer.isItemModalOpen,
      payload: viewReducer.payload
    }
  },
  null,
  // dispatch =>
  //   bindActionCreators(
  //     {
  //       toggleItemModal
  //     },
  //     dispatch)
)(CustomModal)
