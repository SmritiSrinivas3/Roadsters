import React from 'react'
import { useState } from 'react'
import './Modal.css'
import ReactDom from 'react-dom'
import { Icon } from '@iconify/react';
import CreateAccount from '../CreateAccount/CreateAccount';
import { Link } from 'react-router-dom';
export default function Modal({ open, onClose }) {

  
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className="overlay">
        <div className='modalContainer'>


          <div className="loginFormTopBanner">
            LOGIN
          </div>
          <form>

            <div id="loginEmail" className='loginInfoEnter'>
              <Icon icon="ic:outline-email" className='loginInfoIcon' color="white" width="24" height="24" />
              EMAIL -ID
            </div>
           
            <input type='email' required='true'></input>

            <br />
            <div id="loginPassword" className='loginInfoEnter'>
              <Icon icon="mdi:password" classname='loginInfoIcon' color="white" width="24" height="24" />
              PASSWORD
            </div>

            <input type='password' required='true' ></input>
            <br/>
            <div className="options">
              <Link >Forgot password?</Link>
              <Link to='../CreateAccount/CreateAccount'>Don't have an account yet?</Link>
            </div>
           
            <button id='loginButtonOnModal' type="submit">LOG IN</button>

          </form>

        </div>
      </div>

    </>,
    document.getElementById('portal')
  )
}
