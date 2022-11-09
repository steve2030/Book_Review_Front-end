import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

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

      </div>
      <div className='div-info'>
        <div className='footer-trc'>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className='footer-icons'>
          
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>

        </div>
      </div>
    </div>

}

export default Footer;