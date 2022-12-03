import React,{ useState } from 'react';
import './MyDetails.css';
import Avatar from '../../assets/profile-home1.png';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
 function MyDetails() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className='mydetailsContainer'>
      <h1> My details</h1>
      <h2>Personal Information</h2>
      <hr/>
      <img src={Avatar}/>
      <form>
      <label>
      Name
      <input type="text" name="name" />
      </label>
      <label>
      Birth Date
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      </label>
      <label>
      Phone Number
      <input type="text" name="phone" />
      </label>
      <label>
      Email Address
      <input type="text" name="email" />
      </label>
      <input type='submit' className='submit' value='SAVE'/>
</form>
    </div>
  )
}

export default MyDetails;