import { useState } from "react";
import axios from "axios";

function updatePost(id) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const updateData = async (title, content) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.patch(
        `http://localhost:3001/v1/api/posts/${id}`,
        {
          title,
          content,
        }
      );

      setLoading(false);
      return response;
    } catch (err) {
      setLoading(false);
      setError(err.message || "Something went wrong");
      throw err;
    }
  };

  return { updateData, loading, error };
}

export default updatePost;
