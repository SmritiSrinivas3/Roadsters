import React from 'react'
import { useState } from 'react'
import './CreateAccount.css'
import ReactDom from 'react-dom'

export default function CreateAccount() {

   
  return ReactDom.createPortal (
    <>
    <div className="createAccountOverlay">
    <div className='createAccountContainer'>
      <div className="createAccountModalTopBanner">
        CREATE ACCOUNT
      </div>
      </div>
    </div>
    
    </>,
     document.getElementById('portal')
  )
}

