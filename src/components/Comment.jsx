import React from 'react'
import {dislike, like} from '../images'

const Comment = ({snippet}) => {

    if (!snippet || !snippet.topLevelComment) {
        return null; // or handle appropriately based on your requirements
      }
    
      const {
        authorProfileImageUrl,
        authorDisplayName,
        publishedAt,
        textOriginal
      } = snippet.topLevelComment.snippet;
  return (
    <div >
        {snippet && 
        <div className='flex flex-row gap-5 items-start my-8 w-full'>
            <img src={authorProfileImageUrl} alt='coment user profile'
            className='w-[40px] h-[40px] rounded-full mt-3' />
            <div className='flex-1 '>
                <h2>
                    <span className='mr-3 text-xl'>{String(authorDisplayName).substring(1)}</span>
                    <span className='text-gray-500'>
                        {String(publishedAt).substring(0,10)}
                    </span>
                </h2>
                <p className='text-gray-300 mb-3 mt-3'>
                    {textOriginal}</p>
                <div className='flex justify-start items-center mr-[25%] gap-6'>
                    <img src={like} alt='like'
                    className='w-[25px] ' />
                    <img src={dislike} alt='dislike'
                    className='w-[25px]' />
                    <span className='text-gray-500' >
                        REPLY</span>
                </div>
            </div>
        </div>}
    </div>
  )
}

export default Comment