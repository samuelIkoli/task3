import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigatingbar() {
  return (
    <div className='navi container'>
      <div className="logos">
        <img src="logo1.png" alt="" />
        <img src="logo2.png" alt="" />
      </div>

      <div className='links'>
        <span className='link'>Home</span>
        <span className='link'>Place to stay</span>
        <span className='link'>NFTs</span>
        <span className='link'>Community</span>
      </div>

      <div className='connectbtn'>
        <span>Connnect wallet</span>
      </div>
    </div>
  )
}

export default Navigatingbar