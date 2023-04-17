import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>{/* <Route path="/" element={} /> */}</Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
