import HeroImage from '../assets/hero_image.webp';
import { motion } from "framer-motion"

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100
  },
  animate: {
    opacity: 1,
    x: 0
  }
};

const Hero = () => {
  return (
    <div id="/" className='w-full h-[80vh] md:h-[70vh] flex justify-center items-center'>
      <motion.div variants={fadeInAnimationVariants} initial="initial" whileInView="animate" transition={{duration: 0.95}} viewport={{once: true}} className='grid grid-cols-1 md:grid-cols-2 gap-y-10 max-w-[1240px] mx-auto'>
        <div className='text-[70px] font-extrabold text-[#eaeff5] flex justify-center md:items-start flex-col md:text-start w-full text-center drop-shadow-lg px-5'>
          <h1>Ved.<span className='text-red-500'>jx</span></h1>
          <h1 className='text-[28px] md:text-[30px] font-bold'>Afforadable Web Solutions</h1>
          <h1 className='text-[20px] md:text-[20px] font-semibold'>Based in <span className=''>Knoxville, TN</span></h1>
        </div>

        <div className='w-full'>
          <img src={HeroImage} />
        </div>
      </motion.div>
    </div>
  )
}

export default Hero