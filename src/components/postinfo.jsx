import React, { useState } from "react";
import updatePost from "../hook/patchhook";
import deletePost from "../hook/deletehook";
import { Link } from "react-router-dom";

function PostInfo({ post }) {
  const { updateData: deletePostData, error: deleteError } = deletePost(
    post.id
  );

  const handleDelete = async () => {
    try {
      await deletePostData();
      alert("Post deleted!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="bg-white border border-black-900 rounded-lg p-[30px] m-[20px] text-center">

        <h1 className="mt-[5px]"><strong className="text-violet-700">Title:</strong> {post.title}</h1>
        <p className="mt-[5px]"><strong className="text-violet-700">Content:</strong> {post.content}</p>

        <Link to={`/blog/${post.id}/edit`} className="bg-violet-500 hover:bg-violet-400 text-white font-bold py-[8.5px] px-[20px] 
        border-b-4 border-violet-700 hover:border-violet-500 rounded mt-[50px]">Edit Post</Link>{" "}
        
        <button 
          className="bg-violet-500 hover:bg-violet-400 text-white font-bold py-[6px] px-[20px]
          border-b-4 border-violet-700 hover:border-violet-500 rounded mt-[20px]" 
          onClick={handleDelete}>
            Delete Post
        </button>{" "}

        {deleteError && <p>Error: {deleteError}</p>}
      </div>
    </div>
  );
}

export default PostInfo;
