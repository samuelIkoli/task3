import React from 'react'
import Footer from './Footer';
import Navigatingbar from './Navigatingbar'


function Home() {
  const pics = ['f1.png', 'f2.png', 'f3.png', 'f4.png', 'f5.png', 'f6.png', 'f7.png', 'f8.png'];

  return (
    <div className='home'>
      <Navigatingbar className='fixed-top' />

      <div className="b1 mt-5 mb-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-6 mb-4">
              <br />
              <img src="t1.png" alt="" className='img-fluid mb-2' />
              <img src="t2.png" alt="" className='img-fluid' />
              <div className='searchSection'>
                <input type="text" placeholder='Search for location' className='w-100' />
                <a href='https://www.google.com/' target="_blank" rel="noopener noreferrer">
                  <img src="search.png" alt="" className='img-fluid float-end' />
                </a>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="container-fluid justify-items-center">
                <div className="row">
                  <span className="col">
                    <br />
                    <br />
                    <br />
                    <br />
                    <img src="i1.png" alt="" className='img-fluid mb-2' />
                    <img src="i2.png" alt="" className='img-fluid' />
                  </span>
                  <span className="col">
                    <img src="i3.png" alt="" className='img-fluid mb-2' />
                    <img src="i4.png" alt="" className='img-fluid' />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zEs3NysvSEtWYDRgdGDwYs8vSM0rTk0EAG_nB_8&q=opensea&oq=open&aqs=chrome.1.69i57j46i199i433i465i512j69i59j46i433i512j0i131i433i512j69i60l3.2623j0j4&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer">
        <img src="ww.png" alt="" className='img-fluid' />
      </a>

      <div className="b2 container flex mt-5">
        <div className="text-cener mb-4">
          <img src="inspiration.png" alt="" className='img-fluid' />
        </div>
        <div className="row space d-flex justify-content-between">
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

      <div className=''>
        <img src="foot.png" alt="" className='img-fluid' />
      </div>

      <Footer />

    </div>
  )
}

export default Home