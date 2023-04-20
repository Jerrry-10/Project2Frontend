import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import updatePost from "../hook/patchhook";
import usePosts from "../hook/hook";
import { useNavigate } from "react-router-dom";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
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
      navigate(`/blog/${id}`);
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
    <div className="bg-white border border-black-900 rounded-lg p-[30px] m-[20px] text-center">
      <h1 className="mb-[50px]">
        <strong className="text-violet-700 text-[30px]">Edit Post</strong>
      </h1>

      <div className="flex justify-center flex-wrap items-center flex mb-[30px]">
        <span class="text-gray-500 mr-[10px]">Edit Title</span>
        <input
          className="border border-gray-300 rounded-lg py-[5px] px-[10px] focus:outline-none focus:ring-2
          focus:ring-blue-500 focus:border-transparent"
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {updateError && <p>Error: {updateError}</p>}
      </div>

      <div className="flex justify-center flex-wrap items-center flex">
        <span class="text-gray-500 mr-[10px]">Edit Content</span>
        <textarea
          className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none
          focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="flex justify-center flex-wrap items-center flex mt-[30px]">
        <button
          className="bg-violet-500 hover:bg-violet-400 text-white font-bold py-[6px] px-[20px]
          border-b-4 border-violet-700 hover:border-violet-500 rounded mt-[20px]"
          onClick={handleUpdate}
          disabled={updateLoading}
        >
          Update Post
        </button>
      </div>
    </div>
  );
}

export default EditPost;
