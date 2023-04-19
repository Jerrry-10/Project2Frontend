import React, { useState, useEffect } from "react";
import usePosts from "../hook/hook";

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
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Blog;
