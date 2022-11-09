import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="service-details">
        <div className='service-details-header'>
          <h6>Services</h6>
          <p>Email Marketing</p>
          <p>Campaigns</p>
          <p>Branding</p>
          <p>Offline</p>
        </div>
        <div className='service-details-header'>
          <h6>About</h6>
          <p>Our Story</p>
          <p>Benefits</p>
          <p>Team</p>
          <p>Career</p>
        </div>
        <div className='service-details-header'>
          <h6>Help</h6>
          <p>FAQs</p>
          <p>Contact Us</p>
        </div>
​
      </div>
      <div className='div-info'>
        <div className='footer-trc'>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className='footer-icons'>
        </div>
      </div>
    </div>
  )
}

export default Footer;