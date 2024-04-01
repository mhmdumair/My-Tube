import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({video : {id : {videoId} ,snippet},related,searchFeed}) => {
  return (
    <div className={`w-full 
        ${searchFeed? 'sm:w-full' :related? 'sm:w-300': 'sm:w-[260px]'} flex
        ${searchFeed? 'flex-row max-sm:flex-col items-center gap-10 border border-gray-700 ':'flex-col' }
        p-1 pb-3`}>

        <Link to={`/video/${videoId}`}>
          <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} 
            className='w-full max-w-[400px]'/>
        </Link>

        <div>
          <h3 className={`text-gray-200 
          ${searchFeed && 'text-2xl max-sm:text-xl'} `} >
            {searchFeed? String(snippet?.title) :
              String(snippet?.title).length>40 ? 
                String(snippet?.title).substring(0,40)+"...":
                String(snippet?.title)}</h3>

          <Link to={`/channel/${snippet.channelId}`} >
            <h3 className={`text-gray-400 ${searchFeed && 'text-2xl max-sm:text-xl'}`}>{snippet.channelTitle}</h3>
          </Link>

        </div>
    </div>
  )
}

export default VideoCard