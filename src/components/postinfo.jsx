import React, { useState } from "react";
import updatePost from "../hook/patchhook";
import deletePost from "../hook/deletehook";

function PostInfo({ post }) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const { updateData: updatePostData, loading, error } = updatePost(post.id);
  const { updateData: deletePostData, error: deleteError } = deletePost(
    post.id
  );

  const handleUpdate = async () => {
    try {
      await updatePostData(title, content);
      alert("Success!");
    } catch (err) {
      console.error(err);
    }
  };

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
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handleUpdate} disabled={loading}>
          Update Post
        </button>
        <button onClick={handleDelete}>Delete Post</button>{" "}
        {(error || deleteError) && <p>Error: {error || deleteError}</p>}
      </div>
    </div>
  );
}

export default PostInfo;
