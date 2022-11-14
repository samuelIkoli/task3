import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Navigatingbar() {

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <Navbar className='navi container container-fluid mt-4 fixed-top navbar-collapse justify-content-between mb-1' expand='md' variant='light' sticky='top'>
      <Navbar.Brand className="point">
        <img src="logo1.png" alt="" />
        <img src="logo2.png" alt="" />
      </Navbar.Brand>

      <Navbar.Toggle />

      <div className='links'>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/" className='text-decoration-none text-dark link'>Home</Nav.Link>
            <Nav.Link href="/place" className='text-decoration-none text-dark link' target="_blank" rel="noopener noreferrer">Place to stay</Nav.Link>
            <Nav.Link href="https://mintgarden.io/collections/zuri-african-techies-col1ye8mw4jl5gzmwzay40he96mm93fspfc8ka87q44cqtgjn8rrv65st5kt94" className='text-decoration-none text-dark link' target="_blank" rel="noopener noreferrer">NFTs</Nav.Link>
            <Nav.Link href="https://twitter.com/hnginternship?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className='text-decoration-none text-dark link' target="_blank" rel="noopener noreferrer">Community</Nav.Link>
          </Nav>
        </ Navbar.Collapse>
      </div>
      <div>
        <Navbar.Collapse>
          <Button className="me-2 mb-2 connectbtn" onClick={() => handleShow('sm-down')}>
            Connect wallet
          </Button>
        </ Navbar.Collapse>
      </div>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body className='wall'>
          <p>Choose your preferred wallet:</p>
          <a href="https://flutterwave.com/us/">
            <img src="wall1.png" alt="" className='wall pb-2 img-fluid' />
          </a>
          <a href="https://paystack.com/">
            <img src="wall2.png" alt="" className='wall img-fluid' />
          </a>
        </Modal.Body>
      </Modal>
    </Navbar>
  )
}

export default Navigatingbar