import React, { useState, useEffect } from "react";
import usePosts from "../hook/hook";
import { Link } from "react-router-dom";

const Blog = () => {
  // const [posts, setPosts] = useState([]);
  const [loading, error, data] = usePosts();

  return (
    <div className="blog">
      <h1>My Blog</h1>
      {error && "Error"}
      {!error && loading && "Loading"}
      {!error && !loading && data && (
        <>
          {data.map((post) => (
            <div className="" key={post.id}>
              <Link to={`blog/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
              <p>{post.content}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Blog;
