import { useState } from "react";
import axios from "axios";

function deletePost(id) {
  const [error, setError] = useState(null);
  const updateData = async (title, content) => {
    setError(null);

    try {
      const response = await axios.delete(
        `http://localhost:3001/v1/api/posts/${id}`
      );

      return response;
    } catch (err) {
      setError(err.message || "Something went wrong");
      throw err;
    }
  };

  return { updateData, error };
}

export default deletePost;
