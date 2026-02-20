
import { current } from "@reduxjs/toolkit";
import React, { Children } from "react";
import { createContext, useContext, useEffect, useState } from "react";

const PostContext = createContext();
  
export const PostProvider = ({ children }) => {

const [Posts, setPost] = useState([]);
const [currentPages , setCurrentPage]  = useState(0)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);

      });
  }, []);

  const deletePost = (id) =>{
    const newPosts = Posts.filter((p) => p.id !== id ); 
    setPost(newPosts)

    const totalPages = Math.ceil(newPosts.length / 6) - 1;
    if(currentPages > totalPages){

     setCurrentPage(totalPages <0 ? 0 :  totalPages)
    }
  }

return(

<PostContext.Provider
  value=
  {{
    Posts , deletePost , currentPages , setCurrentPage
  }}
>

  ({children})
</PostContext.Provider>
);

};
export const usePost = () => useContext( PostContext);
