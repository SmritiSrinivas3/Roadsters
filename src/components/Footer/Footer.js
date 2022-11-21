import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'

function Footer() {
    return (
        <div className='footerContainer'>
            <div className="socialIcons">
                <FaFacebook size={30} color='black' cursor={"pointer"} />
                <FaInstagram size={30} color='black' cursor={"pointer"} />
                <FaLinkedin size={30} color='black' cursor={"pointer"} />
            </div>
          <h3>Made with React</h3>
        </div>
    )
}

export default Footer
