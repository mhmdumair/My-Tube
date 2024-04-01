import React from 'react'
import { categories } from '../utills/constants'

const Sidebar = ({selectedCategory,setSelectedCategory}) => {

    return (
      <div>
        <ul className='flex gap-3 md:flex-col '>
          {categories.map(category=>(
            <li key={category.name} className={`flex gap-3 w-full px-4 py-1
                max-md:my-3 items-center rounded-3xl cursor-pointer mr-16 pr-5`}
                style={{backgroundColor:selectedCategory===category.name && '#FC1503'}}
                onClick={()=>{setSelectedCategory(category.name)}}>

              <span style={{color:selectedCategory===category.name ? 'white' : '#FC1503'}}>
                {category.icon}
              </span>
              <h3 className='text-nowrap'>{category.name}</h3>
            </li>
          ))}
        </ul>
        <footer className='flex items-center justify-center py-6 max-sm:hidden'>
          <p className='text-gray-400'>
            Copyright &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
  )
}

export default Sidebar