import React from 'react'
import { Link } from 'react-router-dom'
import Ucard from './Ucard'
import './Upcoming.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
      <FaChevronRight size={32} />
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
      <FaChevronLeft size={32} />
      </button>
    </div>
  )
}

const Upcoming = ( { items, title }) => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
    };
  return (
    <>
      <section className="upcome text-white">
        <div className="custom-container p-10">
            <div className='heading flex items-center justify-between'>
                <h1> {title} </h1>
                <Link to='/' className='text-red-500 font-semibold'>View All</Link>
            </div>
            
            <div className="content ">
            <Slider {...settings}>
                {items.map((item) => (
                    <Ucard key={item.id} item={item} />
                ))}
                 </Slider>
            </div>
           
        </div>
      </section>
    </>
  )
}

export default Upcoming
