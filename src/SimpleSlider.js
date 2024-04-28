import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import orinimate from './image/ori.jpg'
import orinim from './image/ori.jpg'


import Slider from "react-slick";
import styled from 'styled-components';

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };
  return (
    <Slider {...settings}>
      <Slid1>
        <h3>
          <img src={orinimate} className='onimate'/>
          <img src={orinim} className='onimamte'/>
        </h3>
      </Slid1>
      <div>
        <h3>2</h3>
      </div>
      {/* <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div> */}
    </Slider>
  );
}

const Slid1 = styled.div`
display: flex;
.onimate{
  weidth: 30%;
  height: 30%;
}
`