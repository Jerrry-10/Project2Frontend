import { useParams } from "react-router-dom";
import usePosts from "../hook/hook";
import PostInfo from "../components/postinfo";
const Post = () => {
  const params = useParams();
  const [loading, error, data] = usePosts(params.id);
  return (
    <div>
      <h1>Post:</h1>
      {loading && <p>loading</p>}
      {error && "error"}
      {!loading && !error && data && <PostInfo post={data} />}
    </div>
  );
};

export default Post;
