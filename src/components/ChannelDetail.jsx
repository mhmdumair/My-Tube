import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { jack } from '../images'
import Videos from './Videos'
import fetchFromApi from '../utills/fetchFromApi'

const ChannelDetail = () => {

    const {id} = useParams()
    const [channelDetail,selChennalDetail] = useState(null)
    const [videos,setVideos] = useState([])
    const [seeMore,setSeeMore] = useState(false)

    useEffect(()=>{
        fetchFromApi(`channels?part=snippet&id=${id}`)
        .then(data=>selChennalDetail(data.items[0]))

        fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
        .then(data=>setVideos(data.items))
    },[id])

  return (
    <div className='tect-white'>
        <div className='w-full md:h-[200px] h-[100px]' 
        style={{background: 'rgb(6,105,131)',
            background: 'linear-gradient(90deg, rgba(6,105,131,0.9500175070028011) 33%, rgba(15,187,181,1) 71%, rgba(48,193,188,1) 80%)'}}></div>

        {channelDetail &&
        <section className='flex flex-col items-center justify-center  w-[75%] mx-auto p-4 mb-6'>
            <div className='bg-white rounded-full p-1 mt-[-100px]'>
                <img src={channelDetail?.snippet?.thumbnails?.high?.url} alt='channel Logo'
                className='w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full' />
            </div>
            <h3 className='text-gray-500 font-bold text-3xl mt-2'>
            {channelDetail?.snippet?.title}</h3>
            <h3 className='text-gray-300 mt-2 text-xl font-bold'>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers</h3>

            {seeMore? 
                <div className='p-2'>
                    <p className='text-gray-500 text-lg mt-2'>
                    {channelDetail?.snippet?.description}
                    </p>
                    <p className='float-right block text-gray-500 mr-4 underline cursor-pointer'
                        onClick={()=>{setSeeMore(!seeMore)}}>
                        See Less</p>
                </div>
                :
                <div className='p-2'>
                    <p className='text-gray-500 text-lg mt-2'>
                    {String(channelDetail?.snippet?.description).substring(0,300)+"..."}
                    </p>
                    <p className='float-right block text-gray-500 mr-4 underline cursor-pointer'
                        onClick={()=>{setSeeMore(!seeMore)}}>
                        See More</p>
                </div>
            }
        
        </section>}
        <section className='mx-[5%]'>
            {videos[0] && 
            <Videos selectedCategory={channelDetail?.snippet?.title}
            videos={videos} channel={true} />}
        </section>
    </div>
  )
}

export default ChannelDetail