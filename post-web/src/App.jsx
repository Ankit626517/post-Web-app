import React from "react";
import Card from "./component/Card";
import { usePost } from "./Contextapi/PostProvider";
import Button from "./component/Button";
import "./App.css";

function App() {
  const { posts, currentPage } = usePost();

  const start = currentPage * 6;
  const currentPosts = posts.slice(start, start + 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8">

      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        ✨ Post Gallery
      </h1>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>

        <Button />
      </div>

    </div>
  );
}

export default App;