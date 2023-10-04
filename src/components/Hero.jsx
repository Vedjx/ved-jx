import HeroImage from '../assets/hero_image.webp';

const Hero = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center gradBG'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 max-w-[1240px] mx-auto'>
        <div className='text-[70px] font-extrabold text-[#eaeff5] flex justify-center md:items-start flex-col md:text-start w-full text-center drop-shadow-lg px-5'>
          <h1>Ved.<span className='text-red-500'>jx</span></h1>
          <h1 className='text-[28px] md:text-[30px] font-bold'>Afforadable Web Solutions</h1>
          <h1 className='text-[20px] md:text-[20px] font-semibold'>Based in <span className=''>Knoxville, TN</span></h1>
        </div>

        <div className='w-full'>
          <img src={HeroImage} />
        </div>
      </div>
    </div>
  )
}

export default Hero