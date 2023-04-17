import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import blog from "./components/blogs";
import Blog from "./components/blogs";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>{/* <Route path="/" element={} /> */}</Routes>
        <Blog></Blog>
      </div>
    </BrowserRouter>
  );
}

export default App;
