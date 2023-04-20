import React, { useState, useEffect } from "react";
import usePosts from "../hook/hook";
import { Link } from "react-router-dom";

const Blog = () => {
  // const [posts, setPosts] = useState([]);
  const [loading, error, data] = usePosts();

  return (
    <div className="blog flex-[2]">
      <h1 className="font-semibold mx-auto text-[50px] text-center text-violet-700 mt-[30px]">My Blog</h1>
      {error && "Error"}
      {!error && loading && "Loading"}
      {!error && !loading && data && (
        <>
          {data.map((post) => (
            <div className="bg-white border border-black-900 rounded-lg p-[30px] m-[50px] text-center" key={post.id}>
              <Link to={`blog/${post.id}`}>
                <h2><strong className="text-violet-700 hover:text-red-400">Title:</strong> {post.title}</h2>
              </Link>
              <p><strong className="text-violet-700">Content:</strong> {post.content}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Blog;
