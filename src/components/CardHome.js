import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CardHome() {
  return (
      <Container fluid style={{ marginBottom: 50 }} className='bg-slate-200'>
          <p className="text-center h2">
              Our Core Service
          </p>
          <Row>
              <Col md={4}>
                  <Card>
                      <Card.Img variant="top"
                          style={{ height: '300px' }}
                      src="https://media.istockphoto.com/id/1279313029/photo/aerial-view-of-a-heavy-loaded-container-cargo-vessel.jpg?s=612x612&w=0&k=20&c=kH59t7Xcm2J9AlpYvibjmEV7T9Fw5r28QR5dDGMfcOg=" />
                      <Card.Body>
                          <Card.Title className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">Import</Card.Title>
                          <Card.Text className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                          </Card.Text>
                          <Button variant="outline-success" size="lg" className='mt-3'>Get Started</Button>
        
                      </Card.Body>
                  </Card>
              </Col>
              <Col md={4}>
                  <Card>
                      <Card.Img variant="top" 
                          style={{ height: '300px' }}
                      src="https://media.istockphoto.com/id/1279313029/photo/aerial-view-of-a-heavy-loaded-container-cargo-vessel.jpg?s=612x612&w=0&k=20&c=kH59t7Xcm2J9AlpYvibjmEV7T9Fw5r28QR5dDGMfcOg=" />
                      <Card.Body>
                          <Card.Title className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">Export</Card.Title>
                          <Card.Text className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                          </Card.Text>
                          <Button variant="outline-success" size="lg" className='mt-3'>Get Started</Button>

                      </Card.Body>
                  </Card>
              </Col>
              <Col md={4}>
                  <Card>
                      <Card.Img variant="top"
                          style={{ height: '300px' }}
                      src="https://media.istockphoto.com/id/1273907202/photo/business-logistics-and-transportation-concept-of-containers-cargo-freight-ship-and-cargo.jpg?s=612x612&w=0&k=20&c=6dE-0GHbcbAQmGE9ZIl3iHU0WdvspWc2Ma7jKRU5SRw=" />
                      <Card.Body>
                          <Card.Title className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">Trading</Card.Title>
                          <Card.Text className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                          </Card.Text>
                          <Button variant="outline-success" size="lg" className='mt-3'>Get Started</Button>

                      </Card.Body>
                  </Card>
              </Col>
              <Col md={6} className='mt-3'>
                  <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                      <div className="md:flex">
                          <div className="md:shrink-0">
                              <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://media.istockphoto.com/id/1279313029/photo/aerial-view-of-a-heavy-loaded-container-cargo-vessel.jpg?s=612x612&w=0&k=20&c=kH59t7Xcm2J9AlpYvibjmEV7T9Fw5r28QR5dDGMfcOg=" alt="Modern building architecture" />
                          </div>
                          <div className="p-8">
                              <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">Product Tracking</div>
                              <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Know where you Shipment is at anytime</a>
                              <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                          </div>
                      </div>
                  </div>
              </Col>
              <Col md={6} className='mt-3'>
                  <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                      <div className="md:flex">
                          <div className="md:shrink-0">
                              <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://media.istockphoto.com/id/1279313029/photo/aerial-view-of-a-heavy-loaded-container-cargo-vessel.jpg?s=612x612&w=0&k=20&c=kH59t7Xcm2J9AlpYvibjmEV7T9Fw5r28QR5dDGMfcOg=" alt="Modern building architecture" />
                          </div>
                          <div className="p-8">
                              <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">Easy Means of Payment</div>
                              <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                              <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                          </div>
                      </div>
                  </div>
              </Col>
          </Row>
      </Container>
  )
}

export default CardHome