import './homepage.css';
import { BsSearch } from 'react-icons/bs';
import React, { useState } from 'react';
import Topnavbar from '../components/Topnavbar/Topnavbar';
import Modal from '../components/Login/Modal'
import ItemCard from '../components/ItemCard/ItemCard';

import Homeimg from '../assets/homeimage.png';

function Home() {

    const [isOpen, setOpen] = useState(false) // to open/close the login modal


    return (
        <div className="home" >
            <div className="lt-box" >
                <Topnavbar />
                
            </div>
            <h1>WELCOME TO ROADSTERS</h1>
            <p className='heroPara'>To sustainably make the Pleasure and Benefits of Sport accessible to the Many
</p>
<button id='homeExplore'>EXPLORE</button>
            <img src={Homeimg} className='homeimg'/>
           
            <div className='rt-box' >
                <div className='small-box'>
                    <div className='search'>
                        <input type="text" placeholder="Search.." /> <h3 className='search-icon'><BsSearch /></h3>
                    </div>

                    <button id='loginButtonOnHomepage' onClick={() => setOpen(true)}>Log In</button>
                    <Modal open={isOpen} onClose={() => setOpen(false)}>
                        
                    </Modal>
                </div>
                
            </div>
            <p>TRENDING</p>
            <div className="itemCardContainer">
            <ItemCard/>
            </div>
           
        </div>);
}

export default Home;