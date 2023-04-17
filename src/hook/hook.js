import { useState, useEffect } from "react";
import axios from "axios";

const getPosts = (id) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [postData, setPostData] = useState([]);

  const getBookData = async (id) => {
    let url = `http://localhost:3001/v1/api/posts`;
    if (id) {
      url += `/${id}`;
    }
    try {
      setLoading(true);
      const response = await axios(url);
      const data = await response.json();
      setPostData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getPosts(id);
  }, [id]);

  return [loading, error, bookData];
};

export default getPosts;
