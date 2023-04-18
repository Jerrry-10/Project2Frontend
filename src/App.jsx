import React from "react";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import BlogCreate from "./pages/CreateBlog";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {/* <Route exact paht="/blog/:id" element{} */}
          <Route exact path="/create" element={<BlogCreate />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
