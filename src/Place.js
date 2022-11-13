import React from 'react'
import Footer from './Footer';
import Navigatingbar from './Navigatingbar'
import { Nav, Navbar } from 'react-bootstrap';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2'

function Place() {

  const pics = ['f5.png', 'f6.png', 'f7.png', 'f8.png', 'f1.png', 'f2.png', 'f3.png', 'f4.png', 'f9.png', 'f10.png', 'f11.png', 'f12.png', 'f13.png', 'f14.png', 'f15.png', 'f16.png'];

  return (
    <div className='home'>

      <Navigatingbar />

      <Navbar expand='md' variant='light' sticky='top' className='navi container container-fluid mt-4 fixed-top navbar-collapse justify-content-between mb-1'>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className='container container-fluid mt-4 navbar-collapse justify-content-between mb-1'>
            <Nav.Link href='#' className="link">Restaurant</Nav.Link>
            <Nav.Link href='#' className="link">Cottage</Nav.Link>
            <Nav.Link href='#' className="link">Castle</Nav.Link>
            <Nav.Link href='#' className="link">Fantasy city</Nav.Link>
            <Nav.Link href='#' className="link">Beach</Nav.Link>
            <Nav.Link href='#' className="link">Cabins</Nav.Link>
            <Nav.Link href='#' className="link">Off-grid</Nav.Link>
            <Nav.Link href='#' className="link">Farm</Nav.Link>
            <Nav.Link href='#' className="border">location <HiAdjustmentsHorizontal /></Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>


      <div className="container text-center">
        <div className="row space d-flex mt-3 justify-content-between">
          {pics.map(pic => {
            return (
              <div key={pic} className="col-12 col-md-6 col-lg-3 border pt-3 mb-3">
                <a href={`/${pic}`}><img src={pic} alt="" className='img-fluid resize' /></a>
                <div className="info">
                  <div className='d-flex justify-content-between'>
                    <div>Desert King</div>
                    <div>1MBPT per night</div>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <div>2345km away</div>
                    <div>available for two weeks stay</div>
                  </div>
                  <div className='d-flex justify-content-start pb-2'>
                    <img src="star.png" alt="" className='star' />
                    <img src="star.png" alt="" className='star' />
                    <img src="star.png" alt="" className='star' />
                    <img src="star.png" alt="" className='star' />
                    <img src="star.png" alt="" className='star' />
                  </div>
                </div>
              </div>)
          })}
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Place