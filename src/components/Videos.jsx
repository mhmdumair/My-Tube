import React from 'react'
import {ChannelCard, VideoCard} from './'

const Videos = ({selectedCategory,videos,channel,searchFeed}) => {
  return (
    <div className='px-5 h-[100%] w-full'>
      <h4 className='text-4xl font-bold mb-3'>
        {selectedCategory &&
        <span className={channel? 'text-gray-300':'text-[#FC1503]'}>
        {selectedCategory?selectedCategory:searchFeed}</span>} Videos</h4>

      <section className={`${searchFeed? 'flex flex-col gap-1': 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 pt-6'}`}>
        {videos.map((item,index)=>(
          <div key={index}>
            {item.id.videoId && <VideoCard video={item} searchFeed={searchFeed} />}
            {item.id.channelId && <ChannelCard channelDetail={item} 
            searchFeed={searchFeed} />}
          </div>
        ))}
      </section>
      
    </div>
  )
}

export default Videos