import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1266958681/photo/global-business-logistics-import-export-background-and-container-cargo-freight-ship-transport.jpg?s=612x612&w=0&k=20&c=Oom7C2rhYYhA7PKGSBQ1B6ZJaanfRtp3o0B5VE_0cyA="
          alt="First slide"
        />
        <Carousel.Caption>
   
          <p className='d-flex align-items-center h-100 h1 text-left mr-md-5 mb-md-5 p-md-5'>
            ADI Import Export and Trading Company (AIETC)

          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1349093190/photo/container-ship-beneath-bridge.jpg?s=612x612&w=0&k=20&c=dGETLAo0CjIvl7rTX6XE_V-snNEdWKdH0WdoUnd6_tc="
          alt="Second slide"
        />

        <Carousel.Caption>

          <p className='d-flex align-items-center h-100 h1 text-left mr-md-5 mb-md-5 p-md-5'>
            ADI Import Export and Trading Company (AIETC).
            
            </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1364586136/photo/aerial-view-of-cargo-ship-and-cargo-container-in-harbor.jpg?s=612x612&w=0&k=20&c=fI0e_1002z-ZmE4ZDB-KsmRD3Q0fao5TGq-QYA2fbH4="
          alt="Third slide"
        />

        <Carousel.Caption>
  
          <p className='d-flex align-items-center h-100 h1 text-left mr-md-5 mb-md-5 p-md-5'>
            ADI Import Export and Trading Company (AIETC)

          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselHome