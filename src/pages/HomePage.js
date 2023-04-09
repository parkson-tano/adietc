import React from 'react'
import { Container } from "react-bootstrap";
import CarouselHome from '../components/CarouselHome';
import CardHome from '../components/CardHome';
import Testimonials from '../components/Testimonials';

function HomePage() {
  return (
      <div className='bg-slate-200'>
          <CarouselHome />
          <CardHome />
          <Testimonials />
      </div>
  )
}

export default HomePage