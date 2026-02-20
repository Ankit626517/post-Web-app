import React from 'react'
import { usePost } from '../Contextapi/PostProvider'

function Card({Post}) {
     const { Posts } = usePost();
     const {deletePost }= usePost();
  return (

    <div className='bg-gray-100  shadow-lg p-4 rounded-lg flex flex-col justify-between relative'>
     
        <br/>
        
        {Posts.slice(0, 10).map((post) => (
        <div className='mt-2 gap-3' key={post.Id}>
               <button className='text-red-500 font-bold self-end'
         onClick={()=>deletePost(post.id)} >
❌
        </button>
          <h3 className="font-semibold text-gray-700 mb-e break-word">{post.title}</h3>
          <p className='text-sm text-gray-700 '>{post.body}</p>
        </div>
        
      
      ))} 

    </div>

  )
}

export default Card