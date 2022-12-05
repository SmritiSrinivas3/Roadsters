import React from 'react'
import {BsInstagram,BsFacebook,BsTwitter} from 'react-icons/bs';
import './footer.css';
function Footer() {
  return (
    <div className='footer'>
      <div className='About-us'>
        <ul className='list'>
            <li><h3>Information</h3></li>
            <li>About Us</li>
            <li>Our Story</li>
            <li>FAQ</li>
            <li>Terms and Conditions</li>
            <li>Email</li>
            <li>Blog</li>
        </ul>
      </div>
      <h1 className='Logo'>Roadsters</h1>
      <div className='contact'>
        <ul className='list'>
            <li><h3>Contact</h3></li>
            <li>Contact no : +9454654545</li>
            <li>Whatsapp no : +9454654545</li>
            <li>support@abc.com</li>
            <li><div className='social'><BsInstagram/><BsFacebook/><BsTwitter/></div></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer