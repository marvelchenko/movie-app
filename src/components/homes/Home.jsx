import React from 'react'
import HomeCard from '../homes/HomeCard'
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

const Home = ({items}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
   <>
    <div className='homeContainer'>
    <Slider {...settings}>
      {items.map((item) => (
        <HomeCard key={item.id} item={item}  />
      ))}
      </Slider>
      </div>
   </>
  )
}

export default Home
