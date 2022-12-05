import React, { useEffect, useState } from 'react'
import { db } from '../../utils/firebase'
import {collection, where, query, onSnapshot, docs, doc} from 'firebase/firestore'
import './Userdetails.css'




export default function Userdetails(userEmail) {

  const userColRef = collection(db,'userDetails')
  const [data, setData] = useState([{Name : "LOADING..." , id: "initial"}])
  const loginQuery = query(userColRef, where("Email", "==", userEmail))



  useEffect(
    () => 
    onSnapshot(loginQuery, (snapshot)=>{
 setData(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))

    })    
  , [])


  return (
    <div className='userDetailsContainer'>
      <h1>My Details</h1>
      <h2>Personal Information</h2>
      <hr />
      <br />
      <br />
      {data.map((entry) => (
        <div>
          <img src={entry.profileImg}></img>
          <div className='Info'>

            <h4 id={entry.id}><b>Name:</b>   {entry.Name}</h4>
            <h4 id={entry.id}> <b>Email: </b>   {entry.Email}</h4>
            <h4 id={entry.id}> <b>Phone number:</b>    {entry.phoneNumber}</h4>
          </div> 
          </div>
      ))}

        
    </div>
  )
}