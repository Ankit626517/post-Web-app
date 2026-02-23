import React from "react";
import { usePost } from "../Contextapi/PostProvider";

function Card({ post }) {
  const { deletePost } = usePost();

  return (
    <div className="group bg-white shadow-md hover:shadow-2xl transition-all duration-300 p-5 rounded-2xl flex flex-col justify-between relative transform hover:-translate-y-2 hover:scale-105">

      {/* Delete Button */}
      <button
        className="absolute top-3 right-3 text-red-400 opacity-0 group-hover:opacity-100 transition duration-300 hover:scale-125"
        onClick={() => deletePost(post.id)}
      >
        ❌
      </button>

      {/* Title */}
      <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-blue-600 transition">
        {post.title}
      </h3>

      {/* Body */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {post.body}
      </p>

    </div>
  );
}

export default Card;