import React from 'react'
import {useState} from 'react'
import './Modal.css'
import ReactDom from 'react-dom'
export default function Modal({open, children, onCLose}) {

    if(!open) return null

  return ReactDom.createPortal(
    <>
    <div className="overlay">
      <div className='modalContainer'>
      <button onClick={onCLose}>Close me</button>
      {children}
    </div>
    </div>
    </>,
    document.getElementById('portal') 
  )
}
