import React from 'react'
import twitter from '../images/twitter-icon.svg'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="service-details">
        <div className='service-details-header'>
          <h4>Services</h4>
          <p>Email Marketing</p>
          <p>Campaigns</p>
          <p>Branding</p>
          <p>Offline</p>
        </div>
        <div className='service-details-header'>
          <h4>About</h4>
          <p>Our Story</p>
          <p>Benefits</p>
          <p>Team</p>
          <p>Career</p>
        </div>
        <div className='service-details-header'>
          <h4>Help</h4>
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
          <img src={twitter}/>
          <img src={facebook}/>
          <img src={instagram}/>
        </div>
      </div>
    </div>
  )
}

export default Footer;