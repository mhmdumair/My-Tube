import {React,useEffect,useState} from 'react'
import {Sidebar,Videos} from './'
import fetchFromApi from '../utills/fetchFromApi'

const Feed = () => {

  const [selectedCategory,setSelectedCategory] =useState('New')
  const [videos,SetVideos] = useState([])

  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>SetVideos(data.items))
  },[selectedCategory])

  return (
    <div className='text-white flex flex-col md:flex-row relative'>
        <section className='overflow-auto z-10 md:sticky top-14 h-fit'>
            <Sidebar 
                selectedCategory={selectedCategory}
                setSelectedCategory ={setSelectedCategory}/>
        </section>
        <section className=' mx-auto w-full'>
            <Videos selectedCategory={selectedCategory}
            videos={videos} />
        </section>
    </div>
  )
}

export default Feed