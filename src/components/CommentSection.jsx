import { AddComments, Comment } from '/'
import React, { useEffect, useState } from 'react'
import fetchFromApi from '../utills/fetchFromApi'

const CommentSection = ({id}) => {

    const [comments,setComments] = useState([])
    const [loading, setLoading] = useState(true);
    if(!loading){
        console.log(comments)
    }

    useEffect(() => {
      fetchFromApi(`commentThreads?part=snippet&videoId=${id}&maxResults=100`)
        .then(data => {
          setComments(data.items);
          setLoading(false);
        });
    }, [id]);

    const handleComments = ()=>{
        const cmts = document.getElementById('comments')
        cmts.classList.toggle('max-sm:hidden')
    }

    return (
      <div className='flex flex-col'>
        <div className='flex items-center'>
            <h1 className='text-2xl font-bold ml-4'>Comments</h1>
            <h1 className='text-[14px] ml-7 underline sm:hidden'
            onClick={()=>{handleComments()}}>
                View Comments</h1>
        </div>
        
        <AddComments />
        {loading ? (
          <p id='comments' className='max-sm:hidden'>Loading comments...</p>
        ) : (
            <div id='comments' className='max-sm:hidden'>
              {comments.map((comment, index) => (
                <Comment key={index} snippet={comment.snippet} />
              ))}
            </div>
        )}
      </div>
    )
}              

export default CommentSection;