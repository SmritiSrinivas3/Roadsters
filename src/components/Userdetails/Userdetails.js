import React from 'react'

import './Userdetails.css'
import profileImg from './profile.png'

export default function Userdetails() {
  return (
    <div className='userDetailsContainer'>

      <h1>My Details</h1>
      <h2>Personal Information</h2>
      <hr />
      <img src={profileImg}></img>


      <div className='Info'>

        <label for="userName"></label>
        NAME 

        <label for="birthDate"></label>
        BIRTHDATE 

        <label for="phoneNumber"></label>
        PHONE NUMBER 

        <label for="email"></label>
        E-MAIL 


      </div>

    </div>
  )
}
