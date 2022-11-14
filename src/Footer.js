import React from 'react'

function Footer() {
  return (
    <div className=''>

      <div className='blackground text-center container-fluid d-flex justify-content-center'>

        <div className="container row pt-5">
          <div className="col-12 col-md-6 col-lg-3 text-light">
            <div className=''>
              <a href="https://www.facebook.com/"><img src="flogo.png" alt="" className="img-fluid text-decoration-none" /></a>
            </div>
            <div className='mt-5'>
              <a href="https://www.facebook.com/"><img src="fb.png" alt="" className="img-fluid me-4 text-decoration-none" /></a>
              <a href="https://www.instagram.com/"><img src="ig.png" alt="" className="img-fluid me-4 text-decoration-none" /></a>
              <a href="https://twitter.com/hnginternship?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src="twitter.png" alt="" className="img-fluid text-decoration-none" /></a>
            </div>
            <div className='mt-5'>
              <img src="cr.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-light">
            <p className='bold'>Community</p>
            <a href="https://www.facebook.com/" className='text-decoration-none text-light'><p>NFT</p></a>
            <a href="https://www.facebook.com/" className='text-decoration-none text-light'><p>Tokens</p></a>
            <a href="https://www.facebook.com/" className='text-decoration-none text-light'><p>Landlords</p></a>
            <a href="https://www.facebook.com/" className='text-decoration-none text-light'><p>Discord</p></a>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-light text-decoration-none">
            <p className='bold'>Places</p>
            <a href="https://www.facebook.com/" className='text-decoration-none text-light'><p>Castle</p></a>
            <a href="https://www.facebook.com/" className='text-decoration-none text-light'><p>Farms</p></a>
            <a href="https://www.facebook.com/" className='text-decoration-none text-light'><p>Beach</p></a>
            <a href="https://www.facebook.com/" className='text-decoration-none text-light'><p>Learn more</p></a>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-light">
            <p className='bold'>About us</p>
            <a href="https://www.facebook.com/" className='text-decoration-none text-light'><p>Road map</p></a>
            <a href="https://www.facebook.com/" className='text-decoration-none text-light'><p>Creators</p></a>
            <a href="https://www.facebook.com/" className='text-decoration-none text-light'><p>Career</p></a>
            <a href="https://www.facebook.com/" className='text-decoration-none text-light'><p>Contact us</p></a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer