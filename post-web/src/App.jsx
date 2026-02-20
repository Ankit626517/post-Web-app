import { useState } from "react";
import Card from "./component/Card";
import { usePost } from "./Contextapi/PostProvider";
import Button from "./component/Button";

// import Card from "./component/Card";
import "./App.css";

function App() {
  const { Posts, currentPages, setCurrentPage } = usePost();
  console.log(Posts);

  const start = currentPages * 6;
  const currentPost = Posts.slice(start, start + 6);

  

  return (
    <>
      <div className="max-w-5xl  mx-auto p-4 border-amber-600 border-e-2  ">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentPost.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
        <Button />
      </div>
      
    </>
  );
}

export default App;
