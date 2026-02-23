import React from "react";
import { usePost } from "../Contextapi/PostProvider";

function Button() {
  const { posts, currentPage, setCurrentPage } = usePost();

  const totalPages = Math.ceil(posts.length / 6);

  return (
    <div className="flex justify-center mt-10 gap-3 flex-wrap">

      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 0}
        className="px-4 py-2 rounded-xl bg-white shadow-md hover:bg-blue-500 hover:text-white transition disabled:opacity-40"
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-4 py-2 rounded-xl shadow-md transition-all duration-300 ${
            currentPage === i
              ? "bg-blue-500 text-white scale-110"
              : "bg-white hover:bg-blue-400 hover:text-white"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
        className="px-4 py-2 rounded-xl bg-white shadow-md hover:bg-blue-500 hover:text-white transition disabled:opacity-40"
      >
        Next
      </button>

    </div>
  );
}

export default Button;