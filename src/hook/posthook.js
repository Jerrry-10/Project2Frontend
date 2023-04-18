import { useState } from "react";
import axios from "axios";

function createPost() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const postData = async (title, content) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`http://localhost:3001/v1/api/posts`, {
        title,
        content,
      });

      setLoading(false);
      return response;
    } catch (err) {
      setLoading(false);
      setError(err.message || "Something went wrong");
      throw err;
    }
  };

  return { postData, loading, error };
}

export default createPost;
