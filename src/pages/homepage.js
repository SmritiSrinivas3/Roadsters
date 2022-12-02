import './homepage.css';
import {BsSearch} from 'react-icons/bs';
import React from 'react';
import Topnavbar from '../components/Topnavbar/Topnavbar';
import Profileicon from './profile-home.jpeg'

function Home() {
    return (
    <div className="home" > 
    <div className="lt-box" > 
    <Topnavbar/> 
    </div> 
    <div className='rt-box' >
        <div className='small-box'>
    <div className='search'> 
        <input type="text" placeholder="Search.." /> <h3 className='search-icon'><BsSearch/></h3>
    </div> 
    <a className='profile-icon'><img src={Profileicon}/></a>
    </div>
    </div> 
    </div>);
}

export default Home;