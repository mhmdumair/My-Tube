import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import fetchFromApi from '../utills/fetchFromApi'
import { user, like, notification } from '../images'
import { CheckCircle } from '@mui/icons-material'
import VideoCard from './VideoCard'
import CommentSection from './CommentSection'

const VideoDetail = () => {

    const {id} = useParams()
    const [videoDetail,setVideoDetail] = useState(null)
    const [subscribe,setSubscribe]= useState(false)
    const [seeMore,setSeeMore] = useState(false)
    const [relatedVideo,setRelatedVideo] = useState([])


    useEffect(()=>{
        fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
        .then(data=>setVideoDetail(data.items[0]))

        fetchFromApi(`search?relatedToVideoId=${id}&part=snippet&type=video`)
        .then(data=>setRelatedVideo(data.items))
    
    },[id])

  return (
    <div className=' text-white mx-[5%] md:mx-[8%] flex-col md:flex-row flex
    md:justify-between min-h-screen'>

        {videoDetail && 
        <section className='md:max-w-[65%] w-full'>  

            <iframe width="560" 
            src={`https://www.youtube.com/embed/${id}?si=YvYiOs9FfuYwOcLR`} title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            className='w-[95%] h-[350px] max-md:w-full max-md:h-[250px]'
             />

            <h1 className='pr-[9%] text-xl mt-8'>
                {videoDetail?.snippet?.title}</h1>

            <div className='flex items-center justify-between mt-4 flex-wrap'>
                <div className='flex items-center gap-3 max-sm:w-full'>
                    
                    <img src={user} alt='channel logo' 
                        className='w-[37px] h-[37px] rounded-full'/>
                    <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                        <h3 className='text-lg text-gray-600 text-nowrap'>
                            {videoDetail?.snippet?.channelTitle}</h3>
                    </Link>
                    <CheckCircle sx={{fontSize:'18px', color:'gray'}} />

                    <button className={`w-[120px] py-2 px-2 pr-3 rounded-[10px] hover:opacity-85
                    ${subscribe? 'bg-gray-600':'bg-[#FF0000]' }
                     active:scale-105 flex items-center justify-center gap-1 text-[16px]`}
                     onClick={()=>setSubscribe(!subscribe)}>
                        <img src={notification} alt='bel Icon'
                            className='w-[18px]'/>
                        {subscribe ? <p>SUBSCRIBED</p> :<p>SUBSCRIBE</p>}
                    </button>

                </div>
                <div className='flex items-center justify-end mr-[100px] gap-10'>
                    <div className='flex gap-2'>
                        <img src={like} alt='like' 
                            className='w-[20px]'/>
                        <h3>{parseInt(videoDetail.statistics.likeCount).toLocaleString()}</h3>
                    </div>
                    <h3 className='text-nowrap'>{parseInt(videoDetail.statistics.likeCount).toLocaleString()} Views</h3>

                </div>
            </div>

            <div className=' my-6 bg-gray-800 p-3  overflow-hidden rounded-3xl mr-2'>
                {
                    !seeMore ?
                    <div>
                        <h3>
                            {String(videoDetail.snippet.description).substring(0,400)+'...'}</h3>
                        <span className='block float-right mr-3 cursor-pointer underline'
                             onClick={()=>setSeeMore(!seeMore)}>
                            See More</span>
                    </div>:
                    <div>
                        <h3>{videoDetail.snippet.description}</h3>
                        <span className='block float-right mr-3 cursor-pointer  underline'
                         onClick={()=>setSeeMore(!seeMore)}>
                        See Less</span>
                    </div>

                }
            </div>

            <CommentSection id={id} />

        </section>}

        {relatedVideo && 
        <section className='w-full h-full ml-4 sm:max-w-[330px] flex-1 flex flex-col mr-4 '>
            {relatedVideo.map((video,index)=>(
                <VideoCard video={video} related={true} key={index} />
            ))}
        </section>}
    </div>
  )
}

export default VideoDetail