import React from 'react'
import {user} from '../images'

const AddComments = () => {
  return (
    <div className='w-full flex items-center gap-6 mb-5'>
        <img src={user} alt='user' 
        className='w-[40px] h-[40px] rounded-full my-5'/>

        <form onSubmit={(e)=>{e.preventDefault()}}
            className='flex-1'>
            <input type="text" placeholder='Add your Comment '
            className='w-full bg-transparent text-white text-xl outline-none' />
        </form>
    </div>
  )
}

export default AddComments