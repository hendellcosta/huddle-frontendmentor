import logo from './Media/logo.svg'
import mainImg from './Media/main-img.svg'

import {GrFacebookOption} from 'react-icons/gr'
import {GrTwitter} from 'react-icons/gr'
import {AiOutlineInstagram} from 'react-icons/ai'

function App() {

  return (
    <div className='main-desk main-mbl bg-contain bg-no-repeat py-8 px-12 flex flex-col sm:gap-16 gap-6'>
      <img src={logo} alt="Logo" className='sm:w-52 w-32 cursor-pointer' />

      <div className='flex sm:flex-row flex-col sm:gap-20 gap-8'>
        <img src={mainImg} alt="Illustrations" className='sm:w-[51.9%]' />

        <div className='sm:max-w-2xl flex flex-col sm:gap-12 gap-6 py-10 items-center sm:text-left sm:items-start'>
        <h1 className='sm:text-6xl text-2xl sm:font-bold font-semibold text-center sm:text-left'>Build The Community Your Fans Will Love</h1>

        <p className='text-base sm:text-left text-center sm:max-w-[30.5rem]'>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as 
          you engage in genuine discussion.
        </p>

        <button className='rounded-full border-violet-500 shadow-2xl text-violet hover:text-white font-medium bg-white hover:bg-magentaHover py-2 px-14 max-w-[10rem]'>
          Register
        </button>
        </div>

      </div>

      <div className='flex flex-row gap-4 sm:justify-end justify-center sm:mr-8'>
        <GrFacebookOption className='border hover:border-magenta rounded-full p-2 text-[40px] hover:text-magenta cursor-pointer' />
        <GrTwitter className='border hover:border-magenta rounded-full p-2 text-[40px] hover:text-magenta cursor-pointer' />
        <AiOutlineInstagram className='border hover:border-magenta rounded-full p-2 text-[42px] hover:text-magenta cursor-pointer' />
      </div>
    </div>
  )
}

export default App
