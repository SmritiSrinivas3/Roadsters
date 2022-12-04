import React from 'react'
import ReactDom from 'react-dom'
import './CreateAccount.css'
export default function CreateAccountPage() {
  return ReactDom.createPortal(
    <>
      <div className="overlay">
        <div className="modalContainer">
        <div className="createAccountFormTopBanner">
            CREATE ACCOUNT
          </div>
          <form>
            
          </form>
        </div>
      </div>
    </>
    ,document.getElementById('portal')
  )
}
