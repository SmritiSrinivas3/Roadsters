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
          console.log(user.id)
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
      <img src={profileImg}></img>
      <div className='Info'>
      {data.map((entry)=>{
        <h2 id={entry.id}>{entry.data}</h2>
      })}
      </div>
    </div>
  )
}