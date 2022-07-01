import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen'>
        <div className='max-w-screen p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
                Lorem ipsum...
            </p>

            <br />

            <p className='text-xl'>
                Lorem ipsum...
            </p>
        </div>
    </div>
  )
}

export default About