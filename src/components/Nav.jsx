import React, { useState } from 'react'
import {user,searchIcon} from '../images'
import {logo} from '../utills/constants'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

    const [search,setSearch] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (search){
            navigate(`/search/${search}`)
            setSearch('')
        }
    }

  return (
    <div className='px-[5%] py-3 pb-10  '>
        <nav className='flex  items-center'>
            
            <section>
                <img src={logo} alt='logo' height={50} width={150}
                    className='w-[50px]' 
                    onClick={()=>navigate('/')}/>
            </section>
            <section className='flex-1 h-14'>
                <div className='flex bg-white py-2 px-6 md:w-[450px] w-[350px] max-sm:w-[230px] max-w-md  border rounded-full justify-between mx-auto md:ml-[40%] 
                '>
                    <form 
                    onSubmit={(e)=>{handleSubmit(e)}}>
                    <input 
                        type='text' 
                        placeholder='Search' 
                        className='border-none outline-none'
                        value={search}
                        onChange={e=>{setSearch(e.target.value)}} />
                    
                    </form>
                    <img src={searchIcon} alt='search'
                        className='w-[30px]'/>
               </div>
                
            </section>

            <section className='w-[50px] h-14'>
                <img src={user} alt='user profile' 
                    className='w-[38px] h-[38px] sm:w-[45px] sm:h-[45px] rounded-full'
                />
            </section>
        </nav>
    </div>
  )
}

export default Nav