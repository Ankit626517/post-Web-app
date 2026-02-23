import React, { createContext, useContext, useEffect, useState } from "react";

const PostContext = createContext();

export const PostProvider = ({ children }) => {

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  // Fetch API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.log("Error fetching posts:", err));
  }, []);

  // Delete Post
  const deletePost = (id) => {
    const newPosts = posts.filter((p) => p.id !== id);
    setPosts(newPosts);

    // Fix page if last item deleted
    const totalPages = Math.ceil(newPosts.length / 6) - 1;

    if (currentPage > totalPages) {
      setCurrentPage(totalPages < 0 ? 0 : totalPages);
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        deletePost,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

// Custom Hook
export const usePost = () => useContext(PostContext);