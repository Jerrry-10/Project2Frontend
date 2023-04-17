import { useState, useEffect } from "react";
import axios from "axios";

const usePosts = (id) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [postData, setPostData] = useState([]);

  const getPostData = async (id) => {
    let url = `http://localhost:3001/v1/api/posts`;
    if (id) {
      url += `/${id}`;
    }
    try {
      setLoading(true);
      const response = await axios(url);
      setPostData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostData(id);
    return () => {
      setPostData([]);
    };
  }, [id]);

  return [loading, error, postData];
};

export default usePosts;
