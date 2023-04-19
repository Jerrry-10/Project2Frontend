import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import updatePost from "../hook/patchhook";
import usePosts from "../hook/hook";

function EditPost() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const {
    updateData,
    loading: updateLoading,
    error: updateError,
  } = updatePost(id);
  const [loading, error, postData] = usePosts(id);

  useEffect(() => {
    if (postData) {
      setTitle(postData.title);
      setContent(postData.content);
    }
  }, [postData]);

  const handleUpdate = async () => {
    try {
      await updateData(title, content);
      alert("Success!");
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Edit Post</h1>
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
        <button onClick={handleUpdate} disabled={updateLoading}>
          Update Post
        </button>
        {updateError && <p>Error: {updateError}</p>}
      </div>
    </div>
  );
}

export default EditPost;
