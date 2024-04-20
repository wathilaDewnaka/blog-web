import React from 'react';
import Homepage from './Home'; // Assuming the file is named 'Home.js'
import Navbar from './Navbar';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewBlog from './NewBlog'
import BlogDetails from './BlogDetails';
import Error from './Error'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navbar />}>
          <Route index element={<Homepage />} />
          
          <Route path="home" element={<Homepage />} />
          <Route path="new" element={<NewBlog />} />

          
          <Route path="blogs/:id" element={<BlogDetails/>} />
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>


    </div>
  );
}

export default App;
