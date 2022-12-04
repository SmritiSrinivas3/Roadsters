import React, { useEffect, useState } from 'react'
import { db } from '../../utils/firebase'
import { getDocs, collection } from 'firebase/firestore'
import './Userdetails.css'
import profileImg from './profile.png'


export default function Userdetails() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        let userData = []
        const userDetailsFirebase = await getDocs(collection(db, 'userDetails'))
        userDetailsFirebase.forEach((user) => {
          userData.push({id: user.id, ...user.data()})
        })
        setData(userData)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])


  return (
    <div className='userDetailsContainer'>
      <h1>My Details</h1>
      <h2>Personal Information</h2>
      <hr />
      <br/>
      <br/>
      <img src={profileImg}></img>
      <div className='Info'>
      {data.map((entry)=>(
        <div>
        <h4 id={entry.id}><b>Name:</b>   {entry.Name}</h4> 
        <h4 id={entry.id}> <b>Email: </b>   {entry.Email}</h4>
        <h4 id={entry.id}> <b>Phone number:</b>    {entry.phoneNumber}</h4>
        </div> 
      ))}
      
      </div>
    </div>
  )
}