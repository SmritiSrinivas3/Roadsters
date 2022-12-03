import React from 'react'
import { useState } from 'react'
import './Modal.css'
import ReactDom from 'react-dom'
import { Icon } from '@iconify/react';
export default function Modal({ open, onClose}) {
 
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className="overlay">
        <div className='modalContainer'>

          <form>
            <div className="loginFormTopBanner">
              LOGIN
            </div>
            <div id="loginEmail" className='loginInfoEnter'>
              <Icon icon="ic:outline-email" color="white" width="24" height="24" />
              EMAIL -ID
            </div>
            <br></br>
            <input type='email' required='true'></input>
           
            <br />
            <div id="loginPassword" className='loginInfoEnter'>
              <Icon icon="mdi:password" color="white" width="24" height="24" />
              PASSWORD
            </div>


            <input type='password' required='true' ></input>
            <div className="options">
              <h5>Forgot password?</h5> 
              <h5>Don't have an account yet?</h5>
            </div>
            
            <button id='loginButtonOnModal' type="submit">LOG IN</button>

          </form>

        </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}
