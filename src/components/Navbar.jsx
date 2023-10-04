import { useState }from 'react'
import WhiteLogo from '../assets/white.png'
import { Icon } from '@iconify/react';
import { Link } from 'react-scroll';

const Navbar = () => {

  const [color, setColor] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    }
    else {
      setColor(false);
    }
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <div className={`text-3xl ${color ? 'bg-[#565cf2]/90 backdrop-blur-sm' : 'bg-[#99ccff]/0 text-white'} duration-500 text-white w-full md:h-[90px] h-[70px] flex justify-between items-center fixed z-50 mx-auto`}>
      <div className='flex justify-between items-center z-50 w-[1280px] relative mx-auto'>

        <div className='pl-5'>
          <img className="min-w-[70px] w-[70px] cursor-pointer" src={WhiteLogo} />
        </div>

        <div className='md:flex justify-between items-center pr-5 text-[20px] font-semibold w-[480px] hidden select-none'>
          <Link className="cursor-pointer" to="/" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
          <Link className="cursor-pointer" to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link>
          <Link className="cursor-pointer" to="services" spy={true} smooth={true} offset={0} duration={500}>Services</Link>
          <Link className="cursor-pointer" to="work" spy={true} smooth={true} offset={0} duration={500}>Our Work</Link>
          <Link className="cursor-pointer" to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link>
        </div>

        <div className='flex md:hidden pr-5'>
          <Icon className="text-[55px] cursor-pointer" icon="majesticons:menu" />
        </div>

      </div>
    </div>
  )
}

export default Navbar