import { useState }from 'react'
import WhiteLogo from '../assets/white.png'
import { Icon } from '@iconify/react';
import { Link } from 'react-scroll';

const Navbar = () => {

  const [color, setColor] = useState(false);
  const [mobile, setMobile] = useState(false);

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
    <>
      <div className={`text-3xl ${color || mobile ? 'md:bg-[#565cf2]/90 bg-[#13153f] backdrop-blur-sm' : 'bg-[#99ccff]/0 text-white'} ${mobile ? ' ' : 'duration-500'} text-white w-full md:h-[90px] h-[70px] flex justify-between items-center fixed z-50 mx-auto`}>
        <div className='flex justify-between items-center z-50 w-[1280px] relative mx-auto'>

          <div className='pl-5'>
          <Link className="cursor-pointer" to="/" spy={true} smooth={true} offset={0} duration={500}>
            <img className="min-w-[70px] w-[70px] cursor-pointer" src={WhiteLogo} />
          </Link>
          </div>

          <div className='md:flex justify-between items-center pr-5 text-[20px] font-semibold w-[480px] hidden select-none'>
            <Link className="cursor-pointer" to="/" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
            <Link className="cursor-pointer" to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link>
            <Link className="cursor-pointer" to="services" spy={true} smooth={true} offset={0} duration={500}>Services</Link>
            <Link className="cursor-pointer" to="work" spy={true} smooth={true} offset={0} duration={500}>Our Work</Link>
            <Link className="cursor-pointer" to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link>
          </div>

          <div className='flex md:hidden pr-5'>
            <Icon onClick={() => setMobile(!mobile)} className="text-[55px] cursor-pointer" icon="majesticons:menu" />
          </div>

        </div>
      </div>

      {
        mobile ? 
        <div className='z-10 fixed top-[70px] bg-[#13153f] h-[400px] text-[25px] font-semibold w-full flex flex-col text-white justify-center items-center'>
            <h1 className=' w-full border-b-2 border-[#6b8cf5]'>
              <Link onClick={() => setMobile(!mobile)} className="cursor-pointer ml-3" to="/" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
            </h1>

            <h1 className=' w-full border-b-2 border-[#6b8cf5] pt-[18px]'>
              <Link onClick={() => setMobile(!mobile)} className="cursor-pointer ml-3" to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link>
            </h1>

            <h1 className=' w-full border-b-2 border-[#6b8cf5] pt-[18px]'>
              <Link onClick={() => setMobile(!mobile)} className="cursor-pointer ml-3" to="services" spy={true} smooth={true} offset={0} duration={500}>Services</Link>
            </h1>

            <h1 className=' w-full border-b-2 border-[#6b8cf5] pt-[18px]'>
              <Link onClick={() => setMobile(!mobile)} className="cursor-pointer ml-3" to="work" spy={true} smooth={true} offset={0} duration={500}>Our Work</Link>
            </h1>

            <h1 className=' w-full border-b-2 border-[#6b8cf5] pt-[18px]'>
              <Link onClick={() => setMobile(!mobile)} className="cursor-pointer ml-3" to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link>
            </h1>
        </div> : 
      ''
      }

    </>
  )
}

export default Navbar