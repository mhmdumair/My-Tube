import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Videos } from '.'
import fetchFromApi from '../utills/fetchFromApi'

const SearchFeed = () => {

  const {search} = useParams()
  const [videos,SetVideos] = useState([])

  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${search}`)
    .then((data)=>SetVideos(data.items))
  },[search])

  return (
    <div className='text-white w-[90%] max-sm:w-full mx-auto'>
      {videos && <Videos videos={videos} searchFeed={search} />}
    </div>
  )
}

export default SearchFeed