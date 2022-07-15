import React from 'react';
import projectOne from '../../assets/projectOne.png';
import projectTwo from '../../assets/projectTwo.png';
import projectThree from '../../assets/projectThree.png';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: projectOne
        },
        {
            id: 2,
            src: projectTwo
        },
        {
            id: 3,
            src: projectThree
        }
    ]

  return (
    <div className='w-full md:h-screen'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>Portfolio</p>
                <p className='py-6'>A couple projects</p>
            </div>

            <div 
                className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
                px-12 sm:px-0'>
            {portfolios.map(({id, src}) => (

                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
                    <div className='flex item-center justify-center'>
                        <button className='px-6 py-2 m-4 duration-200 hover:scale-105'>Press for Github</button>
                    </div>
                </div>

           
                ))
            }
            </div>

        </div>

    </div>
  )
}

export default Portfolio