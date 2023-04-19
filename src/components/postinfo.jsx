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
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <Link to={`/blog/${post.id}/edit`}>Edit Post</Link>{" "}
        <button onClick={handleDelete}>Delete Post</button>{" "}
        {deleteError && <p>Error: {deleteError}</p>}
      </div>
    </div>
  );
}

export default PostInfo;
