import React from 'react'

const MODAL_STYLES = {
  position: 'fixed',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: "#fff",
  padding: "50px",
  zIndex: 1200,
  border: '1px solid grey',
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column'
}

const ReviewModal = ({ open, children,  onClose}) => {

  if (!open) {return null}
  return (
    <div style={MODAL_STYLES} className='modal-popup'>
      {children}
      <button onClick ={onClose} className='green btn btn-primary'>Review</button>
    </div>
  )
}

export default ReviewModal