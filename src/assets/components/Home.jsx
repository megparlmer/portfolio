import React from 'react'
import heroimage from '../../assets/heroimage.webp'
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div className='h-screen w-full'>
      <div className='max-w-screen-lg mx-auto flex flex-col
      items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text7xl font-bold'>
            I am a FullStack developer?
          </h2>
          <p className='py-4 max-w-md'>
            Just graduated from MSU FullStack Bootcamp!
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className='text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 
            to-blue-500 cursor-pointer'>
              Portfolio
            </Link>
          </div>
        </div>

        <div>
          <img src={heroimage} alt='totoro' 
          className='rounded-2xl mx-auto w-2/3' />
        </div>
      </div>
    </div>
  )
}

export default Home