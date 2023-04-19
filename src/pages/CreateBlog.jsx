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
      <h1 className="flex justify-center mt-[2rem] text-[20px] text-neutral-700"><strong className="text-violet-700">Create</strong>Page</h1>
      <div className="text-center rounded px-8 pt-6 pb-8 mb-[1rem]">
        <input
          className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline mt-[40px] mb-[20px]"
          placeholder="Enter post content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="10"
          cols="50"
        ></textarea>
        <br />
        <button 
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 
          border-b-4 border-blue-700 hover:border-blue-500 rounded" 
          onClick={handlePostSubmit}>
            Create Post
        </button>

      </div>
    </div>
  );
};

export default BlogCreate;
