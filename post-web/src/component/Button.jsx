import React from 'react'
import { usePost } from '../Contextapi/PostProvider'

function Button() {
    const { Posts, deletePost, currentPages, setCurrentPage } = usePost();
    
    const totalPages = Math.ceil(Posts.length / 6);
    const handleNext = () =>{
    if((currentPages+1)*6 < Posts.length)
      setCurrentPage(currentPages +1)
  }

  const handlePrev = () =>{
    if(currentPages >0 ){
      setCurrentPage(currentPages -1 )
    }
  }

    return (
        <div className='flex justify-center gap-2 mt-4'>
            <button
            className='px-2 py-1 bg-gray-200 rounded '

                onClick={handlePrev}>
                Prev
            </button>
            {
                [...Array(totalPages)].map((_, i) => (
            <button key={i}
            
                onClick={handleNext}
            >
                {i + 1}
            </button>
            


            ))  }


            <button
            onClick={currentPages === totalPages}
            > Next</button>

          
        </div>
    )
}

export default Button