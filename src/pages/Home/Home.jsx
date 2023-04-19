import Header from "../../components/header/Header";
import Blog from "../blogs";
import Post from "../post";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home flex">
        <Blog />

        <Sidebar />
      </div>
    </>
  );
};

export default Home;
