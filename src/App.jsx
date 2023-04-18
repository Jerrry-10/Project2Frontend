import React from "react";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Navigation />
        <Home />
        





        <Routes>{/* <Route path="/" element={} /> */}</Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
