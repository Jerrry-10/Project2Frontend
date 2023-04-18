import React, { useState } from "react";
import createPost from "../hook/posthook";

const BlogCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePostSubmit = async () => {
    try {
      await createPost({ title, content });
      alert("Post created successfully!");
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post.");
    }
  };

  return (
    <div>
      <h1>TTEST</h1>
      <input
        type="text"
        placeholder="Enter post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Enter post content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="10"
        cols="50"
      ></textarea>
      <br />
      <button onClick={handlePostSubmit}>Create Post</button>
    </div>
  );
};

export default BlogCreate;
