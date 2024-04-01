import React from 'react'
import { Link } from 'react-router-dom'

const ChannelCard = ({channelDetail,searchFeed}) => {
  return (
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
    <div className='flex items-center justify-center gap-10 w-full mt-5 mb-5'>
      <div>
        <img src={channelDetail?.snippet?.thumbnails?.high?.url }
            alt={channelDetail?.snippet?.title} 
            className={`${searchFeed ? 'w-[150px] h-[150px]  sm:w-52 sm:h-52':'sm:h-44 sm:w-44'} rounded-full`} />
        <div className='flex-1 w-full'>

            <h1 className={`text-gray-400 
              ${searchFeed?'text-4xl max-sm:text-xl ':'text-xl text-center'}`}>
                {channelDetail?.snippet?.title}</h1>

            {channelDetail?.statistics?.subscriberCount ? 
                <h2 className='text-gray-500 text-xl'>
                {parseInt(channelDetail?.statistics?.subscriberCount.toLocaleString())} Subscribers</h2> :
                <h2 className='text-gray-500 text-xl 
                  text-center'> View Channel</h2>}
            
        </div>
      </div>
    </div>
    </Link>
  )
}

export default ChannelCard