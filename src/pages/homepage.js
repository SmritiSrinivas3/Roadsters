import './homepage.css';
import { BsSearch } from 'react-icons/bs';
import React, { useState } from 'react';
import Topnavbar from '../components/Topnavbar/Topnavbar';
import Modal from '../components/Login/Modal';
import Homeimg from '../assets/homeimage.png';

function Home() {

    const [isOpen, setOpen] = useState(false) // to open/close the login modal


    return (
        <div className="home" >
            <div className="lt-box" >
                <Topnavbar />
                
            </div>
            <img src={Homeimg} className='homeimg'/>
            <div className='rt-box' >
                <div className='small-box'>
                    <div className='search'>
                        <input type="text" placeholder="Search.." /> <h3 className='search-icon'><BsSearch /></h3>
                    </div>

                    <button id='loginButtonOnHomepage' onClick={() => setOpen(true)}>Log In</button>
                    <Modal open={isOpen} onCLose={() => setOpen(false)}>
                        text
                    </Modal>

                </div>
                
            </div>
        </div>);
}

export default Home;