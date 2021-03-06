import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen p-4'>

    <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4
            border-gray-500'>Contact</p>
            <p className='py-6'>Fill out form to contact me</p>
        </div>

        <div className='flex justify-center items-center'>
            <form action='https://getform.io/f/32407af4-f345-440e-837a-104da15d0dc1'
             className='my-4 flex flex-col w-full md:w-1/2'>
                <input type='text' name='name' placeholder='enter your email' className='p-2 bg-transparent border-2 
                rounded-md focus:outline-none' />
                <textarea name='message' placeholder='enter your message' rows='10' className='p-2
                bg-transparent border-2 rounded-md focus:outline-none'>

                </textarea>

                <button className='bg-gradient-to-b from-cyan-500 px-6 py-3 my-8 mx-auto
                flex items-center rounded-md hover:scale-110 duration-300'>Let's commune</button>
            </form>
        </div>
    </div>

    </div>
  )
}

export default Contact