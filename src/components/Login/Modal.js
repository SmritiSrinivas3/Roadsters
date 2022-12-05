import React from 'react'
import { useState } from 'react'
import './Modal.css'
import ReactDom from 'react-dom'
import { Icon } from '@iconify/react';
import CreateAccount from '../CreateAccount/CreateAccount';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import Userdetails from '../Userdetails/Userdetails';
export default function Modal({ open, onClose}) {  

  const[error, setError] = useState(false)
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const navigate = useNavigate()
 



const handleLogin = (e)=>{
  e.preventDefault()
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate('/profile')
    
  })
  .catch((error) => {
    setError(true)
  });
}



  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className="overlay">
        <div className='modalContainer'>


          <div className="loginFormTopBanner">
            LOGIN
          </div>
          <form onSubmit={handleLogin}>

            <div id="loginEmail" className='loginInfoEnter'>
              <Icon icon="ic:outline-email" className='loginInfoIcon' color="white" width="24" height="24" />
              EMAIL -ID
            </div>
           
            <input type='email' required='true' onChange={(e)=>setEmail(e.target.value)}></input>

            <br />
            <div id="loginPassword" className='loginInfoEnter'>
              <Icon icon="mdi:password" classname='loginInfoIcon' color="white" width="24" height="24" />
              PASSWORD
            </div>

            <input type='password' required='true' onChange={(e)=>setPassword(e.target.value)}></input>
            <br/>
            <div className="options">
              <Link >Forgot password?</Link>
              <Link to='../CreateAccount/CreateAccount'>Don't have an account yet?</Link>
            </div>
           
            <button id='loginButtonOnModal' type="submit">LOG IN</button>
           {error && <span> Wrong email or password!</span>}
          </form>

        </div>
      </div>

    </>,
    document.getElementById('portal')
  )
}

