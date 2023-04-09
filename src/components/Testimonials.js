import React from 'react'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Testimonials() {
    return (
        <Container fluid style={{ marginBottom: 50 }} className='bg-slate-200'>
            <p className="text-center uppercase tracking-wide text-3xl text-indigo-500 font-bold">
                Testimonials
            </p>
            <p className="text-center h2">
                What our customers are saying:
            </p>
            <Carousel>
                <Carousel.Item>
                    <Row>
                        <Col md={6} className='mt-3'>
                            <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                <div className="md:flex">
                                    <div className="md:shrink-0">
                                        <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/278707571_3139583676356900_7501531428988429234_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=AqhsDGPM0LcAX-Eiri_&_nc_ht=scontent-lhr8-1.xx&oh=00_AfCWINgibANXVzmXW5JU40WseZjIGc6K2IBOKs09AnEI8w&oe=64366F9F" alt="Modern building architecture" />
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
                                        <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/278707571_3139583676356900_7501531428988429234_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=AqhsDGPM0LcAX-Eiri_&_nc_ht=scontent-lhr8-1.xx&oh=00_AfCWINgibANXVzmXW5JU40WseZjIGc6K2IBOKs09AnEI8w&oe=64366F9F" alt="Modern building architecture" />
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
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col md={6} className='mt-3'>
                            <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                <div className="md:flex">
                                    <div className="md:shrink-0">
                                        <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/278707571_3139583676356900_7501531428988429234_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=AqhsDGPM0LcAX-Eiri_&_nc_ht=scontent-lhr8-1.xx&oh=00_AfCWINgibANXVzmXW5JU40WseZjIGc6K2IBOKs09AnEI8w&oe=64366F9F" alt="Modern building architecture" />
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
                                        <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/278707571_3139583676356900_7501531428988429234_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=AqhsDGPM0LcAX-Eiri_&_nc_ht=scontent-lhr8-1.xx&oh=00_AfCWINgibANXVzmXW5JU40WseZjIGc6K2IBOKs09AnEI8w&oe=64366F9F" alt="Modern building architecture" />
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
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col md={6} className='mt-3'>
                            <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                <div className="md:flex">
                                    <div className="md:shrink-0">
                                        <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/278707571_3139583676356900_7501531428988429234_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=AqhsDGPM0LcAX-Eiri_&_nc_ht=scontent-lhr8-1.xx&oh=00_AfCWINgibANXVzmXW5JU40WseZjIGc6K2IBOKs09AnEI8w&oe=64366F9F" alt="Modern building architecture" />
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
                                        <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/278707571_3139583676356900_7501531428988429234_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=AqhsDGPM0LcAX-Eiri_&_nc_ht=scontent-lhr8-1.xx&oh=00_AfCWINgibANXVzmXW5JU40WseZjIGc6K2IBOKs09AnEI8w&oe=64366F9F" alt="Modern building architecture" />
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
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Testimonials
