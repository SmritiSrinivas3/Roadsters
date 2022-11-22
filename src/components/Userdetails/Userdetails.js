import React from 'react'
import './Userdetails.css'
import profileImg from './profile.png'

export default function Userdetails() {
  return (
    <div className='userDetailsContainer'>
      <h1>My Details</h1>
      <h2>Personal Information</h2>
      <hr/>
     <img src={profileImg}></img>
     <form>

        <label for = "userName"></label>
        NAME <input type="text" class="inputTextField" name='userName'></input>
        
        <label for="birthDate"></label>
        BIRTHDATE <input type="date" name="birthDate"></input>

       <label for="phoneNumber"></label>
       PHONE NUMBER <input type="number" name="phoneNumber"></input>

       <label for = "email"></label>
       E-MAIL <input type="email" name="email"></input>


     </form>
    </div>
  )
}
