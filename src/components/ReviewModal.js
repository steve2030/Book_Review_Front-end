import React from 'react'

const MODAL_STYLES = {
  position: 'fixed',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: "#fff",
  padding: "50px",
  zIndex: 1000,
  border: '1px solid grey',
  borderRadius: '2px'
}

const ReviewModal = ({ open, children,  onClose}) => {

  if (!open) {return null}
  return (
    <div style={MODAL_STYLES}>
      {children}
      <button onClick ={onClose} className='green book-btn'>Submit</button>
    </div>
  )
}

export default ReviewModal