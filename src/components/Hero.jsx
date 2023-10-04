import React from 'react'
import HeroImage from '../assets/hero_image.webp';

const Hero = () => {
  return (
    <div className='md:flex-row flex-col w-full flex md:w-[1280px] h-screen justify-center md:justify-between items-center mx-auto px-5'>
      <div className='md:w-1/2 w-full'>
        <h1>Ved.jx</h1>
      </div>

      <div className='md:w-1/2 w-1/2'>
        <img src={HeroImage} />
      </div>
    </div>
  )
}

export default Hero