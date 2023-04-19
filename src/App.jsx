import React from "react";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import BlogCreate from "./pages/CreateBlog";
import Post from "./pages/post";
import EditPost from "./components/editPost";
import Contact from "./pages/contact"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/blog/:id" element={<Post />}></Route>
          <Route exact path="/blog/:id/edit" element={<EditPost />}></Route>
          <Route exact path="/create" element={<BlogCreate />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
