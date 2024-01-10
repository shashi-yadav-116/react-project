import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./pages/home/home";
import List from "./pages/lists/list";
import Hotel from "./pages/hotel/hotel";

import React from "react";


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/hotels" element={<List/>}/>
    <Route path="/hotels/:id" element={<Hotel/>}/>

    
  </Routes>
  </BrowserRouter>
  );
}

export default App;
